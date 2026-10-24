import useTypewriter from "../hooks/useTypewriter";

export default function RotatingFocus({ items }) {
  const text = useTypewriter(items, 3400);

  return <p className="hero-focus">
    <span className="sr-only">Focus areas: {items.join(", ")}</span>
    <span className="hero-focus-label" aria-hidden="true">focus:</span>
    <span className="hero-focus-phrase" aria-hidden="true">{text}<i /></span>
  </p>;
}
