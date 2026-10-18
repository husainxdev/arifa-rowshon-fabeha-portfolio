import { useEffect, useRef } from "react";
import { motion, useInView, useMotionTemplate, useMotionValue, useScroll, useSpring } from "framer-motion";
import { useMotionPreference } from "../../context/MotionContext";

const ease = [0.22, 1, 0.36, 1];

export function AnimatedHeading({ text, as = "h2", className = "", accentLast = false }) {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true, amount: 0.2 });
  const { enabled } = useMotionPreference();
  const Tag = as;
  const words = text.split(" ");
  return <Tag ref={ref} className={className} aria-label={text}>
    {words.map((word, i) => <span className="word-mask" key={`${word}-${i}`} aria-hidden="true">
      <motion.span
        className={accentLast && i === words.length - 1 ? "text-gradient-animate" : ""}
        initial={enabled ? { y: "112%", rotate: 3, opacity: 0 } : false}
        animate={visible || !enabled ? { y: 0, rotate: 0, opacity: 1 } : undefined}
        transition={{ duration: enabled ? 0.85 : 0, delay: enabled ? i * 0.075 : 0, ease }}
      >{word}</motion.span>
    </span>)}
  </Tag>;
}

export function MotionScene({ children, className = "", as: Tag = "div", ...props }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "80px" });
  const { enabled } = useMotionPreference();
  return <Tag {...props} ref={ref} className={`motion-scene ${className}`} data-running={enabled && inView}>{children}</Tag>;
}

export function InteractiveCard({ children, className = "", as = "div", tilt = 3, ...props }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "80px" });
  const { enabled } = useMotionPreference();
  const rotationX = useSpring(0, { stiffness: 170, damping: 24 });
  const rotationY = useSpring(0, { stiffness: 170, damping: 24 });
  const lightX = useMotionValue(50);
  const lightY = useMotionValue(50);
  const glow = useSpring(0, { stiffness: 160, damping: 24 });
  const background = useMotionTemplate`radial-gradient(360px circle at ${lightX}% ${lightY}%, var(--motion-light), transparent 70%)`;
  const Tag = motion[as] || motion.div;
  const reset = () => { rotationX.set(0); rotationY.set(0); glow.set(0); };
  useEffect(() => { if (!enabled || !inView) reset(); }, [enabled, inView]);
  const move = (event) => {
    if (!enabled || event.pointerType !== "mouse" || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const rect = ref.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
    rotationX.set((0.5 - y) * tilt * 2);
    rotationY.set((x - 0.5) * tilt * 2);
    lightX.set(x * 100);
    lightY.set(y * 100);
    glow.set(1);
  };
  return <Tag {...props} ref={ref} className={`motion-card ${className}`} data-running={enabled && inView}
    style={{ rotateX: rotationX, rotateY: rotationY, transformPerspective: 1000 }} onPointerMove={move} onPointerLeave={reset} onBlur={reset}>
    <motion.span className="card-light" aria-hidden="true" style={{ background, opacity: glow }} />
    {children}
  </Tag>;
}

export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 150, damping: 30, restDelta: 0.001 });
  const { enabled } = useMotionPreference();
  return <motion.div aria-hidden="true" className="reading-progress" style={{ scaleX: enabled ? smooth : scrollYProgress }} />;
}
