import { useVisibleOnce } from "./MotionPrimitives";
import { useMotionPreference } from "../../context/MotionContext";

/** Reveal each section once as it enters the viewport. */
export default function Reveal({ children, delay = 0, y = 24, className = "", as: Tag = "div" }) {
  const [ref, visible] = useVisibleOnce("0px 0px -35px 0px");
  const { enabled } = useMotionPreference();
  return <Tag ref={ref} className={`scroll-reveal ${className}`} data-visible={visible || !enabled}
    style={{ "--reveal-delay": `${enabled ? delay : 0}s`, "--reveal-y": `${y}px` }}>{children}</Tag>;
}
