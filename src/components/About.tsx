import { GraduationCap, Languages } from 'lucide-react';
import { education, skills, ui } from '../content';
import { usePrefs } from '../lib/prefs';
import { Reveal, SectionHeader } from './Reveal';

export function About() {
  const { t } = usePrefs();
  return (
    <section id="about" className="border-t border-line py-24 md:py-36">
      <div className="container-x">
        <SectionHeader eyebrow={t(ui.about.eyebrow)} title={t(ui.about.title)} />

        <div className="grid gap-14 lg:grid-cols-12">
          <div className="space-y-5 text-lg leading-relaxed text-muted lg:col-span-6">
            {[ui.about.p1, ui.about.p2, ui.about.p3].map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-pretty">{t(p)}</p>
              </Reveal>
            ))}

            <Reveal delay={0.2} className="grid gap-4 pt-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-line bg-surface/60 p-5">
                <p className="eyebrow mb-4 flex items-center gap-2">
                  <GraduationCap size={14} /> {t(ui.about.educationTitle)}
                </p>
                <ul className="space-y-3.5">
                  {education.map((e) => (
                    <li key={e.school}>
                      <p className="text-[15px] leading-snug font-medium text-fg">{t(e.title)}</p>
                      <p className="text-sm">{e.school}</p>
                      <p className="font-mono text-[11px] text-faint">{t(e.period)}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-line bg-surface/60 p-5">
                <p className="eyebrow mb-4 flex items-center gap-2">
                  <Languages size={14} /> {t(ui.about.languagesTitle)}
                </p>
                <p className="text-[15px] font-medium text-fg">{t(ui.about.languages)}</p>
                <p className="mt-6 text-sm">SPE — Society of Petroleum Engineers</p>
                <p className="font-mono text-[11px] text-faint">UDESC Student Chapter</p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow mb-5">{t(ui.about.skillsTitle)}</p>
            </Reveal>
            <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
              {skills.map((g, i) => (
                <Reveal key={g.group.en} delay={i * 0.05} y={12} className="bg-bg p-6">
                  <p className="mb-3 text-sm font-semibold">{t(g.group)}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {g.items.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-line px-2 py-1 font-mono text-[11px] text-muted transition-colors hover:border-accent-ink hover:text-fg"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
