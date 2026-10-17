import { useEffect, useRef, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { personalInfo } from "../data/portfolioData";
import PlatformIcon from "./PlatformIcon";

const links = [
  ["home", "Home"],
  ["about", "About"],
  ["skills", "Skills"],
  ["coding", "CP"],
  ["projects", "Projects"],
  ["education", "Education"],
  ["activities", "Activities"],
];
const sections = ["home", "about", "skills", "coding", "projects", "education", "activities", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const menuButton = useRef(null);
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((e) => e.isIntersecting)
          .forEach((e) => setActive(e.target.id));
      },
      { rootMargin: "-25% 0px -60% 0px" },
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  const navLinks = links.map(([id, label]) => (
    <a
      key={id}
      href={`#${id}`}
      onClick={() => setOpen(false)}
      aria-label={id === "coding" ? "Coding Profiles" : undefined}
      aria-current={active === id ? "location" : undefined}
      className={`nav-link ${active === id ? "active" : ""}`}
    >
      {label}
    </a>
  ));
  return (
    <header className="site-nav-wrap">
      <nav className="site-nav glass-strong" aria-label="Main navigation">
        <a
          className="nav-brand"
          href="#home"
          onClick={() => setOpen(false)}
          aria-label={`${personalInfo.name}, home`}
        >
          <span className="nav-mark" aria-hidden="true">af.</span>
          <span>
            Arifa <b>Fabeha</b>
          </span>
        </a>
        <div className="desktop-nav">{navLinks}</div>
        <div className="nav-actions">
          <a className="nav-icon" href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="Arifa's GitHub profile (opens in a new tab)">
            <PlatformIcon name="GitHub" className="h-[19px] w-[19px]" />
          </a>
          <button
            type="button"
            className="theme-button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Moon size={17} /> : <Sun size={17} />}
          </button>
          <a className={`nav-contact ${active === "contact" ? "active" : ""}`} href="#contact" aria-current={active === "contact" ? "location" : undefined}>
            Let's talk
          </a>
          <button
            type="button"
            ref={menuButton}
            className="menu-button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      <div id="mobile-navigation" className="mobile-nav glass-strong" role="navigation" aria-label="Mobile navigation" hidden={!open}>
        {navLinks}
        <a href="#contact" onClick={() => setOpen(false)} className="mobile-contact" aria-current={active === "contact" ? "location" : undefined}>Let's talk</a>
      </div>
    </header>
  );
}
