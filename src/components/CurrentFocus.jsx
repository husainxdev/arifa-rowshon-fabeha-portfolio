import { ArrowUpRight, Quote } from "lucide-react";
import { currentFocus, testimonials } from "../data/portfolioExtras";
import Reveal from "./ui/Reveal";

export function CurrentFocus() {
  const date = new Date(`${currentFocus.updatedAt}T00:00:00Z`);
  return <Reveal className="mt-6">
    <aside id="now" className="now-panel scroll-mt-28 rounded-2xl border border-hair bg-fill p-6 sm:p-7" aria-labelledby="now-title">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 id="now-title" className="flex items-center gap-3 text-2xl text-ink"><span className="now-dot" aria-hidden="true" />What I'm focusing on</h3>
        <p className="font-mono text-[11px] text-muted">Portfolio update · <time dateTime={currentFocus.updatedAt}>{new Intl.DateTimeFormat("en", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(date)}</time></p>
      </div>
      <div className="mt-5 grid gap-5 md:grid-cols-3">
        {currentFocus.items.map(item => <a key={item.label} href={item.href} className="now-item group">
          <p className="font-mono text-[11px] uppercase tracking-widest text-neonCyan">{item.label}</p>
          <h4 className="mt-2 flex items-center justify-between gap-3 font-sans text-sm font-semibold text-ink">{item.title}<ArrowUpRight size={16} className="shrink-0 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neonCyan" /></h4>
          <p className="mt-2 text-xs leading-6 text-muted">{item.detail}</p>
        </a>)}
      </div>
    </aside>
  </Reveal>;
}

export function CollaboratorFeedback() {
  const published = testimonials.filter(item => item.permissionToPublish === true && item.quote?.trim() && item.name?.trim() && item.role?.trim());
  if (!published.length) return null;
  return <section aria-labelledby="feedback-title" className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
    <h2 id="feedback-title" className="text-3xl text-ink">Words from collaborators</h2>
    <div className="mt-6 grid gap-5 md:grid-cols-2">{published.map(item => <Reveal key={item.id || item.name}><figure className="glass-strong rounded-2xl p-7">
      <Quote size={26} className="text-neonCyan" aria-hidden="true" />
      <blockquote className="mt-4 text-base leading-8 text-ink">{item.quote}</blockquote>
      <figcaption className="mt-5 border-t border-hair pt-4 text-sm text-ink">{item.name}<span className="mt-1 block text-xs text-muted">{item.role}</span></figcaption>
    </figure></Reveal>)}</div>
  </section>;
}
