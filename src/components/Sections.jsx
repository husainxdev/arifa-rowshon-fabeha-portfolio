import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Copy,
  ExternalLink,
  FileDown,
  Handshake,
  Lightbulb,
  Mail,
  MessageCircle,
  Clock3,
  Sparkles,
  Send,
  Target,
  Users,
} from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import PlatformIcon from "./PlatformIcon";
import { InteractiveCard, MotionScene } from "./ui/MotionPrimitives";
import ProjectShowcase from "./ProjectShowcase";
import HeroTerminal from "./HeroTerminal";
import TypingRole from "./TypingRole";
import {
  personalInfo,
  portfolioMetrics,
  education,
  skills,
  skillGroups,
  softSkills,
  codingProfiles,
  activities,
} from "../data/portfolioData";

const shell =
  "portfolio-section page-shell relative scroll-mt-28 py-16 md:py-24";
const primary =
  "action-button inline-flex items-center justify-center gap-2 rounded-xl bg-neonCyan px-5 py-3 text-sm font-semibold text-void transition hover:-translate-y-0.5 hover:brightness-110";
const secondary =
  "action-button inline-flex items-center justify-center gap-2 rounded-xl border border-hair-strong bg-fill px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-neonCyan/50";

export function Home() {
  return (
    <MotionScene as="section"
      id="home"
      className="editorial-hero page-shell relative scroll-mt-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-grid-lines opacity-[.05] mask-radial-fade" />
      <Reveal delay={0.04}>
        <div className="editorial-hero-top">
          <span><i aria-hidden="true" /> PORTFOLIO / CSE STUDENT</span>
          <span>SYLHET, BANGLADESH</span>
        </div>
      </Reveal>
      <div className="career-hero-layout">
        <div>
          <Reveal delay={0.1}>
            <p className="editorial-hero-greeting">Hello, I’m</p>
            <h1 className="editorial-hero-title">
              <span>Arifa Rowshon</span>{" "}
              <em>Fabeha<span>.</span></em>
            </h1>
          </Reveal>
          <Reveal delay={0.17}>
            <TypingRole roles={personalInfo.roles} />
            <p className="career-hero-pitch">{personalInfo.pitchParts.map((part, index) => <span key={part} className={index ? "pitch-part has-separator" : "pitch-part"}>{part}</span>)}</p>
            <div className="career-hero-actions">
              {personalInfo.cvUrl ? <a className="hero-cta hero-cta-secondary" href={personalInfo.cvUrl} download>
                <span>Download CV</span><span className="hero-cta-icon"><FileDown size={18} aria-hidden="true" /></span>
              </a> : <button className="hero-cta hero-cta-secondary hero-cta-pending" type="button" disabled aria-label="Download CV" title="CV coming soon">
                <span className="hero-cta-copy"><span>Download CV</span><small aria-hidden="true">Coming soon</small></span>
                <span className="hero-cta-icon" aria-hidden="true"><FileDown size={18} /></span>
              </button>}
              <a className="hero-cta hero-cta-contact" href="#contact">
                <span>Contact</span><span className="hero-cta-icon"><Mail size={18} aria-hidden="true" /></span>
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.23}><HeroTerminal /></Reveal>
      </div>
    </MotionScene>
  );
}

