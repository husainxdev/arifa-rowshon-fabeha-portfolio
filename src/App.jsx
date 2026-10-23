import { useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { MotionProvider } from "./context/MotionContext";
import { ReadingProgress } from "./components/ui/MotionPrimitives";
import AmbientBackground from "./components/ui/AmbientBackground";
import Navbar from "./components/Navbar";
import ProofStrip from "./components/ProofStrip";
import Quiz from "./components/Quiz";
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
  useEffect(() => {
    if (!window.location.hash) return;
    let id;
    try { id = decodeURIComponent(window.location.hash.slice(1)); }
    catch { return; }
    const frame = requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: "auto", block: "start" }));
    return () => cancelAnimationFrame(frame);
  }, []);
  return (
    <ThemeProvider>
      <MotionProvider>
          <a className="skip-to-content" href="#main-content">Skip to content</a>
          <AmbientBackground />
          <Navbar />
          <ReadingProgress />
          <main id="main-content" tabIndex={-1}>
            <Home />
            <ProofStrip />
            <About />
            <Projects />
            <Skills />
            <Coding />
            <Education />
            <Activities />
            <Quiz />
            <Contact />
          </main>
          <Footer />
      </MotionProvider>
    </ThemeProvider>
  );
}
