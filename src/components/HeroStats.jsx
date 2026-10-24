import { useEffect, useRef, useState } from "react";
import { useMotionPreference } from "../context/MotionContext";
import { portfolioMetrics, projects } from "../data/portfolioData";

function Stat({ value, suffix = "", decimals = 0, label, delay = 0 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(0);
  const { enabled } = useMotionPreference();

  useEffect(() => {
    if (!enabled) { setShown(value); return; }
    let frame;
    let timer;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      timer = window.setTimeout(() => {
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min((now - start) / 950, 1);
          const rounded = Number((value * (1 - (1 - t) ** 3)).toFixed(decimals));
          setShown(rounded);
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      }, delay);
    }, { threshold: .35 });
    if (ref.current) observer.observe(ref.current);
    return () => { observer.disconnect(); window.clearTimeout(timer); cancelAnimationFrame(frame); };
  }, [value, decimals, delay, enabled]);

  return <div className="hero-stat"><strong ref={ref} aria-label={`${value}${suffix} ${label}`}><span aria-hidden="true">{shown.toFixed(decimals)}{suffix}</span></strong><span>{label}</span></div>;
}

export default function HeroStats() {
  return <div className="hero-stats" aria-label="Portfolio at a glance">
    <Stat value={projects.length} label="Featured projects" />
    <Stat value={portfolioMetrics.problemsSolved} suffix="+" label="Problems solved" delay={120} />
    <Stat value={portfolioMetrics.cgpa} decimals={2} label="CGPA" delay={240} />
  </div>;
}
