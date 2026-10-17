import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Check,
  Cloud,
  Code2,
  Copy,
  ExternalLink,
  HeartPulse,
  Handshake,
  Lightbulb,
  Mail,
  MapPin,
  MessageCircle,
  Clock3,
  Sparkles,
  Send,
  Target,
  Users,
} from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import Guide from "./Guide";
import PlatformIcon from "./PlatformIcon";
import {
  personalInfo,
  education,
  skills,
  softSkills,
  projects,
  codingProfiles,
  codingProgress,
  activities,
} from "../data/portfolioData";

const shell =
  "portfolio-section relative mx-auto max-w-6xl scroll-mt-28 px-4 py-16 sm:px-6 md:py-20";
const primary =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-neonCyan px-5 py-3 text-sm font-semibold text-void transition hover:-translate-y-0.5 hover:brightness-110";
const secondary =
  "inline-flex items-center justify-center gap-2 rounded-xl border border-hair-strong bg-fill px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-neonCyan/50";

export function Home() {
  return (
    <section
      id="home"
      className="relative mx-auto max-w-6xl scroll-mt-28 px-4 pb-14 pt-32 sm:px-6 md:pb-20 md:pt-36"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-grid-lines opacity-[.05] mask-radial-fade" />
      <div className="grid items-start gap-9 lg:grid-cols-[1.12fr_.88fr] lg:gap-14">
        <div className="relative z-10">
          <Reveal delay={0.04}>
            <p className="font-mono text-sm text-neonCyan">Hi, I'm</p>
            <h1 className="mt-2 max-w-[700px] text-[clamp(3rem,6vw,5.4rem)] leading-[1.04] tracking-[-.045em] text-ink">
              Arifa Rowshon{" "}
              <span className="text-gradient-animate">Fabeha.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.11}>
            <p className="mt-5 font-mono text-sm text-ink/85"><span className="text-neonCyan">focus:&nbsp;</span>C++ · Data Structures · Algorithms<span className="ml-1 inline-block h-4 w-px animate-blink bg-neonCyan align-middle" aria-hidden="true" /></p>
            <p className="mt-5 font-mono text-xs uppercase tracking-wide text-neonCyan">Computer Science and Engineering Student</p>
            <p className="mt-5 max-w-xl text-base leading-8 text-muted">
              Welcome to my portfolio! I am a CSE student exploring programming,
              data structures, algorithms, and technology through learning and
              projects.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-7 grid max-w-md gap-3 min-[440px]:grid-cols-2">
              <a className={primary} href="#about">
                Explore My Journey <ArrowRight size={17} />
              </a>
              <a className={secondary} href="#contact">
                Contact Me <ArrowUpRight size={17} />
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.16}>
          <div className="grid min-h-[280px] grid-cols-[.9fr_1.1fr] gap-3 sm:min-h-[340px] lg:mt-2">
            <div className="glass-strong glass-glow relative flex items-end justify-center overflow-hidden rounded-2xl">
              <div className="hero-rings" aria-hidden="true" />
              <Guide className="relative z-10 mb-3 w-[95%] max-w-[230px]" />
              <span className="absolute bottom-3 left-3 right-3 z-20 rounded-lg border border-hair bg-void/85 px-2 py-1.5 text-center font-mono text-[10px] text-neonCyan">Fabiha · your guide</span>
            </div>
            <div className="glass flex min-w-0 flex-col justify-between rounded-2xl p-3 sm:p-4">
              <p className="flex items-center gap-2 font-mono text-[11px] text-muted"><span className="h-2 w-2 rounded-full bg-neonCyan" /> currently</p>
              <dl className="space-y-4">
                <div><dt className="font-mono text-[10px] uppercase text-muted">Studying</dt><dd className="mt-1 text-xs font-medium text-ink sm:text-sm">B.Sc. in CSE</dd></div>
                <div><dt className="font-mono text-[10px] uppercase text-muted">University</dt><dd className="mt-1 text-xs font-medium text-ink sm:text-sm">Metropolitan University</dd></div>
                <div><dt className="font-mono text-[10px] uppercase text-muted">Exploring</dt><dd className="mt-1 text-xs font-medium text-ink sm:text-sm">Programming & healthcare ideas</dd></div>
              </dl>
              <span className="flex items-center gap-1 font-mono text-[10px] text-neonCyan"><MapPin size={12} aria-hidden="true" /> Sylhet, Bangladesh</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function About() {
  const facts = [
    { value: education[0].year.replace("Started in ", ""), label: "CSE journey began", href: "#education", icon: Clock3 },
    { value: `${codingProgress.problemsSolved}+`, label: "Problems solved", href: "#coding", icon: Target },
    { value: projects.length, label: "Featured projects", href: "#projects", icon: Sparkles },
    { value: codingProfiles.length, label: "Coding profiles", href: "#coding", icon: Code2 },
    { value: skills.length, label: "Technical skills", href: "#skills", icon: Code2 },
    { value: softSkills.length, label: "Soft skills", href: "#skills", icon: Users },
  ];
  return (
    <section id="about" className={shell}>
      <SectionHeading
        index="01"
        eyebrow="about"
        title="A bit about me"
      />
      <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-[.95fr_1.05fr]">
        <Reveal className="h-full">
          <div className="glass-strong glass-glow flex h-full flex-col justify-center rounded-3xl p-7 sm:p-9 lg:min-h-[510px]">
            <p className="text-base leading-7 text-ink/90 sm:text-lg sm:leading-8">
              I'm a Computer Science and Engineering student at{" "}
              <strong className="text-neonCyan">
                Metropolitan University, Sylhet, Bangladesh.
              </strong>{" "}
              I enjoy exploring how software can help solve everyday problems.
            </p>
            <p className="mt-6 text-sm leading-7 text-muted sm:text-base">
              My interests include programming, problem-solving, software
              development, and healthcare innovation. I keep learning through
              projects, coding practice, and curiosity about how things work.
            </p>
            <a href="#projects" className="mt-9 inline-flex w-fit items-center gap-2 font-mono text-sm text-neonCyan transition hover:gap-3">Explore my projects <ArrowRight size={16} aria-hidden="true" /></a>
          </div>
        </Reveal>
        <Reveal className="h-full" delay={0.08}>
          <div className="glass-strong glass-glow flex h-full flex-col rounded-3xl p-5 sm:p-7">
            <p className="font-mono text-xs uppercase tracking-widest text-neonCyan">At a glance</p>
            <div className="mt-4 grid flex-1 grid-cols-2">
              {facts.map((fact) => {
                const Icon = fact.icon;
                return <a key={fact.label} href={fact.href} className="about-fact group flex min-h-[126px] flex-col justify-between p-4 transition-colors hover:bg-neonCyan/[.04] sm:p-5">
                  <div className="flex items-start justify-between gap-2">
                    <strong className="font-display text-3xl leading-none tracking-[-.04em] text-ink sm:text-4xl">{fact.value}</strong>
                    <Icon size={18} className="shrink-0 text-neonCyan/80 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-[11px] leading-4 text-muted sm:text-xs">{fact.label}</span>
                </a>;
              })}
            </div>
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
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Skills() {
  const technicalIcons = [Code2, Code2, Code2, Target];
  const softIcons = [Lightbulb, Users, Clock3, Handshake, MessageCircle, Sparkles];
  return (
    <section id="skills" className={shell}>
      <SectionHeading
        index="02"
        eyebrow="skills"
        title="Skills & strengths"
        kicker="Technical foundations and the people skills I bring to each project."
      />
      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <Reveal className="h-full">
          <div className="glass-strong glass-glow h-full rounded-3xl p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-xl border border-neonCyan/30 bg-neonCyan/10 text-neonCyan"><Code2 size={23} /></span>
              <div>
                <h3 className="text-2xl text-ink">Technical skills</h3>
                <p className="font-mono text-xs text-muted">{skills.length} confirmed skills</p>
              </div>
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {skills.map((skill, i) => {
                const Icon = technicalIcons[i] || Code2;
                return <div key={skill.name} className="flex min-h-16 items-center gap-3 rounded-xl border border-hair bg-fill px-4 py-3 transition-colors hover:border-neonCyan/40 hover:bg-neonCyan/[.06]">
                  <Icon size={19} className="shrink-0 text-neonCyan" aria-hidden="true" />
                  <span className="font-semibold text-ink">{skill.name}</span>
                </div>;
              })}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08} className="h-full">
          <div className="glass-strong glass-glow h-full rounded-3xl p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-xl border border-neonCyan/30 bg-neonCyan/10 text-neonCyan"><Users size={23} /></span>
              <div>
                <h3 className="text-2xl text-ink">Soft skills</h3>
                <p className="font-mono text-xs text-muted">{softSkills.length} strengths</p>
              </div>
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {softSkills.map((skill, i) => {
                const Icon = softIcons[i];
                return <div key={skill} className="flex min-h-16 items-center gap-3 rounded-xl border border-hair bg-fill px-4 py-3 transition-colors hover:border-neonCyan/40 hover:bg-neonCyan/[.06]">
                  <Icon size={19} className="shrink-0 text-neonCyan" aria-hidden="true" />
                  <span className="font-semibold text-ink">{skill}</span>
                </div>;
              })}
            </div>
          </div>
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
function ProjectCard({ project, index }) {
  const built = project.status === "Built project";
  const Icon = built ? HeartPulse : Cloud;
  return (
    <Reveal className="h-full" delay={index * 0.08}>
      <article className="glass-strong glass-glow h-full overflow-hidden rounded-3xl">
        <div
          className={`project-art ${built ? "project-art-health" : "project-art-cloud"}`}
        >
          <div className="project-art-grid" />
          <div className="project-art-icon">
            <Icon size={54} strokeWidth={1.4} />
          </div>
          <span className="absolute bottom-5 left-6 font-mono text-xs uppercase tracking-widest text-ink/70">
            Project / 0{index + 1}
          </span>
        </div>
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span
              className={`rounded-full border px-3 py-1 font-mono text-xs ${built ? "border-neonCyan/40 bg-neonCyan/10 text-neonCyan" : "border-neonPurple/50 bg-neonPurple/10 text-neonPurple"}`}
            >
              {project.status}
            </span>
            <span className="font-mono text-xs text-muted">{project.type}</span>
          </div>
          <h3 className="mt-5 text-3xl text-ink">{project.title}</h3>
          {project.tagline && (
            <p className="mt-3 border-l-2 border-neonCyan pl-3 text-sm font-semibold text-neonCyan">
              “{project.tagline}”
            </p>
          )}
          <p className="mt-4 leading-7 text-muted">{project.summary}</p>
          {project.description && <p className="mt-4 text-sm leading-6 text-muted">{project.description}</p>}
          {project.research && <p className="mt-4 text-sm leading-6 text-muted">{project.research}</p>}
          {project.technologies?.length > 0 && <p className="mt-4 font-mono text-xs text-neonCyan">{project.technologies.join(" · ")}</p>}
          {(project.github || project.demo) && <div className="mt-6 flex flex-wrap gap-3 border-t border-hair pt-4">
            {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-neonCyan hover:underline">Repository <ExternalLink size={15} /></a>}
            {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-neonCyan hover:underline">Live demo <ExternalLink size={15} /></a>}
          </div>}
        </div>
      </article>
    </Reveal>
  );
}
export function Projects() {
  return (
    <section id="projects" className={shell}>
      <SectionHeading
        index="04"
        eyebrow="projects"
        title="Things I'm building"
        kicker="A healthcare project and an ongoing academic exploration."
      />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

function useCounter(target) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const reduced = useReducedMotion();
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        observer.disconnect();
        if (reduced) {
          setCount(target);
          return;
        }
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min((now - start) / 1700, 1);
          setCount(Math.round(target * (1 - Math.pow(1 - t, 3))));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.25 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, reduced]);
  return { ref, count };
}
export function Coding() {
  const { problemsSolved, referenceTarget } = codingProgress;
  const target = Math.max(referenceTarget, 1);
  const above = problemsSolved - referenceTarget;
  const surpassed = above > 0;
  const percentage = (problemsSolved / target) * 100;
  const { ref, count } = useCounter(problemsSolved);
  const animatedPercentage = (count / target) * 100;
  const colors = {
    ink: "#eae7df",
    blue: "#8bb9ff",
    brown: "#d9a779",
    green: "#91d8ac",
    cyan: "#95dce6",
    purple: "#c6aceb",
    pink: "#e9accb",
  };

  return (
    <section id="coding" className={shell}>
      <SectionHeading
        index="03"
        eyebrow="coding profiles"
        title="Where I practice"
        kicker="Consistent practice in programming and algorithmic problem-solving."
      />
      <Reveal>
        <div
          ref={ref}
          className="glass-strong glass-glow mt-8 rounded-3xl p-6 sm:p-9"
        >
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-neonCyan">
                The practice adds up
              </p>
              <div
                className="mt-3 font-display text-[clamp(5rem,12vw,9rem)] font-bold leading-none tracking-[-.1em] text-gradient tabular-nums"
                aria-label={`${problemsSolved} plus problems solved`}
              >
                {count}
                <span className="align-top text-[.5em]">+</span>
              </div>
              <h3 className="mt-3 text-2xl text-ink">Problems Solved</h3>
            </div>
            <div className="rounded-2xl border border-neonCyan/25 bg-neonCyan/10 px-5 py-4 text-center">
              <span className="font-display text-4xl text-neonCyan">
                {percentage.toFixed(1)}%
              </span>
              <p className="mt-1 font-mono text-xs text-muted">of the target</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl border border-hair bg-fill p-5">
            <div className="flex justify-between gap-3 font-mono text-xs text-muted">
              <span>0</span>
              <span>Target: {referenceTarget} problems</span>
            </div>
            <div
              role="progressbar"
              aria-label="Problem-solving milestone progress"
              aria-valuemin={0}
              aria-valuemax={Math.max(problemsSolved, target)}
              aria-valuenow={count}
              aria-valuetext={`${animatedPercentage.toFixed(1)}% of the ${referenceTarget}-problem target`}
              className="relative mr-12 mt-3 h-3 rounded-full bg-hair"
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-neonPurple to-neonCyan"
                style={{ width: `${Math.min(animatedPercentage, 100)}%` }}
              />
              {surpassed && count > target && (
                <span className="absolute -right-12 top-1/2 -translate-y-1/2 rounded-full border border-neonCyan/50 bg-void px-2 py-1 font-mono text-[10px] text-neonCyan">
                  +{count - target}
                </span>
              )}
            </div>
            <p className="mt-5 flex flex-wrap items-center gap-2 text-sm text-neonCyan">
              <Check size={16} />
              {surpassed
                ? `You've surpassed the ${referenceTarget}-problem milestone!`
                : `${problemsSolved} of ${referenceTarget} problems solved.`}
              {surpassed && (
                <span className="ml-auto font-mono text-xs text-muted">
                  {above} above target
                </span>
              )}
            </p>
          </div>
        </div>
      </Reveal>
      <div className="mt-14 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-neonCyan">
            Find me online
          </p>
          <h3 className="mt-3 text-2xl text-ink sm:text-3xl">
            Seven platforms. One curious mind.
          </h3>
        </div>
        <p className="text-sm text-muted">
          Explore my coding profiles and repositories.
        </p>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {codingProfiles.map((profile, i) => (
          <Reveal key={profile.name} delay={(i % 4) * 0.05}>
            <a
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${profile.name} profile (opens in a new tab)`}
              className="profile-card glass glass-glow block min-h-[172px] rounded-2xl p-5 transition hover:-translate-y-1 hover:border-neonCyan/40"
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
                <span className="ml-auto inline-flex items-center gap-1 font-mono text-[10px] text-muted"><span className="h-1.5 w-1.5 rounded-full bg-neonCyan" /> profile</span>
              </div>
              <div className="mt-7 flex items-end justify-between gap-2 border-t border-hair pt-4">
                <span className="truncate font-mono text-xs text-muted">{new URL(profile.url).host}</span>
                <span className="inline-flex shrink-0 items-center gap-1 font-mono text-xs text-neonCyan">
                  Visit Profile <ExternalLink size={13} />
                </span>
              </div>
            </a>
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
      <p className="mt-5 rounded-xl border border-dashed border-hair px-5 py-4 text-sm text-muted">
        Competition, workshop, and seminar details can be added when available.
      </p>
    </section>
  );
}

export function Contact() {
  const [copyStatus, setCopyStatus] = useState("");
  const links = [
    { label: "GitHub", url: personalInfo.github },
    ...(personalInfo.linkedin
      ? [{ label: "LinkedIn", url: personalInfo.linkedin }]
      : []),
    ...personalInfo.otherLinks,
  ];
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopyStatus("Email copied");
    } catch {
      setCopyStatus("Copy unavailable; select the address to copy it");
    }
  };
  const openEmailDraft = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();
    if (!name || !email || !message) return;
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };
  return (
    <section id="contact" className={shell}>
      <SectionHeading
        index="07"
        eyebrow="contact"
        title="Let's build something useful."
        kicker="Have an idea, a question, or a project to discuss? I'd love to hear from you."
      />
      <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-[.9fr_1.1fr]">
        <Reveal className="h-full">
          <div className="flex h-full flex-col gap-4">
            <div className="glass-strong glass-glow flex min-w-0 items-center gap-4 rounded-2xl p-5 sm:p-6">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-neonCyan/25 bg-neonCyan/10 text-neonCyan"><Mail size={24} aria-hidden="true" /></span>
              <div className="min-w-0 flex-1">
                <p className="font-mono text-xs text-muted">Email</p>
                <a className="mt-1 block break-all font-medium text-ink hover:text-neonCyan" href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
              <button type="button" onClick={copyEmail} aria-label="Copy email address" className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-hair bg-fill text-muted transition hover:border-neonCyan/40 hover:text-neonCyan"><Copy size={18} aria-hidden="true" /></button>
            </div>
            <span className="min-h-5 px-2 font-mono text-xs text-neonCyan" role="status" aria-live="polite">{copyStatus}</span>
            <div className="glass-strong glass-glow flex min-w-0 items-center gap-4 rounded-2xl p-5 sm:p-6">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-neonCyan/25 bg-neonCyan/10 text-neonCyan"><PlatformIcon name="GitHub" className="h-7 w-7" /></span>
              <div className="min-w-0 flex-1">
                <p className="font-mono text-xs text-muted">GitHub</p>
                <a className="mt-1 block truncate font-medium text-ink hover:text-neonCyan" href={personalInfo.github} target="_blank" rel="noopener noreferrer">github.com/Fabeha1025</a>
              </div>
              <ExternalLink size={18} className="shrink-0 text-muted" aria-hidden="true" />
            </div>
            <div className="mt-auto flex flex-wrap items-center justify-between gap-4 px-1 pt-5">
              <div className="flex flex-wrap gap-2">
                {links.map((link) => (
                  <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-hair bg-fill px-3 py-2 font-mono text-xs text-ink transition hover:border-neonCyan/40 hover:text-neonCyan">{link.label}<ExternalLink size={13} aria-hidden="true" /></a>
                ))}
              </div>
              <span className="inline-flex items-center gap-2 font-mono text-xs text-muted"><MapPin size={14} className="text-neonCyan" aria-hidden="true" />{personalInfo.location}</span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08} className="h-full">
          <div className="glass-strong glass-glow h-full rounded-3xl p-6 sm:p-8">
            <h3 className="text-2xl text-ink">Send a message</h3>
            <p id="contact-form-note" className="mt-2 text-sm leading-6 text-muted">This form opens a draft in your email app. Review and send it there.</p>
            <form onSubmit={openEmailDraft} aria-describedby="contact-form-note" className="mt-7 space-y-5">
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
              <button type="submit" className={`${primary} min-h-12`}><Send size={17} aria-hidden="true" />Open email draft</button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer({ onReplayIntro }) {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-10 border-t border-hair">
      <span aria-hidden="true" className="rule-gradient absolute inset-x-0 top-0" />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <a href="#home" className="font-display text-2xl text-ink">Arifa Rowshon <span className="text-neonCyan">Fabeha.</span></a>
          <p className="mt-2 font-mono text-xs text-muted">Computer Science and Engineering Student · Sylhet, Bangladesh</p>
          <p className="mt-6 max-w-md text-sm leading-7 text-muted">Exploring programming, problem-solving, and projects with curiosity and care.</p>
          <div className="mt-6 flex items-center gap-3">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile (opens in a new tab)" className="footer-social"><PlatformIcon name="GitHub" className="h-[18px] w-[18px]" /></a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Email Arifa" className="footer-social"><Mail size={18} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-hair pt-6 font-mono text-xs text-muted">
          <span>© {year} {personalInfo.name}</span>
          <button type="button" onClick={onReplayIntro} className="transition hover:text-neonCyan">Replay intro</button>
        </div>
      </div>
      <a href="#home" aria-label="Back to top" className="absolute -top-5 right-4 grid h-11 w-11 place-items-center rounded-full border border-neonCyan/40 bg-neonCyan text-void shadow-lg transition hover:-translate-y-0.5 sm:right-6"><ArrowUp size={20} aria-hidden="true" /></a>
    </footer>
  );
}
