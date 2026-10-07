import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, FileText, Lock } from 'lucide-react';
import { projects, smallProjects, ui, type Project, type SmallProject } from '../content';
import { usePrefs } from '../lib/prefs';
import { BrowserFrame, PhoneFrame, ScrollShot } from '../visuals/Frames';
import { FundDashboard } from '../visuals/FundDashboard';
import { WellTrajectory } from '../visuals/WellTrajectory';
import { FlowField, FormArt } from '../visuals/SmallArt';
import { GithubIcon } from './BrandIcons';
import { Reveal, SectionHeader } from './Reveal';

function linkLabel(kind: 'visit' | 'code' | 'paper', href: string, t: ReturnType<typeof usePrefs>['t']) {
  if (kind === 'code') return t(ui.work.code);
  if (kind === 'paper') return t(ui.work.paper);
  return new URL(href).hostname.replace(/^www\./, '');
}

function LinkIcon({ kind }: { kind: 'visit' | 'code' | 'paper' }) {
  if (kind === 'code') return <GithubIcon className="size-4" />;
  if (kind === 'paper') return <FileText size={15} />;
  return <ArrowUpRight size={16} />;
}

function Visual({ p }: { p: Project }) {
  if (p.visual.kind === 'fund') return <FundDashboard />;
  if (p.visual.kind === 'well') return <WellTrajectory />;
  return <SiteVisual p={p} v={p.visual} />;
}

function SiteVisual({ p, v }: { p: Project; v: Extract<Project['visual'], { kind: 'site' }> }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const phoneY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <div ref={ref} className="group relative pr-[12%] pb-[6%] md:pr-[14%]">
      <a href={p.links[0]?.href} target="_blank" rel="noreferrer" aria-label={p.name} className="block">
        <BrowserFrame url={v.url} className="transition-transform duration-500 group-hover:-translate-y-1">
          <ScrollShot src={v.full} alt={`${p.name} — desktop`} />
        </BrowserFrame>
      </a>
      <motion.div style={{ y: phoneY }} className="absolute right-0 bottom-0 w-[26%] max-w-[190px]">
        <PhoneFrame src={v.mobile} alt={`${p.name} — mobile`} />
      </motion.div>
    </div>
  );
}

function ProjectRow({ p, index }: { p: Project; index: number }) {
  const { t } = usePrefs();
  const flip = index % 2 === 1;

  return (
    <article className="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -z-10 aspect-square w-[min(520px,80vw)] -translate-y-1/2 rounded-full opacity-[0.13] blur-[100px]"
        style={{ background: p.accent, [flip ? 'right' : 'left']: '5%' }}
      />

      <Reveal className={`lg:col-span-7 ${flip ? 'lg:order-2' : ''}`} y={40}>
        <Visual p={p} />
        {p.visual.kind !== 'site' && (
          <p className="mt-3 flex items-center gap-1.5 font-mono text-[11px] text-faint">
            {p.confidential && <Lock size={11} />}
            {t(p.confidential ? ui.work.confidential : ui.work.illustrative)}
          </p>
        )}
      </Reveal>

      <Reveal className={`lg:col-span-5 ${flip ? 'lg:order-1' : ''}`} delay={0.1}>
        <div className="mb-5 flex items-center gap-3">
          <span className="font-mono text-sm text-faint">{String(index + 1).padStart(2, '0')}</span>
          <span className="h-px w-8 bg-line-strong" />
          <span className="eyebrow">{t(p.category)}</span>
        </div>
        <h3 className="text-4xl font-semibold tracking-tight md:text-5xl">{p.name}</h3>
        {p.client !== p.name && <p className="mt-2 text-sm text-muted">{p.client}</p>}
        <p className="mt-5 text-[17px] leading-relaxed text-muted text-pretty">{t(p.summary)}</p>

        <ul className="mt-6 space-y-2.5">
          {p.highlights.map((h) => (
            <li key={h.en} className="flex gap-3 text-[15px] leading-snug">
              <span className="mt-[7px] size-1.5 shrink-0 rounded-full" style={{ background: p.accent }} />
              <span>{t(h)}</span>
            </li>
          ))}
        </ul>

        <dl className="mt-7 grid grid-cols-2 gap-4 border-t border-line pt-5 text-sm">
          <div>
            <dt className="eyebrow mb-1 !text-[10.5px]">{t(ui.work.role)}</dt>
            <dd>{t(p.role)}</dd>
          </div>
          <div>
            <dt className="eyebrow mb-1 !text-[10.5px]">{t(ui.work.period)}</dt>
            <dd>{t(p.period)}</dd>
          </div>
        </dl>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <span key={s} className="rounded-full border border-line bg-surface/60 px-2.5 py-1 font-mono text-[11px] text-muted">
              {s}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {p.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="group/link inline-flex h-10 items-center gap-2 rounded-full border border-line-strong px-4 text-sm font-medium transition-colors hover:bg-fg hover:text-bg"
            >
              {linkLabel(l.kind, l.href, t)}
              <span className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
                <LinkIcon kind={l.kind} />
              </span>
            </a>
          ))}
        </div>
      </Reveal>
    </article>
  );
}

function SmallCard({ p, i }: { p: SmallProject; i: number }) {
  const { t } = usePrefs();
  const Wrapper = p.link ? 'a' : 'div';
  return (
    <Reveal delay={i * 0.08} className="h-full">
      <Wrapper
        {...(p.link ? { href: p.link.href, target: '_blank', rel: 'noreferrer' } : {})}
        className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface/60 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-xl hover:shadow-black/10"
      >
        <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
          {p.art === 'flow' && <FlowField />}
          {p.art === 'form' && <FormArt />}
          {p.image && (
            <img
              src={p.image}
              alt={p.name}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
            />
          )}
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="mb-3 flex items-center justify-between gap-3 font-mono text-[11px] text-faint">
            <span>{p.org}</span>
            <span>{p.year}</span>
          </div>
          <h4 className="flex items-center justify-between gap-2 text-xl font-semibold tracking-tight">
            {p.name}
            {p.link && (
              <span className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg">
                <LinkIcon kind={p.link.kind} />
              </span>
            )}
          </h4>
          <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{t(p.summary)}</p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {p.stack.map((s) => (
              <span key={s} className="rounded-full bg-fg/5 px-2.5 py-1 font-mono text-[10.5px] text-muted">
                {s}
              </span>
            ))}
          </div>
        </div>
      </Wrapper>
    </Reveal>
  );
}

export function Work() {
  const { t } = usePrefs();
  return (
    <section id="work" className="relative py-24 md:py-36">
      <div className="container-x">
        <SectionHeader eyebrow={t(ui.work.eyebrow)} title={t(ui.work.title)} sub={t(ui.work.sub)} />
        <div className="space-y-28 md:space-y-40">
          {projects.map((p, i) => (
            <ProjectRow key={p.id} p={p} index={i} />
          ))}
        </div>

        <Reveal className="mt-32 mb-10 flex items-end justify-between gap-6 border-t border-line pt-12 md:mt-44">
          <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">{t(ui.work.moreTitle)}</h3>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {smallProjects.map((p, i) => (
            <SmallCard key={p.id} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
