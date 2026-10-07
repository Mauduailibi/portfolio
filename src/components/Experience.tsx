import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { jobs, ui, type Lang } from '../content';
import { usePrefs } from '../lib/prefs';
import { Reveal, SectionHeader } from './Reveal';

function fmt(ym: string, lang: Lang) {
  const [y, m] = ym.split('-').map(Number);
  const s = new Date(y, m - 1, 1).toLocaleDateString(lang === 'pt' ? 'pt-BR' : 'en-US', { month: 'short', year: 'numeric' });
  return s.replace('.', '').replace(' de ', ' ');
}

export function Experience() {
  const { t, lang } = usePrefs();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] });
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section id="experience" className="relative border-t border-line bg-bg-soft/50 py-24 md:py-36">
      <div className="container-x">
        <SectionHeader eyebrow={t(ui.experience.eyebrow)} title={t(ui.experience.title)} />

        <div ref={ref} className="relative">
          <div className="absolute top-2 bottom-2 left-[5px] w-px bg-line md:left-[calc(200px+5px)]" />
          <motion.div
            style={{ scaleY: fill }}
            className="absolute top-2 bottom-2 left-[5px] w-px origin-top bg-accent-ink md:left-[calc(200px+5px)]"
          />

          <ol className="space-y-12">
            {jobs.map((j, i) => {
              const current = !j.end;
              return (
                <li key={i} className="relative grid gap-2 pl-8 md:grid-cols-[200px_1fr] md:gap-0 md:pl-0">
                  <Reveal className="font-mono text-xs text-muted md:pt-1 md:pr-10 md:text-right">
                    {fmt(j.start, lang)} — {j.end ? fmt(j.end, lang) : t(ui.experience.present)}
                  </Reveal>
                  <span
                    className={`absolute top-1 left-0 size-[11px] rounded-full border-2 md:left-[200px] ${
                      current ? 'border-accent-ink bg-accent' : 'border-line-strong bg-bg'
                    }`}
                  >
                    {current && <span className="absolute inset-[-5px] animate-ping rounded-full border border-accent-ink/40" />}
                  </span>
                  <Reveal className="md:pl-10" delay={0.05}>
                    <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{t(j.role)}</h3>
                    <p className="mt-1 flex flex-wrap items-center gap-x-2 text-[15px] text-muted">
                      {j.href ? (
                        <a href={j.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-0.5 font-medium text-fg hover:underline">
                          {t(j.company)}
                          <ArrowUpRight size={14} />
                        </a>
                      ) : (
                        <span className="font-medium text-fg">{t(j.company)}</span>
                      )}
                      <span className="text-faint">·</span>
                      <span>{t(j.place)}</span>
                    </p>
                    <ul className="mt-3 max-w-2xl space-y-1.5 text-[15px] leading-relaxed text-muted">
                      {j.bullets.map((b) => (
                        <li key={b.en}>{t(b)}</li>
                      ))}
                    </ul>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {j.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-fg/5 px-2.5 py-0.5 font-mono text-[10.5px] text-muted">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
