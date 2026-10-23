import { useEffect, useRef, useState } from "react";
import { portfolioMetrics, projects } from "../data/portfolioData";

function Count({ value, suffix = "", decimals = 0 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const started = performance.now();
      const animate = now => {
        const progress = Math.min((now - started) / 1250, 1);
        setDisplay(Number((value * (1 - (1 - progress) ** 3)).toFixed(decimals)));
        if (progress < 1) frame = requestAnimationFrame(animate);
      };
      frame = requestAnimationFrame(animate);
    }, { threshold: .35 });
    if (ref.current) observer.observe(ref.current);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [value, decimals]);
  return <strong ref={ref} className="proof-value" role="text" aria-label={`${value.toFixed(decimals)}${suffix}`}><span aria-hidden="true">{display.toFixed(decimals)}{suffix}</span></strong>;
}

export default function ProofStrip() {
  const stats = [
    { value: projects.length, label: "Featured projects" },
    { value: portfolioMetrics.problemsSolved, suffix: "+", label: "Problems solved" },
    { value: portfolioMetrics.completedCredits, label: "Credits completed" },
    { value: portfolioMetrics.cgpa, decimals: 2, label: "CGPA" },
  ];
  return (
    <section className="proof-strip page-shell" aria-label="Portfolio at a glance">
      <div className="proof-stats">
        {stats.map(stat => <div className="proof-stat" key={stat.label}>
          <Count value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
          <span>{stat.label}</span>
        </div>)}
      </div>
    </section>
  );
}
