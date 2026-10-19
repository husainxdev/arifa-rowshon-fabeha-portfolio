import { useMemo, useState } from "react";
import { ArrowRight, BookOpen, Check, ChevronLeft, ChevronRight, Code2, Copy, RotateCcw } from "lucide-react";
import { conceptNotes } from "../data/portfolioExtras";
import { binarySearchSteps, pairSumSteps, exampleValues } from "../lib/algorithmSteps";
import DetailDialog from "./ui/DetailDialog";

function CodeExample({ code }) {
  const [status, setStatus] = useState("");
  const copy = async () => {
    try { await navigator.clipboard.writeText(code); setStatus("Code copied"); }
    catch { setStatus("Select the code below to copy it."); }
  };
  return <div className="code-example">
    <div className="flex items-center justify-between gap-3 border-b border-hair px-4 py-2">
      <span className="font-mono text-xs text-neonCyan">C++ example</span>
      <button type="button" onClick={copy} className="text-link min-h-10 text-xs" aria-label="Copy C++ example">{status === "Code copied" ? <Check size={15} /> : <Copy size={15} />}Copy</button>
    </div>
    <pre tabIndex={0} aria-label="C++ example code"><code>{code}</code></pre>
    <span className="sr-only" role="status">{status}</span>
  </div>;
}

function NoteDetails({ note, onClose }) {
  return <DetailDialog title={note.title} eyebrow={`${note.category} · Concept note`} onClose={onClose}>
    <p className="text-base leading-8 text-muted">{note.summary}</p>
    {note.sections.map(section => <div key={section.title}><h3 className="text-xl text-ink">{section.title}</h3><p className="mt-3 text-sm leading-7 text-muted">{section.text}</p></div>)}
    <CodeExample code={note.code} />
    <div className="project-purpose"><p className="font-mono text-xs uppercase tracking-widest text-neonCyan">Takeaway</p><p className="mt-3 text-base leading-7 text-ink">{note.takeaway}</p></div>
  </DetailDialog>;
}

export function AlgorithmWalkthrough() {
  const [algorithm, setAlgorithm] = useState("binary");
  const [target, setTarget] = useState(24);
  const [stepIndex, setStepIndex] = useState(0);
  const binary = algorithm === "binary";
  const steps = useMemo(() => (binary ? binarySearchSteps : pairSumSteps)(exampleValues, target), [binary, target]);
  const step = steps[stepIndex];
  const changeAlgorithm = value => { setAlgorithm(value); setTarget(value === "binary" ? 24 : 38); setStepIndex(0); };
  const options = binary ? [24, 3, 59, 25] : [38, 62, 10, 99];
  return <div className="algorithm-lab">
    <div className="lab-toolbar">
      <div className="segmented-control" role="group" aria-label="Choose an algorithm">
        <button type="button" aria-pressed={binary} onClick={() => changeAlgorithm("binary")}>Binary search</button>
        <button type="button" aria-pressed={!binary} onClick={() => changeAlgorithm("pair")}>Two pointers</button>
      </div>
      <label className="flex items-center gap-3 font-mono text-xs text-muted">{binary ? "Find value" : "Target sum"}
        <select aria-label={binary ? "Search target" : "Pair sum target"} value={target} onChange={event => { setTarget(Number(event.target.value)); setStepIndex(0); }} className="lab-select">{options.map(value => <option key={value} value={value}>{value}</option>)}</select>
      </label>
    </div>
    <div className="lab-content">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div><h4 className="text-2xl text-ink">{binary ? "Narrow the search." : "Move with a reason."}</h4><p className="mt-2 text-sm leading-6 text-muted">{binary ? "Compare the middle value, then keep the half that could contain the target." : "Compare the sum at both ends, then move one pointer towards the other."}</p></div>
        <span className="topic-chip font-mono">{binary ? "O(log n)" : "O(n)"} time · O(1) space</span>
      </div>
      <p className="mb-4 mt-6 font-mono text-[11px] text-muted">Sorted input · zero-based indices</p>
      <ol className="algorithm-array" aria-label="Sorted array">
        {exampleValues.map((value, index) => {
          const pointer = step.pointers.includes(index);
          const discarded = index < step.low || index > step.high || step.status === "missing";
          return <li key={index} className={`array-cell ${discarded ? "discarded" : ""} ${pointer ? "pointer" : ""} ${pointer && step.status === "found" ? "found" : ""}`} aria-label={`Index ${index}, value ${value}${pointer ? ", current pointer" : ""}${discarded ? ", excluded" : ""}`}>
            <span className="array-index">{index}</span><strong>{value}</strong><span className="pointer-label" aria-hidden="true">{pointer ? binary ? "MID" : index === step.low ? "L" : "R" : "·"}</span>
          </li>;
        })}
      </ol>
      <div className="mt-4 flex flex-wrap gap-4 font-mono text-[10px] text-muted" aria-hidden="true"><span className="legend-active">Current pointer</span><span>Faded = excluded range</span></div>
      <div className={`step-explanation ${step.status === "found" ? "is-found" : ""}`} role="status" aria-live="polite" aria-atomic="true">
        <span className="font-mono text-[11px] uppercase tracking-widest text-neonCyan">{step.status === "found" ? "Found" : step.status === "missing" ? "No match" : `Step ${stepIndex + 1} of ${steps.length}`}</span>
        <p className="mt-2 text-sm leading-7 text-ink">{step.text}</p>
      </div>
      <div className="lab-controls">
        <span className="font-mono text-xs text-muted">{step.comparisons} {step.comparisons === 1 ? "comparison" : "comparisons"}</span>
        <div className="flex flex-wrap gap-2">
          <button type="button" className="lab-control" onClick={() => setStepIndex(0)} disabled={stepIndex === 0} aria-label="Reset walkthrough"><RotateCcw size={16} /></button>
          <button type="button" className="lab-control" onClick={() => setStepIndex(value => value - 1)} disabled={stepIndex === 0} aria-label="Previous step"><ChevronLeft size={17} /><span>Back</span></button>
          <button type="button" className="lab-control lab-next" onClick={() => setStepIndex(value => value + 1)} disabled={stepIndex === steps.length - 1} aria-label="Next step"><span>Next step</span><ChevronRight size={17} /></button>
        </div>
      </div>
    </div>
  </div>;
}

