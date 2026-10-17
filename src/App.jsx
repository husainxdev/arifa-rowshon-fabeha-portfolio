import { useCallback, useEffect, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import AmbientBackground from "./components/ui/AmbientBackground";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import {
  Home,
  About,
  Education,
  Skills,
  Projects,
  Coding,
  Activities,
  Contact,
  Footer,
} from "./components/Sections";

export default function App() {
  const [entered, setEntered] = useState(() => {
    try {
      return sessionStorage.getItem("arifa-intro-seen") === "1";
    } catch {
      return false;
    }
  });
  const finishIntro = useCallback(() => {
    try {
      sessionStorage.setItem("arifa-intro-seen", "1");
    } catch {
      /* storage is optional */
    }
    setEntered(true);
    window.scrollTo(0, 0);
    requestAnimationFrame(() => document.getElementById("main-content")?.focus({ preventScroll: true }));
  }, []);
  const replayIntro = useCallback(() => {
    try {
      sessionStorage.removeItem("arifa-intro-seen");
    } catch {
      /* storage is optional */
    }
    if (window.location.hash) history.replaceState(null, "", window.location.pathname + window.location.search);
    setEntered(false);
  }, []);
  useEffect(() => {
    if (!entered || !window.location.hash) return;
    let id;
    try { id = decodeURIComponent(window.location.hash.slice(1)); }
    catch { return; }
    const frame = requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: "auto", block: "start" }));
    return () => cancelAnimationFrame(frame);
  }, [entered]);
  return (
    <ThemeProvider>
      {entered ? (
        <>
          <a className="skip-to-content" href="#main-content">Skip to content</a>
          <AmbientBackground />
          <Navbar />
          <main id="main-content" tabIndex={-1}>
            <Home />
            <About />
            <Skills />
            <Coding />
            <Projects />
            <Education />
            <Activities />
            <Contact />
          </main>
          <Footer onReplayIntro={replayIntro} />
        </>
      ) : (
        <Intro onFinish={finishIntro} />
      )}
    </ThemeProvider>
  );
}
