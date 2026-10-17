import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Guide from "./Guide";
import { personalInfo } from "../data/portfolioData";

const lines = [
  "Hi, my name is Fabiha! Welcome to my portfolio!",
  "Meet Arifa Rowshon Fabeha, a CSE student.",
  "Explore her projects and coding journey!",
];

export default function Intro({ onFinish }) {
  const reduced = useReducedMotion();
  const [stage, setStage] = useState("name");
  const [line, setLine] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setStage("guide"), reduced ? 500 : 1900);
    return () => clearTimeout(timer);
  }, [reduced]);
  useEffect(() => {
    if (stage !== "guide") return;
    const interval = setInterval(
      () => setLine((v) => Math.min(v + 1, lines.length - 1)),
      reduced ? 700 : 1100,
    );
    const finish = setTimeout(onFinish, reduced ? 2400 : 3800);
    return () => {
      clearInterval(interval);
      clearTimeout(finish);
    };
  }, [stage, reduced, onFinish]);
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") onFinish();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onFinish]);

  return (
    <div
      className="intro-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Portfolio introduction"
    >
      <div className="intro-grid" aria-hidden="true" />
      <div className="intro-glow" aria-hidden="true" />
      <AnimatePresence mode="wait">
        {stage === "name" ? (
          <motion.div
            key="name"
            className="intro-name-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: reduced ? 0 : 0.35 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-neonCyan">
              A journey in code & curiosity
            </span>
            <h1
              aria-label={personalInfo.name}
              className="intro-name font-display"
            >
              {"ARIFA ROWSHON FABEHA".split("").map((char, i) => (
                <span
                  key={i}
                  aria-hidden="true"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {char === " " ? "\u00a0" : char}
                </span>
              ))}
            </h1>
            <div className="intro-underline" />
          </motion.div>
        ) : (
          <motion.div
            key="guide"
            className="intro-guide-block"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.45 }}
          >
            <div className="intro-guide-enter">
              <Guide className="intro-guide-figure" pointing />
            </div>
            <div className="intro-bubble">
              <span className="font-mono text-xs uppercase tracking-widest text-neonCyan">
                Your guide · Fabiha
              </span>
              <p key={line} className="font-display" aria-live="polite">
                {lines[line]}
              </p>
              <div className="intro-dots" aria-hidden="true">
                {lines.map((_, i) => (
                  <span key={i} className={i === line ? "active" : ""} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button type="button" className="intro-skip" onClick={onFinish} autoFocus>
        {stage === "name" ? "Skip Intro" : "Enter Portfolio"}{" "}
        <ArrowRight size={17} />
      </button>
    </div>
  );
}
