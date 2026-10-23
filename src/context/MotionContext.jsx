import { createContext, useContext, useEffect, useState } from "react";

const MotionContext = createContext({ enabled: true, systemReduced: false, toggle: () => {} });

export function MotionProvider({ children }) {
  const [paused, setPaused] = useState(() => {
    try { return localStorage.getItem("arifa-motion") === "paused"; }
    catch { return false; }
  });
  const [systemReduced, setSystemReduced] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const enabled = !paused && !systemReduced;

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setSystemReduced(query.matches);
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.motion = enabled ? "on" : "off";
    try { localStorage.setItem("arifa-motion", paused ? "paused" : "on"); }
    catch { /* The preference still works without storage. */ }
  }, [enabled, paused]);
  useEffect(() => {
    const update = () => { document.documentElement.dataset.pageVisible = String(!document.hidden); };
    update();
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);

  return <MotionContext.Provider value={{ enabled, systemReduced, toggle: () => setPaused(value => !value) }}>{children}</MotionContext.Provider>;
}

export const useMotionPreference = () => useContext(MotionContext);
