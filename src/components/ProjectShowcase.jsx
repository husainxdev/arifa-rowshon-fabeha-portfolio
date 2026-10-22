import { useState } from "react";
import { ArrowRight, ArrowUpRight, ExternalLink, FileText } from "lucide-react";
import { projects } from "../data/portfolioData";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { InteractiveCard } from "./ui/MotionPrimitives";
import ProjectVisual from "./ui/ProjectVisual";
import DetailDialog from "./ui/DetailDialog";

const galleries = project => (project.screenshots || []).map((item, i) => typeof item === "string" ? { src: item, alt: `${project.title} screenshot ${i + 1}` } : item).filter(item => item.src && item.alt);
const hasContribution = project => project.contribution && (project.contribution.role || ["work", "decisions", "lessons"].some(key => project.contribution[key]?.length));

function ProjectLinks({ project }) {
  return <div className="flex flex-wrap gap-4">
    {project.github && <a className="text-link" href={project.github} target="_blank" rel="noopener noreferrer">Repository <ExternalLink size={15} /></a>}
    {project.demo && <a className="text-link" href={project.demo} target="_blank" rel="noopener noreferrer">Live demo <ExternalLink size={15} /></a>}
  </div>;
}

function MediaGallery({ images }) {
  const [selected, setSelected] = useState(0);
  if (!images.length) return null;
  return <div className="space-y-3">
    <figure className="overflow-hidden rounded-xl border border-hair bg-fill">
      <img className="max-h-[420px] w-full object-contain" src={images[selected].src} alt={images[selected].alt} loading="lazy" />
      {images[selected].caption && <figcaption className="px-4 py-3 text-sm text-muted">{images[selected].caption}</figcaption>}
    </figure>
    {images.length > 1 && <div className="flex gap-2 overflow-x-auto pb-2" aria-label="Project screenshots">
      {images.map((image, i) => <button key={image.src} type="button" aria-pressed={selected === i} aria-label={`View screenshot ${i + 1}: ${image.alt}`} onClick={() => setSelected(i)} className={`gallery-thumb ${selected === i ? "selected" : ""}`}><img src={image.src} alt="" loading="lazy" /></button>)}
    </div>}
  </div>;
}

function DetailList({ title, items }) {
  if (!items?.length) return null;
  return <div><h3 className="text-xl text-ink">{title}</h3><ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-muted">{items.map(item => <li key={item}>{item}</li>)}</ul></div>;
}

function ProjectDetails({ project, onClose }) {
  const contribution = project.contribution;
  return <DetailDialog title={project.title} eyebrow={`${project.status} · Project overview`} onClose={onClose}>
    <p className="text-base leading-8 text-muted">{project.summary}</p>
    <div className="project-purpose"><p className="font-mono text-xs uppercase tracking-widest text-neonCyan">The purpose</p><p className="mt-3 font-display text-2xl leading-snug text-ink">{project.problem}</p></div>
    <div><h3 className="text-xl text-ink">Focus areas</h3><div className="mt-3 flex flex-wrap gap-2">{project.focusAreas?.map(area => <span className="topic-chip" key={area}>{area}</span>)}</div></div>
    {project.description && <p className="text-sm leading-7 text-muted">{project.description}</p>}
    {project.research && <div><h3 className="text-xl text-ink">Research notes</h3><p className="mt-3 text-sm leading-7 text-muted">{project.research}</p></div>}
    {hasContribution(project) && <section className="space-y-5 border-t border-hair pt-6" aria-label="My contribution">
      <div><p className="font-mono text-xs uppercase tracking-widest text-neonCyan">My contribution</p>{contribution.role && <h3 className="mt-2 text-2xl text-ink">{contribution.role}</h3>}</div>
      <DetailList title="What I worked on" items={contribution.work} />
      <DetailList title="Decisions I made" items={contribution.decisions} />
      <DetailList title="What I learned" items={contribution.lessons} />
    </section>}
    <DetailList title="Implemented features" items={project.features} />
    <DetailList title="Technologies used" items={project.technologies} />
    <MediaGallery images={galleries(project)} />
    <MediaGallery images={(project.diagrams || []).filter(item => item.src && item.alt)} />
    {project.team && <div><h3 className="text-xl text-ink">Team</h3><p className="mt-2 text-sm leading-7 text-muted">{project.team}</p></div>}
    {[...(project.documents || []), ...(project.references || [])].filter(item => item.url && item.label).length > 0 && <div>
      <h3 className="text-xl text-ink">Documents & references</h3>
      <ul className="mt-3 space-y-3">{[...(project.documents || []), ...(project.references || [])].filter(item => item.url && item.label).map(item => <li key={item.url}><a className="text-link" href={item.url} target="_blank" rel="noopener noreferrer"><FileText size={16} />{item.label}<ExternalLink size={14} /></a></li>)}</ul>
    </div>}
    <ProjectLinks project={project} />
  </DetailDialog>;
}

export default function ProjectShowcase() {
  const [selected, setSelected] = useState(null);
  const featured = projects.find(project => project.featured) || projects[0];
  if (!featured) return null;
  const image = galleries(featured)[0];
  return <section id="projects" className="portfolio-section page-shell relative scroll-mt-28 py-16 md:py-24">
    <SectionHeading index="05" eyebrow="projects" title="Ideas, made tangible." kicker="A closer look at the purpose behind each project." />
    <Reveal className="mt-10">
      <InteractiveCard as="article" tilt={1.5} className="featured-project glass-strong glass-glow rounded-3xl">
        <div className="featured-visual">
          {image ? <img src={image.src} alt={image.alt} loading="lazy" className="h-full w-full object-contain" /> : <ProjectVisual built index={0} />}
          <span className="featured-label">Featured project</span>
        </div>
        <div className="featured-copy">
          <span className="project-status">{featured.status}</span>
          <h3 className="mt-5 text-4xl text-ink sm:text-5xl">{featured.title}</h3>
          <p className="mt-4 font-display text-xl leading-relaxed text-neonCyan">“{featured.tagline}”</p>
          <p className="mt-4 text-sm leading-7 text-muted">{featured.summary}</p>
          <div className="mt-7 flex flex-wrap items-center gap-5">
            <button type="button" className="action-button feature-action" onClick={() => setSelected(featured)}>Explore project <ArrowUpRight size={17} /></button>
            <ProjectLinks project={featured} />
          </div>
        </div>
      </InteractiveCard>
    </Reveal>
    <div className="mt-5 grid gap-5">
      {projects.filter(project => project !== featured).map((project, i) => <Reveal key={project.id || project.title}>
        <InteractiveCard as="article" tilt={1} className="project-secondary glass-strong rounded-2xl">
          <div className="secondary-visual"><ProjectVisual built={project.status === "Built project"} index={i + 1} /></div>
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-3"><span className="project-status">{project.status}</span><span className="text-xs text-muted">{project.type}</span></div>
            <h3 className="mt-4 text-3xl text-ink">{project.title}</h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">{project.summary}</p>
            <button type="button" className="text-link mt-5 min-h-11" onClick={() => setSelected(project)}>Read project overview <ArrowRight size={16} /></button>
            <ProjectLinks project={project} />
          </div>
        </InteractiveCard>
      </Reveal>)}
    </div>
    {selected && <ProjectDetails key={selected.id || selected.title} project={selected} onClose={() => setSelected(null)} />}
  </section>;
}
