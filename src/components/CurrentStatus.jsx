import { useEffect, useRef, useState } from "react";
import { Award, Code2, GraduationCap, Target } from "lucide-react";
import { portfolioMetrics } from "../data/portfolioData";
import { useMotionPreference } from "../context/MotionContext";

function Count({ value }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const { enabled } = useMotionPreference();
  useEffect(() => {
    if (!enabled) {
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
        setDisplay(Math.round(value * (1 - (1 - progress) ** 3)));
        if (progress < 1) frame = requestAnimationFrame(animate);
      };
      frame = requestAnimationFrame(animate);
    }, { threshold: .35 });
    if (ref.current) observer.observe(ref.current);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [value, enabled]);
  return <strong ref={ref} className="current-status-value" role="text" aria-label={`${value}+ problems solved`}><span aria-hidden="true">{display}+</span></strong>;
}

export default function CurrentStatus() {
  return (
    <section className="current-status-card" aria-label="Arifa's current status">
      <h2 className="current-status-heading"><i aria-hidden="true" /> current status</h2>
      <div className="current-status-list">
        <div className="current-status-row">
          <span className="current-status-icon"><GraduationCap size={18} aria-hidden="true" /></span>
          <div><span>Studying</span><strong>B.Sc. in CSE</strong></div>
        </div>
        <div className="current-status-row">
          <span className="current-status-icon"><Award size={18} aria-hidden="true" /></span>
          <div><span>CGPA</span><strong>{portfolioMetrics.cgpa.toFixed(2)}</strong><small>{portfolioMetrics.completedCredits} credits completed</small></div>
        </div>
        <div className="current-status-row">
          <span className="current-status-icon"><Code2 size={18} aria-hidden="true" /></span>
          <div><span>Focus</span><strong>C++ · Data Structures · Algorithms</strong></div>
        </div>
        <div className="current-status-row">
          <span className="current-status-icon"><Target size={18} aria-hidden="true" /></span>
          <div><span>Practice</span><Count value={portfolioMetrics.problemsSolved} /><small>problems solved</small></div>
        </div>
      </div>
    </section>
  );
}
