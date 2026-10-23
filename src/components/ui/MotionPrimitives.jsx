import { useEffect, useRef, useState } from "react";
import { useMotionPreference } from "../../context/MotionContext";

export function useVisibleOnce(margin = "0px") {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (visible || !ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { rootMargin: margin });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [visible, margin]);
  return [ref, visible];
}

export function AnimatedHeading({ text, as: Tag = "h2", className = "", accentLast = false }) {
  const [ref, visible] = useVisibleOnce("0px 0px -20% 0px");
  const { enabled } = useMotionPreference();
  const words = text.split(" ");
  return <Tag ref={ref} className={className} aria-label={text}>
    {words.map((word, i) => <span className="word-mask" key={`${word}-${i}`} aria-hidden="true">
      <span className={`word-fly ${accentLast && i === words.length - 1 ? "text-gradient-animate" : ""}`}
        data-visible={visible || !enabled} style={{ transitionDelay: enabled ? `${i * 75}ms` : "0ms" }}>{word}</span>
    </span>)}
  </Tag>;
}

export function MotionScene({ children, className = "", as: Tag = "div", ...props }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const { enabled } = useMotionPreference();
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { rootMargin: "80px" });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return <Tag {...props} ref={ref} className={`motion-scene ${className}`} data-running={enabled && inView}>{children}</Tag>;
}

export function InteractiveCard({ children, className = "", as: Tag = "div", tilt = 3, ...props }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const { enabled } = useMotionPreference();
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { rootMargin: "80px" });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  const reset = () => {
    ref.current?.style.removeProperty("--card-rotate-x");
    ref.current?.style.removeProperty("--card-rotate-y");
    ref.current?.style.removeProperty("--card-light-opacity");
  };
  const move = event => {
    if (!enabled || event.pointerType !== "mouse" || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const rect = ref.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
    ref.current.style.setProperty("--card-rotate-x", `${(0.5 - y) * tilt * 2}deg`);
    ref.current.style.setProperty("--card-rotate-y", `${(x - 0.5) * tilt * 2}deg`);
    ref.current.style.setProperty("--card-light-x", `${x * 100}%`);
    ref.current.style.setProperty("--card-light-y", `${y * 100}%`);
    ref.current.style.setProperty("--card-light-opacity", "1");
  };
  return <Tag {...props} ref={ref} className={`motion-card ${className}`} data-running={enabled && inView}
    onPointerMove={move} onPointerLeave={reset} onBlur={reset}>
    <span className="card-light" aria-hidden="true" />
    {children}
  </Tag>;
}

export function ReadingProgress() {
  const ref = useRef(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      if (ref.current) ref.current.style.transform = `scaleX(${available > 0 ? window.scrollY / available : 0})`;
      frame = 0;
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => { window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); cancelAnimationFrame(frame); };
  }, []);
  return <div ref={ref} aria-hidden="true" className="reading-progress" />;
}
