import { useEffect, useState } from "react";
import { useMotionPreference } from "../context/MotionContext";

export default function useTypewriter(items, initialDelay = 2400) {
  const { enabled } = useMotionPreference();
  const [text, setText] = useState(items[0] || "");

  useEffect(() => {
    if (items.length < 2 || !enabled) {
      setText(items[0] || "");
      return;
    }
    let index = 0;
    let length = items[0].length;
    let deleting = true;
    let timer;
    const tick = () => {
      const word = items[index];
      length += deleting ? -1 : 1;
      setText(word.slice(0, length));
      if (deleting && length === 0) {
        index = (index + 1) % items.length;
        deleting = false;
        timer = window.setTimeout(tick, 320);
      } else if (!deleting && length === word.length) {
        deleting = true;
        timer = window.setTimeout(tick, 2400);
      } else {
        timer = window.setTimeout(tick, deleting ? 65 : 105);
      }
    };
    timer = window.setTimeout(tick, initialDelay);
    return () => window.clearTimeout(timer);
  }, [items, initialDelay, enabled]);

  return text;
}
