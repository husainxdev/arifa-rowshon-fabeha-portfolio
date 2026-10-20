import { useState } from "react";
import { ArrowRight, Check, RotateCcw, X } from "lucide-react";
import { quizQuestions } from "../data/quizQuestions";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const finished = step === quizQuestions.length;
  const question = quizQuestions[step];

  const choose = (index) => {
    if (selected !== null) return;
    setSelected(index);
    if (index === question.answer) setScore((value) => value + 1);
  };
  const next = () => {
    setSelected(null);
    setStep((value) => value + 1);
  };
  const restart = () => {
    setStep(0);
    setSelected(null);
    setScore(0);
  };

  return (
    <section id="quiz" aria-label="Interactive coding quiz" className="portfolio-section relative mx-auto max-w-6xl scroll-mt-28 px-4 py-16 sm:px-6 md:py-24">
      <SectionHeading index="03" eyebrow="quiz" title="Test your thinking." kicker="Five quick questions on C++, data structures, and algorithms. Try them at your own pace." />
      <Reveal>
        <div className="glass-strong glass-glow mt-10 overflow-hidden rounded-3xl border border-hair p-6 sm:p-9">
          {finished ? (
            <div className="mx-auto max-w-2xl py-7 text-center" aria-live="polite">
              <p className="font-mono text-xs uppercase tracking-[.2em] text-neonCyan">Quiz complete</p>
              <h3 className="mt-4 font-display text-4xl text-ink sm:text-5xl">Your score: {score}/{quizQuestions.length}</h3>
              <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-muted">Each question is a chance to sharpen the fundamentals. Review the explanations and try again whenever you like.</p>
              <button type="button" onClick={restart} className="action-button mt-7 inline-flex min-h-12 items-center gap-2 rounded-xl bg-neonCyan px-5 py-3 text-sm font-semibold text-void transition hover:brightness-110"><RotateCcw size={16} aria-hidden="true" />Try again</button>
            </div>
          ) : (
            <>
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-hair pb-5">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[.18em] text-neonCyan">The quick quiz</p>
                  <p className="mt-2 text-sm text-muted">Choose one answer, then read the explanation.</p>
                </div>
                <span className="rounded-full border border-neonCyan/30 bg-neonCyan/10 px-4 py-2 font-mono text-xs text-neonCyan">{String(step + 1).padStart(2, "0")} / {String(quizQuestions.length).padStart(2, "0")}</span>
              </div>
              <div className="py-7 sm:py-9">
                <h3 className="max-w-3xl font-display text-2xl leading-snug text-ink sm:text-3xl">{question.question}</h3>
                <div className="mt-7 grid gap-3 sm:grid-cols-2" role="group" aria-label={`Answers for question ${step + 1}`}>
                  {question.options.map((option, index) => {
                    const correct = selected !== null && index === question.answer;
                    const incorrect = selected === index && index !== question.answer;
                    return <button
                      key={option}
                      type="button"
                      onClick={() => choose(index)}
                      disabled={selected !== null}
                      aria-pressed={selected === index}
                      className={`flex min-h-[68px] items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neonCyan sm:text-base ${correct ? "border-neonCyan bg-neonCyan/10 text-ink" : incorrect ? "border-red-400/70 bg-red-400/10 text-ink" : "border-hair-strong bg-fill text-ink hover:border-neonCyan/60"}`}
                    >
                      <span><span className="mr-3 font-mono text-xs text-muted">{String.fromCharCode(65 + index)}.</span>{option}</span>
                      {correct && <Check size={18} className="shrink-0 text-neonCyan" aria-hidden="true" />}
                      {incorrect && <X size={18} className="shrink-0 text-red-400" aria-hidden="true" />}
                    </button>;
                  })}
                </div>
              </div>
              <div className="flex flex-wrap items-end justify-between gap-5 border-t border-hair pt-5">
                <p className="max-w-2xl text-sm leading-7 text-muted" role="status" aria-live="polite">
                  {selected === null ? "Select an answer to see how it works." : <><strong className="text-ink">{selected === question.answer ? "Correct." : "Good try."}</strong> {question.explanation}</>}
                </p>
                {selected !== null && <button type="button" onClick={next} className="action-button inline-flex min-h-11 shrink-0 items-center gap-2 rounded-xl bg-neonCyan px-4 py-2 text-sm font-semibold text-void transition hover:brightness-110">{step === quizQuestions.length - 1 ? "See results" : "Next question"}<ArrowRight size={16} aria-hidden="true" /></button>}
              </div>
            </>
          )}
        </div>
      </Reveal>
    </section>
  );
}
