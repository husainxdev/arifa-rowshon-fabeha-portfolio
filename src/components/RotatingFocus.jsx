import useTypewriter from "../hooks/useTypewriter";

export default function RotatingFocus({ items }) {
  const { word, length } = useTypewriter(items, 3400);

  return <p className="hero-focus">
    <span className="sr-only">Focus areas: {items.join(", ")}</span>
    <span className="hero-focus-label" aria-hidden="true">focus:</span>
    <span className="hero-focus-phrase" aria-hidden="true"><span className="hero-focus-text" style={{ width: `${length}ch` }}>{word}</span><i /></span>
  </p>;
}
