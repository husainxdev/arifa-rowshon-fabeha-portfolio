import { Cloud, HeartPulse } from "lucide-react";

export default function ProjectVisual({ built, index }) {
  const Icon = built ? HeartPulse : Cloud;
  return <div className={`project-art ${built ? "project-art-health" : "project-art-cloud"}`} aria-hidden="true">
    <div className="project-art-grid" />
    <span className="project-halo" />
    {built ? <svg className="health-pulse" viewBox="0 0 600 180" fill="none" preserveAspectRatio="none">
      <path className="pulse-base" d="M0 96H145L164 96 180 77 197 124 221 38 244 148 267 96H600" />
      <path className="pulse-signal" d="M0 96H145L164 96 180 77 197 124 221 38 244 148 267 96H600" pathLength="1" />
    </svg> : <>
      <span className="cloud-orbit cloud-orbit-one"><i /><i /></span>
      <span className="cloud-orbit cloud-orbit-two"><i /><i /></span>
    </>}
    <div className="project-art-icon"><Icon size={54} strokeWidth={1.4} /></div>
    <span className="project-visual-spark spark-one" /><span className="project-visual-spark spark-two" />
    <span className="absolute bottom-5 left-6 font-mono text-xs uppercase tracking-widest text-[#d8ad60]">Project / 0{index + 1}</span>
  </div>;
}
