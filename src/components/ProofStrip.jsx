import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { codingProfiles, personalInfo, portfolioMetrics, projects, skills } from "../data/portfolioData";
import PlatformIcon from "./PlatformIcon";

function Count({ value, suffix = "" }) {
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
        setDisplay(Math.round(value * (1 - (1 - progress) ** 3)));
        if (progress < 1) frame = requestAnimationFrame(animate);
      };
      frame = requestAnimationFrame(animate);
    }, { threshold: .35 });
    if (ref.current) observer.observe(ref.current);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [value]);
  return <strong ref={ref} className="proof-value" role="text" aria-label={`${value}${suffix}`}><span aria-hidden="true">{display}{suffix}</span></strong>;
}

export default function ProofStrip() {
  const stats = [
    { value: projects.length, label: "Featured projects" },
    { value: portfolioMetrics.problemsSolved, suffix: "+", label: "Problems solved" },
    { value: skills.length, label: "Core skills" },
    { value: 2025, label: "CSE journey began", static: true },
  ];
  const profiles = [
    { name: "GitHub", url: personalInfo.github },
    ...codingProfiles.filter(item => ["Codeforces", "HackerRank"].includes(item.name)),
    ...(personalInfo.leetcode ? [{ name: "LeetCode", url: personalInfo.leetcode }] : []),
  ];
  return (
    <section className="proof-strip page-shell" aria-label="Portfolio at a glance">
      <div className="proof-stats">
        {stats.map(stat => <div className="proof-stat" key={stat.label}>
          {stat.static ? <strong className="proof-value">{stat.value}</strong> : <Count value={stat.value} suffix={stat.suffix} />}
          <span>{stat.label}</span>
        </div>)}
      </div>
      <div className="proof-links">
        <p>Find my work and practice</p>
        <div>
          {profiles.map(profile => <a key={profile.name} href={profile.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${profile.name} (opens in a new tab)`}>
            <PlatformIcon name={profile.name} className="h-4 w-4" />{profile.name}<ArrowUpRight size={14} aria-hidden="true" />
          </a>)}
        </div>
        <small>321+ is Arifa's provided total; platform counts are not live synced.</small>
      </div>
    </section>
  );
}
