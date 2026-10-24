import { useEffect, useState } from "react";
import { useMotionPreference } from "../context/MotionContext";

export default function RotatingFocus({ items }) {
  const { enabled } = useMotionPreference();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!enabled || items.length < 2) {
      setIndex(0);
      return;
    }
    const timer = window.setInterval(() => setIndex((value) => (value + 1) % items.length), 4800);
    return () => window.clearInterval(timer);
  }, [enabled, items]);

  return <p className="hero-focus">
    <span className="sr-only">Focus areas: {items.join(", ")}</span>
    <span className="hero-focus-label" aria-hidden="true">focus:</span>
    <span key={index} className="hero-focus-phrase" aria-hidden="true">{items[index]}</span>
  </p>;
}
