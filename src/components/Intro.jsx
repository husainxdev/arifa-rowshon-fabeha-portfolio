import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useMotionPreference } from "../context/MotionContext";
import Guide from "./Guide";
import { personalInfo } from "../data/portfolioData";

const lines = [
  "Hi, my name is Fabiha! Welcome to my portfolio!",
  "Meet Arifa Rowshon Fabeha, a CSE student.",
  "Explore her projects and coding journey!",
];

export default function Intro({ onFinish }) {
  const { enabled } = useMotionPreference();
  const reduced = !enabled;
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
    <motion.div
      className="intro-overlay"
      exit={{ opacity: 0, clipPath: reduced ? undefined : "inset(0 0 100% 0)" }}
      transition={{ duration: reduced ? 0 : 0.7, ease: [0.76, 0, 0.24, 1] }}
      role="dialog"
      aria-modal="true"
      aria-label="Portfolio introduction"
    >
      <div className="intro-grid" aria-hidden="true" />
      <div className="intro-glow" aria-hidden="true" />
      <div className="intro-starfield" aria-hidden="true">
        {Array.from({ length: 14 }, (_, i) => <i key={i} style={{ left: `${(i * 37 + 9) % 100}%`, top: `${(i * 23 + 11) % 100}%`, animationDelay: `${i * -0.7}s`, animationDuration: `${4 + i % 4}s` }} />)}
        <span className="intro-orbit" />
      </div>
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
    </motion.div>
  );
}
