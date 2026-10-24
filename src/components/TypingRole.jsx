import { useEffect, useState } from "react";
import { useMotionPreference } from "../context/MotionContext";

export default function TypingRole({ roles }) {
  const { enabled, systemReduced } = useMotionPreference();
  const [text, setText] = useState(roles[0] || "");

  useEffect(() => {
    if (roles.length < 2 || !enabled || systemReduced) {
      setText(roles[0] || "");
      return;
    }
    let role = 0;
    let length = roles[0].length;
    let deleting = true;
    let timer;
    const tick = () => {
      const word = roles[role];
      length += deleting ? -1 : 1;
      setText(word.slice(0, length));
      if (deleting && length === 0) {
        role = (role + 1) % roles.length;
        deleting = false;
        timer = window.setTimeout(tick, 320);
      } else if (!deleting && length === word.length) {
        deleting = true;
        timer = window.setTimeout(tick, 2400);
      } else {
        timer = window.setTimeout(tick, deleting ? 65 : 105);
      }
    };
    timer = window.setTimeout(tick, 2400);
    return () => window.clearTimeout(timer);
  }, [roles, enabled, systemReduced]);

  return <p className="hero-typed-role"><span className="sr-only">{roles.join(", ")}</span><span aria-hidden="true">{text}<i /></span></p>;
}