export function About() {
  return (
    <section id="about" className={shell}>
      <SectionHeading
        index="01"
        eyebrow="about"
        title="A bit about me"
      />
      <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-[1.15fr_.85fr]">
        <Reveal className="h-full">
          <div className="glass-strong glass-glow flex h-full flex-col justify-center rounded-3xl p-7 sm:p-9">
            <p className="about-lead text-ink/90">
              I'm a CSE student at <strong className="text-neonCyan">Metropolitan University, Sylhet</strong>, learning to turn programming fundamentals into useful software.
            </p>
            <p className="about-support mt-6 text-muted">
              I built Shastho Sahayak around the idea that access to healthcare support should not depend on the phone someone owns. Through 321+ solved problems, I keep practising C++, data structures, and algorithms. CloudSphere is where I'm now exploring the economics of data centres and cloud services in Bangladesh.
            </p>
            <p className="about-support mt-5 text-muted">I'm looking for internship or junior opportunities where I can contribute, learn from a team, and keep building thoughtful technology.</p>
            <a href="#projects" className="mt-8 inline-flex w-fit items-center gap-2 font-mono text-sm text-neonCyan transition hover:gap-3">Explore my projects <ArrowRight size={16} aria-hidden="true" /></a>
          </div>
        </Reveal>
        <Reveal className="h-full" delay={0.08}>
          <div className="glass-strong glass-glow h-full rounded-3xl p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-neonCyan">Education at a glance</p>
            <ol className="about-timeline mt-7">
              {education.map(item => <li key={item.title}>
                <span>{item.year}</span>
                <strong>{item.title}</strong>
                {item.institution && <p>{item.institution}</p>}
              </li>)}
            </ol>
            <a className="text-link mt-6" href="#education">Full education timeline <ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className={shell}>
      <SectionHeading
        index="05"
        eyebrow="education"
        title="My learning path"
        kicker="A timeline of the milestones I can share."
      />
      <div className="relative mt-12 max-w-4xl">
        <span
          className="absolute bottom-7 left-[20px] top-7 w-px bg-neonCyan/35 sm:left-[26px]"
          aria-hidden="true"
        />
        {education.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06}>
            <div className="relative mb-5 grid grid-cols-[42px_1fr] gap-4 sm:grid-cols-[54px_1fr] sm:gap-6">
              <div className="relative z-10 grid h-[42px] w-[42px] place-items-center rounded-full border border-neonCyan/40 bg-void font-mono text-xs text-neonCyan sm:h-[54px] sm:w-[54px]">
                0{i + 1}
              </div>
              <div className="glass-strong glass-glow rounded-2xl p-5 sm:p-7">
                <p className="font-mono text-xs uppercase tracking-widest text-neonCyan">
                  {item.year}
                </p>
                <h3 className="mt-2 text-xl text-ink sm:text-2xl">
                  {item.title}
                </h3>
                {item.institution && (
                  <p className="mt-2 text-sm text-muted">{item.institution}</p>
                )}
                {i === 0 && <p className="mt-3 font-mono text-xs text-neonCyan">{portfolioMetrics.completedCredits} credits completed · CGPA {portfolioMetrics.cgpa.toFixed(2)}</p>}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Skills() {
  const softIcons = [Lightbulb, Users, Clock3, Handshake, MessageCircle, Sparkles];
  return (
    <section id="skills" className={shell}>
      <SectionHeading
        index="03"
        eyebrow="skills"
        title="Skills & strengths"
        kicker="Technical foundations and the people skills I bring to each project."
      />
      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <Reveal className="h-full">
          <InteractiveCard tilt={1.5} className="glass-strong glass-glow h-full rounded-3xl p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-xl border border-neonCyan/30 bg-neonCyan/10 text-neonCyan"><Code2 size={23} /></span>
              <div>
                <h3 className="text-2xl text-ink">Technical skills</h3>
                <p className="font-mono text-xs text-muted">{skills.length} confirmed skills</p>
              </div>
            </div>
            <div className="mt-7 space-y-6">
              {skillGroups.filter(group => group.skills.length).map(group => <div key={group.name} className="skill-group">
                <h4>{group.name}</h4>
                <div className="mt-3 grid grid-cols-2 gap-2.5 sm:gap-3">
                  {group.skills.map(name => <div key={name} className="skill-tile flex min-h-16 items-center gap-3 rounded-xl border border-hair bg-fill px-3 py-3 sm:px-4">
                    {group.name === "Languages" ? <Code2 size={19} className="shrink-0 text-neonCyan" aria-hidden="true" /> : <Target size={19} className="shrink-0 text-neonCyan" aria-hidden="true" />}
                    <span className="text-sm font-semibold leading-snug text-ink sm:text-base">{name}</span>
                  </div>)}
                </div>
              </div>)}
            </div>
          </InteractiveCard>
        </Reveal>
        <Reveal delay={0.08} className="h-full">
          <InteractiveCard tilt={1.5} className="glass-strong glass-glow h-full rounded-3xl p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-xl border border-neonCyan/30 bg-neonCyan/10 text-neonCyan"><Users size={23} /></span>
              <div>
                <h3 className="text-2xl text-ink">Soft skills</h3>
                <p className="font-mono text-xs text-muted">{softSkills.length} strengths</p>
              </div>
            </div>
            <div className="mt-7 grid grid-cols-2 gap-2.5 sm:gap-3">
              {softSkills.map((skill, i) => {
                const Icon = softIcons[i];
                return <div key={skill} className="skill-tile flex min-h-16 items-center gap-3 rounded-xl border border-hair bg-fill px-3 py-3 sm:px-4">
                  <Icon size={19} className="shrink-0 text-neonCyan" aria-hidden="true" />
                  <span className="text-sm font-semibold leading-snug text-ink sm:text-base">{skill}</span>
                </div>;
              })}
            </div>
          </InteractiveCard>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, value }) {
  const display = Array.isArray(value) ? value.join(", ") : value;
  if (!display) return null;
  return (
    <div className="rounded-lg border border-hair bg-fill px-3 py-3">
      <dt className="font-mono text-[10px] uppercase tracking-widest text-muted">
        {label}
      </dt>
      <dd className="mt-1 text-xs text-ink">{display}</dd>
    </div>
  );
}
export function Projects() {
  return <ProjectShowcase />;
}

export function Coding() {
  const colors = {
    blue: "#8bb9ff",
    brown: "#d9a779",
    green: "#91d8ac",
    purple: "#c6aceb",
  };

  return (
    <section id="coding" className={shell}>
      <SectionHeading
        index="04"
        eyebrow="coding profiles"
        title="Coding profiles"
        kicker="Four platforms where I practice programming and problem-solving."
      />
      <div className="mt-10 grid gap-3 min-[500px]:grid-cols-2 xl:grid-cols-4 xl:gap-4">
        {codingProfiles.map((profile, i) => (
          <Reveal key={profile.name} delay={(i % 4) * 0.05}>
            <InteractiveCard as="a" tilt={4}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${profile.name} profile (opens in a new tab)`}
              className="profile-card glass glass-glow flex min-h-[138px] flex-col justify-between rounded-2xl p-4 transition hover:-translate-y-1 hover:border-neonCyan/40 sm:p-5"
            >
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  style={{ color: colors[profile.tone] }}
                  className="grid h-12 w-12 place-items-center rounded-xl border border-hair bg-fill"
                >
                  <PlatformIcon name={profile.name} className="h-7 w-7" />
                </span>
                <strong className="font-display text-lg text-ink">{profile.name}</strong>
              </div>
              <div className="mt-5 flex items-end justify-between gap-2 border-t border-hair pt-4">
                <span className="truncate font-mono text-xs text-muted">{new URL(profile.url).host}</span>
                <span className="inline-flex shrink-0 items-center gap-1 font-mono text-xs text-neonCyan">
                  Visit Profile <ExternalLink size={13} />
                </span>
              </div>
            </InteractiveCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Activities() {
  return (
    <section id="activities" className={shell}>
      <SectionHeading
        index="06"
        eyebrow="activities"
        title="Experience & moments"
        kicker="Volunteering and collaboration beyond coursework."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {activities.map((a, i) => {
          const cover = a.photos?.[0];
          const details = [
            ["Date", a.date],
            ["Organizer", a.organizer],
            ["Role", a.role],
            ["Certificate", a.certificate],
          ].filter(([, value]) => value);
          return <Reveal key={a.title} delay={i * 0.08} className="h-full">
            <article className="glass-strong glass-glow h-full overflow-hidden rounded-2xl">
              <div className={`activity-cover ${i === 0 ? "activity-cover-guide" : "activity-cover-project"}`}>
                {cover ? <img src={cover} alt={a.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" /> : <>
                  <span aria-hidden="true" className="absolute inset-0 bg-grid-lines opacity-20" />
                  {i === 0 ? <Sparkles size={48} strokeWidth={1.3} aria-hidden="true" /> : <Users size={48} strokeWidth={1.3} aria-hidden="true" />}
                </>}
                <span className="absolute bottom-4 left-5 rounded-full border border-white/25 bg-black/30 px-3 py-1 font-mono text-[11px] text-white backdrop-blur">{a.category}</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl text-ink">{a.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{a.summary}</p>
                {details.length > 0 && <dl className="mt-5 grid gap-2 border-t border-hair pt-4 sm:grid-cols-2">
                  {details.map(([label, value]) => <Field key={label} label={label} value={value} />)}
                </dl>}
              </div>
            </article>
          </Reveal>;
        })}
      </div>
    </section>
  );
}

export function Contact() {
  const [copyStatus, setCopyStatus] = useState("");
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim() || "";
  const contactProfiles = [
    { name: "GitHub", url: personalInfo.github, display: "github.com/Fabeha1025" },
    { name: "LinkedIn", url: personalInfo.linkedin, display: "linkedin.com/in/arifa-rowshon-fabeha-87a9153a4", compact: "Arifa on LinkedIn" },
    { name: "Instagram", url: personalInfo.instagram, display: "instagram.com/peachypie_10", compact: "@peachypie_10" },
  ].filter(({ url }) => Boolean(url));
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopyStatus("Email copied");
    } catch {
      setCopyStatus("Copy unavailable; select the address to copy it");
    }
  };
  const submitMessage = async (event) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    if (form.get("website")) return; // Honeypot field for bots.
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();
    if (!name || !email || !message) return;
    if (formEndpoint) {
      setSubmitting(true);
      setFormStatus({ type: "", message: "" });
      try {
        const response = await fetch(formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ name, email, message }),
        });
        if (!response.ok) throw new Error("Submission failed");
        formElement.reset();
        setFormStatus({ type: "success", message: "Thanks! Your message was sent." });
      } catch {
        setFormStatus({ type: "error", message: "Message could not be sent. Please email me directly." });
      } finally {
        setSubmitting(false);
      }
      return;
    }
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };
  return (
    <section id="contact" className={shell}>
      <SectionHeading
        index="08"
        eyebrow="contact"
        title="Let's build something useful."
        kicker="Have an idea, a question, or a project to discuss? I'd love to hear from you."
      />
      <div className="contact-grid mt-10 grid items-stretch gap-6">
        <Reveal className="h-full">
          <div className="flex h-full flex-col gap-4">
            <div className="glass-strong glass-glow flex min-w-0 items-center gap-4 rounded-2xl p-5 sm:p-6">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-neonCyan/25 bg-neonCyan/10 text-neonCyan"><Mail size={24} aria-hidden="true" /></span>
              <div className="min-w-0 flex-1">
                <p className="font-mono text-xs text-muted">Email</p>
                <a className="mt-1 block break-words font-medium text-ink hover:text-neonCyan" href={`mailto:${personalInfo.email}`}>
                  {personalInfo.email.split("@")[0]}<wbr />@{personalInfo.email.split("@")[1]}
                </a>
              </div>
              <button type="button" onClick={copyEmail} aria-label="Copy email address" className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-hair bg-fill text-muted transition hover:border-neonCyan/40 hover:text-neonCyan"><Copy size={18} aria-hidden="true" /></button>
            </div>
            {copyStatus && <span className="px-2 font-mono text-xs text-neonCyan" role="status" aria-live="polite">{copyStatus}</span>}
            {contactProfiles.map(({ name, url, display, compact }) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${name} profile (opens in a new tab)`} className="glass-strong glass-glow flex min-w-0 items-center gap-4 rounded-2xl p-5 transition hover:border-neonCyan/40 sm:p-6">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-neonCyan/25 bg-neonCyan/10 text-neonCyan"><PlatformIcon name={name} className="h-7 w-7" /></span>
                <span className="min-w-0 flex-1">
                  <span className="block font-mono text-xs text-muted">{name}</span>
                  <span className="mt-1 block break-words font-medium text-ink sm:hidden">{compact || display}</span>
                  <span className="mt-1 hidden break-all font-medium text-ink sm:block">{display}</span>
                </span>
                <ExternalLink size={18} className="shrink-0 text-muted" aria-hidden="true" />
              </a>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.08} className="h-full">
          <div className="glass-strong glass-glow h-full rounded-3xl p-6 sm:p-8">
            <h3 className="text-2xl text-ink">Send a message</h3>
            <p id="contact-form-note" className="mt-2 text-sm leading-6 text-muted">{formEndpoint ? "Send a message directly through this form." : "This form opens a draft in your email app. Review and send it there."}</p>
            <form onSubmit={submitMessage} aria-describedby="contact-form-note" className="mt-7 space-y-5">
              <label className="sr-only" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block font-mono text-xs text-muted">Your name
                  <input name="name" type="text" autoComplete="name" required maxLength={80} placeholder="Your name" className="contact-input mt-2 w-full" />
                </label>
                <label className="block font-mono text-xs text-muted">Your email
                  <input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" className="contact-input mt-2 w-full" />
                </label>
              </div>
              <label className="block font-mono text-xs text-muted">Message
                <textarea name="message" required minLength={5} maxLength={1200} rows={6} placeholder="Hi Arifa, I'd love to talk about..." className="contact-input mt-2 w-full resize-y" />
              </label>
              <button type="submit" disabled={submitting} className={`${primary} min-h-12`}><Send size={17} aria-hidden="true" />{submitting ? "Sending…" : formEndpoint ? "Send message" : "Open email draft"}</button>
              {formStatus.message && <p className={formStatus.type === "error" ? "form-error" : "form-success"} role="status" aria-live="polite">{formStatus.message}</p>}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  const socialLinks = [
    { label: "GitHub", url: personalInfo.github },
    { label: "LinkedIn", url: personalInfo.linkedin },
    { label: "Instagram", url: personalInfo.instagram },
  ].filter(({ url }) => Boolean(url));
  return (
    <footer className="simple-footer mt-10 border-t border-hair">
      <div className="page-shell py-8">
        <div className="simple-footer-main">
          <div>
            <a href="#home" className="font-display text-xl text-ink hover:text-neonCyan">Arifa Rowshon Fabeha</a>
            <p className="mt-1 text-sm text-muted">Computer Science and Engineering Student · Sylhet, Bangladesh</p>
          </div>
          <nav className="footer-quick-links" aria-label="Footer navigation">
            <a href="#home">Home</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#contact">Contact</a>
          </nav>
          <div className="simple-footer-links" aria-label="Contact links">
            <a href={`mailto:${personalInfo.email}`} aria-label="Email Arifa"><Mail size={19} aria-hidden="true" /></a>
            {socialLinks.map(({ label, url }) => <a key={label} href={url} target="_blank" rel="noopener noreferrer" aria-label={`${label} profile (opens in a new tab)`}><PlatformIcon name={label} className="h-[19px] w-[19px]" /></a>)}
          </div>
        </div>
        <div className="simple-footer-base text-center font-mono text-xs text-muted">
          <span>© 2026 Hussain Ahmed Humaidi</span>
        </div>
      </div>
    </footer>
  );
}
