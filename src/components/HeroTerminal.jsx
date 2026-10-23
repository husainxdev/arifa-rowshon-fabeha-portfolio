import { ArrowUpRight, Code2, GraduationCap } from "lucide-react";
import { portfolioMetrics } from "../data/portfolioData";

export default function HeroTerminal() {
  return (
    <aside className="hero-terminal" aria-label="Arifa's current focus and academic progress">
      <div className="hero-terminal-bar">
        <span className="hero-terminal-dots" aria-hidden="true"><i /><i /><i /></span>
        <span>arifa / now</span>
        <Code2 size={17} aria-hidden="true" />
      </div>
      <div className="hero-terminal-body">
        <p className="terminal-command">$ current_focus</p>
        <p className="terminal-answer">C++ <span>·</span> Data Structures <span>·</span> Algorithms</p>
        <p className="terminal-command">$ current_project</p>
        <p className="terminal-answer">CloudSphere <small>In progress</small></p>
        <div className="terminal-academics" aria-label="Academic progress">
          <p className="terminal-academics-heading"><GraduationCap size={16} aria-hidden="true" /> Studying B.Sc. in CSE</p>
          <div className="terminal-academics-stats">
            <div><span>CGPA</span><strong>{portfolioMetrics.cgpa.toFixed(2)}</strong></div>
            <div><span>Credits completed</span><strong>{portfolioMetrics.completedCredits}</strong></div>
          </div>
        </div>
        <p className="terminal-command">$ project_motto</p>
        <p className="terminal-answer terminal-quote">“Healthcare should not depend on the phone you own.”</p>
      </div>
      <a className="hero-terminal-link" href="#projects">See the projects <ArrowUpRight size={17} aria-hidden="true" /></a>
    </aside>
  );
}
