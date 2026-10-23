import { ArrowUpRight, Code2, GraduationCap } from "lucide-react";
import { portfolioMetrics } from "../data/portfolioData";

/** The hero's quiet snapshot of Arifa's current study and project work. */
export default function HeroTerminal() {
  return (
    <aside className="hero-terminal" aria-label="Arifa's current chapter">
      <div className="hero-terminal-bar">
        <span className="hero-panel-kicker"><i aria-hidden="true" /> ARIFA / NOW</span>
        <Code2 size={19} aria-hidden="true" />
      </div>
      <div className="hero-terminal-body">
        <div className="hero-panel-intro">
          <h2>Where I am <em>now.</em></h2>
          <p>Studying Computer Science and Engineering at Metropolitan University, Sylhet.</p>
        </div>
        <div className="hero-panel-facts">
          <div className="hero-panel-fact">
            <span>Current focus</span>
            <strong>C++ <b>·</b> Data Structures <b>·</b> Algorithms</strong>
          </div>
          <div className="hero-panel-fact">
            <span>Current project</span>
            <strong>CloudSphere <small>In progress</small></strong>
          </div>
        </div>
        <div className="hero-panel-metrics" aria-label="Academic progress">
          <div className="hero-panel-metric">
            <span><GraduationCap size={15} aria-hidden="true" /> CGPA</span>
            <strong>{portfolioMetrics.cgpa.toFixed(2)}</strong>
          </div>
          <div className="hero-panel-metric">
            <span>Credits completed</span>
            <strong>{portfolioMetrics.completedCredits}</strong>
          </div>
        </div>
      </div>
      <a className="hero-terminal-link" href="#projects">Explore projects <ArrowUpRight size={17} aria-hidden="true" /></a>
    </aside>
  );
}
