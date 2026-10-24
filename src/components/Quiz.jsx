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
    <section id="quiz" aria-label="Interactive C++ quiz" className="portfolio-section page-shell relative scroll-mt-28 py-16 md:py-24">
      <SectionHeading index="07" eyebrow="quiz" title="Guess the output." kicker="30 quick, playful C++ challenges. Start easy, follow the code, and learn as you go." />
      <Reveal>
        <div className="quiz-editor mt-10">
          <div className="quiz-editor-bar">
            <span className="quiz-window-dots" aria-hidden="true"><i /><i /><i /></span>
            <span className="quiz-file-name">{finished ? "results.cpp" : question.file}</span>
            <span className="quiz-progress" aria-label={finished ? "Quiz complete" : `Question ${step + 1} of ${quizQuestions.length}`}>
              {finished ? `${quizQuestions.length}/${quizQuestions.length}` : `${String(step + 1).padStart(2, "0")}/${String(quizQuestions.length).padStart(2, "0")}`}
            </span>
          </div>
          <progress className="quiz-progress-track" value={step} max={quizQuestions.length} aria-label="Quiz progress" />
          {finished ? (
            <div className="quiz-results" aria-live="polite">
              <p className="quiz-comment">// quiz complete</p>
              <h3>Your score: <span>{score}/{quizQuestions.length}</span></h3>
              <p>Nice work. Every attempt is a chance to sharpen your C++ fundamentals.</p>
              <button type="button" onClick={restart} className="quiz-next"><RotateCcw size={17} aria-hidden="true" /> Try again</button>
            </div>
          ) : (
            <div className="quiz-editor-body" key={step}>
              <div className="quiz-meta"><span>{question.topic}</span><span>Easy · inside main()</span></div>
              <div className="quiz-code-scroll" role="region" aria-label={`C++ code challenge ${step + 1}`} tabIndex={0}>
                <pre className="quiz-code"><code>{question.code.map((line, index) => <span className="quiz-code-line" key={`${step}-${index}`}><span className="quiz-line-number" aria-hidden="true">{index + 1}</span><span>{line}</span></span>)}</code></pre>
              </div>
              <p className="quiz-prompt"><span>//</span> what does it print?</p>
              <div className="quiz-answers" role="group" aria-label={`Answers for question ${step + 1}`}>
                {question.options.map((option, index) => {
                  const correct = selected !== null && index === question.answer;
                  const incorrect = selected === index && index !== question.answer;
                  return <button
                    key={option}
                    type="button"
                    onClick={() => choose(index)}
                    disabled={selected !== null}
                    aria-pressed={selected === index}
                    className={`quiz-answer${correct ? " is-correct" : ""}${incorrect ? " is-incorrect" : ""}`}
                  >
                    <span className="quiz-answer-letter" aria-hidden="true">{String.fromCharCode(97 + index)}</span>
                    <span>{option}</span>
                    {correct && <Check size={18} className="quiz-answer-mark" aria-hidden="true" />}
                    {incorrect && <X size={18} className="quiz-answer-mark" aria-hidden="true" />}
                  </button>;
                })}
              </div>
              {selected !== null && <div className="quiz-feedback" role="status" aria-live="polite">
                <p><strong>{selected === question.answer ? "Correct." : "Not quite."}</strong> {question.explanation}</p>
                <button type="button" onClick={next} className="quiz-next">{step === quizQuestions.length - 1 ? "See results" : "Next challenge"}<ArrowRight size={17} aria-hidden="true" /></button>
              </div>}
            </div>
          )}
        </div>
      </Reveal>
    </section>
  );
}
