import { Award, Code2, GraduationCap } from "lucide-react";
import { portfolioMetrics } from "../data/portfolioData";

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
      </div>
    </section>
  );
}
