import { useState } from "react";
import { ArrowRight, RotateCcw, Terminal } from "lucide-react";
import { codePuzzles } from "../data/codePuzzles";

export default function CodeTerminal() {
  const [step, setStep] = useState(0);
  const [choice, setChoice] = useState(null);
  const [score, setScore] = useState(0);
  const [complete, setComplete] = useState(false);
  const puzzle = codePuzzles[step];

  const select = (index) => {
    if (choice !== null) return;
    setChoice(index);
    if (index === puzzle.answer) setScore((value) => value + 1);
  };
  const next = () => {
    if (step === codePuzzles.length - 1) setComplete(true);
    else {
      setStep((value) => value + 1);
      setChoice(null);
    }
  };
  const restart = () => {
    setStep(0);
    setChoice(null);
    setScore(0);
    setComplete(false);
  };

  return (
    <section aria-label="Interactive C++ code puzzle" className="code-surface glass-strong glass-glow mt-9 overflow-hidden rounded-2xl">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-hair px-5 py-4 sm:px-7">
        <div className="flex items-center gap-3">
          <span className="flex gap-1.5" aria-hidden="true"><i className="h-2.5 w-2.5 rounded-full bg-[#e8a65d]" /><i className="h-2.5 w-2.5 rounded-full bg-[#e5c169]" /><i className="h-2.5 w-2.5 rounded-full bg-[#91b68d]" /></span>
          <span className="flex items-center gap-2 font-mono text-xs text-muted"><Terminal size={14} aria-hidden="true" /> guess.cpp</span>
        </div>
        <span className="font-mono text-[11px] text-neonCyan">INTERACTIVE · C++</span>
      </div>
      <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <p className="font-mono text-xs text-neonCyan">$ What will this print?</p>
          {complete ? (
            <div className="mt-5 rounded-xl border border-hair bg-fill p-5">
              <p className="font-display text-2xl text-ink">Round complete.</p>
              <p className="mt-2 text-sm text-muted">You got {score} of {codePuzzles.length} right.</p>
            </div>
          ) : (
            <pre className="mt-5 min-h-28 overflow-x-auto rounded-xl border border-hair bg-black/50 p-5 font-mono text-sm leading-7 text-ink"><code>{puzzle.code}</code></pre>
          )}
          <p className="mt-4 font-mono text-xs text-muted">A little C++ puzzle for visitors to try.</p>
        </div>
        <div className="flex flex-col">
          {complete ? (
            <button type="button" onClick={restart} className="mt-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-neonCyan px-5 font-semibold text-void"><RotateCcw size={17} /> Play again</button>
          ) : (
            <>
              <div className="flex justify-between gap-3 font-mono text-xs text-muted"><span>Choose an output</span><span>{step + 1} / {codePuzzles.length}</span></div>
              <div className="mt-3 grid gap-2">
                {puzzle.options.map((option, index) => {
                  const revealed = choice !== null;
                  const correct = revealed && index === puzzle.answer;
                  const wrong = revealed && index === choice && !correct;
                  return <button key={option} type="button" onClick={() => select(index)} disabled={revealed} aria-pressed={choice === index} className={`min-h-11 rounded-lg border px-4 py-2 text-left font-mono text-sm transition-colors ${correct ? "border-neonCyan bg-neonCyan/15 text-neonCyan" : wrong ? "border-red-400/60 bg-red-400/10 text-red-300" : "border-hair bg-fill text-ink hover:border-neonCyan/50"}`}><span className="mr-3 text-muted">{index + 1}.</span>{option}</button>;
                })}
              </div>
              {choice !== null && <div className="mt-3" role="status" aria-live="polite"><p className="font-semibold text-neonCyan">{choice === puzzle.answer ? "That's right!" : `Correct output: ${puzzle.options[puzzle.answer]}`}</p><p className="mt-1 text-xs leading-5 text-muted">{puzzle.explanation}</p></div>}
              <button type="button" onClick={next} disabled={choice === null} className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-neonCyan px-5 font-semibold text-void disabled:cursor-not-allowed disabled:opacity-40">{step === codePuzzles.length - 1 ? "See result" : "Next puzzle"}<ArrowRight size={16} /></button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