export default function LearningCorner() {
  const [view, setView] = useState("walkthrough");
  const [note, setNote] = useState(null);
  return <div id="learning" className="mt-14 scroll-mt-28">
    <div className="flex flex-wrap items-end justify-between gap-5">
      <div><p className="font-mono text-xs uppercase tracking-widest text-neonCyan">The learning corner</p><h3 className="mt-3 text-3xl text-ink">Explore the thinking.</h3><p className="mt-3 max-w-2xl text-sm leading-7 text-muted">Concept notes and illustrative examples, one idea and one decision at a time.</p></div>
      <div className="segmented-control" role="group" aria-label="Choose learning content">
        <button type="button" aria-pressed={view === "walkthrough"} aria-controls="learning-content" onClick={() => setView("walkthrough")}><Code2 size={15} />Walkthrough</button>
        <button type="button" aria-pressed={view === "notes"} aria-controls="learning-content" onClick={() => setView("notes")}><BookOpen size={15} />Concept notes</button>
      </div>
    </div>
    <div id="learning-content" className="mt-6">
      {view === "walkthrough" ? <AlgorithmWalkthrough /> : <div className="grid gap-5 md:grid-cols-2">
        {conceptNotes.map((item, i) => <article key={item.id} className="note-card glass-strong rounded-2xl p-6 sm:p-7">
          <div className="flex items-center justify-between gap-3"><span className="font-mono text-xs text-neonCyan">{item.category}</span><span className="font-mono text-xs text-muted">0{i + 1}</span></div>
          <h4 className="mt-6 text-2xl text-ink">{item.title}</h4>
          <p className="mt-3 text-sm leading-7 text-muted">{item.summary}</p>
          <button type="button" className="text-link mt-6 min-h-11" aria-label={`Read note: ${item.title}`} onClick={() => setNote(item)}>Read note <ArrowRight size={16} /></button>
        </article>)}
      </div>}
    </div>
    {note && <NoteDetails note={note} onClose={() => setNote(null)} />}
  </div>;
}
