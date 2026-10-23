import { useEffect, useState } from "react";
import { useMotionPreference } from "../context/MotionContext";

export default function TypingRole({ roles }) {
  const { enabled, systemReduced } = useMotionPreference();
  const [text, setText] = useState(roles[0] || "");

  useEffect(() => {
    if (!roles.length || !enabled || systemReduced) {
      setText(roles[0] || "");
      return;
    }
    let role = 0;
    let length = roles[0].length;
    let deleting = false;
    let timer;
    const tick = () => {
      const word = roles[role];
      setText(word.slice(0, length));
      if (!deleting && length === word.length) {
        deleting = true;
        timer = window.setTimeout(tick, 1800);
        return;
      }
      if (deleting && length === 0) {
        deleting = false;
        role = (role + 1) % roles.length;
        timer = window.setTimeout(tick, 280);
        return;
      }
      length += deleting ? -1 : 1;
      timer = window.setTimeout(tick, deleting ? 55 : 95);
    };
    timer = window.setTimeout(tick, 1800);
    return () => window.clearTimeout(timer);
  }, [roles, enabled, systemReduced]);

  return <p className="hero-typed-role"><span className="sr-only">{roles.join(", ")}</span><span aria-hidden="true">{text}<i /></span></p>;
}
