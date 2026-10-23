import { ArrowUpRight } from "lucide-react";
import { portfolioMetrics } from "../data/portfolioData";

/** The hero's quiet snapshot of Arifa's current study and project work. */
export default function HeroTerminal() {
  return (
    <aside className="hero-terminal" aria-label="Arifa's current chapter">
      <div className="hero-terminal-body">
        <span className="hero-panel-kicker">ARIFA / NOW</span>
        <div className="hero-panel-intro">
          <h2>Where I am now.</h2>
          <p>Studying Computer Science and Engineering at Metropolitan University, Sylhet.</p>
        </div>
        <div className="hero-panel-facts">
          <div className="hero-panel-fact">
            <span>Current focus</span>
            <strong>C++ · Data Structures · Algorithms</strong>
          </div>
          <div className="hero-panel-fact">
            <span>Current project</span>
            <strong>CloudSphere <small>In progress</small></strong>
          </div>
        </div>
        <div className="hero-panel-metrics" aria-label="Academic progress">
          <div className="hero-panel-metric">
            <span>CGPA</span>
            <strong>{portfolioMetrics.cgpa.toFixed(2)}</strong>
          </div>
          <div className="hero-panel-metric">
            <span>Credits completed</span>
            <strong>{portfolioMetrics.completedCredits}</strong>
          </div>
        </div>
        <a className="hero-terminal-link" href="#projects">Explore projects <ArrowUpRight size={16} aria-hidden="true" /></a>
      </div>
    </aside>
  );
}
