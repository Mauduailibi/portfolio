import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, animate, motion, useInView } from 'motion/react';
import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react';
import { links, ui, type HeroSegment } from '../content';
import { usePrefs } from '../lib/prefs';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './BrandIcons';
import { INTRO_DELAY } from './PageTransition';

const ease = [0.22, 1, 0.36, 1] as const;
const D = INTRO_DELAY;

function Counter({ to, from = 0, prefix = '', suffix = '' }: { to: number; from?: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(from);
  useEffect(() => {
    if (!inView) return;
    const c = animate(from, to, { duration: 1.6, delay: D, ease: 'easeOut', onUpdate: (x) => setV(Math.round(x)) });
    return () => c.stop();
  }, [inView, from, to]);
  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {v}
      {suffix}
    </span>
  );
}

function LocalClock() {
  const fmt = () =>
    new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', timeZone: 'America/Sao_Paulo' });
  const [time, setTime] = useState(fmt);
  useEffect(() => {
    const id = setInterval(() => setTime(fmt()), 20_000);
    return () => clearInterval(id);
  }, []);
  return <span className="tabular-nums">{time} BRT</span>;
}

/** Foto redonda com anel de texto girando ao redor (homenagem ao site antigo). */
function Portrait() {
  const { t } = usePrefs();
  const ring = t(ui.hero.ring).repeat(2);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1, delay: D, ease }}
      className="relative size-[240px] shrink-0 sm:size-[300px] lg:size-[340px]"
    >
      <svg viewBox="0 0 200 200" className="absolute inset-0 size-full animate-spin-slow text-muted" aria-hidden="true">
        <defs>
          <path id="ring-path" d="M100,100 m-88,0 a88,88 0 1,1 176,0 a88,88 0 1,1 -176,0" />
        </defs>
        <text fontFamily="var(--font-mono)" fontSize="8.2" letterSpacing="2.2" fill="currentColor">
          <textPath href="#ring-path" textLength="548">
            {ring}
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-[14%] overflow-hidden rounded-full border border-line-strong bg-surface shadow-2xl shadow-black/25">
        <img
          src="/profile.webp"
          alt="Mauricio Duailibi Neto"
          width={640}
          height={640}
          fetchPriority="high"
          className="size-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
    </motion.div>
  );
}

const previews: Record<'fund' | 'saas' | 'sci', { href: string; label: string }> = {
  fund: { href: '#work', label: 'FIDC Operations Platform' },
  saas: { href: '#work', label: 'Didbox · Terapizi · DietSystem' },
  sci: { href: '#work', label: 'Drilling Software · CFD' },
};

function PreviewArt({ k }: { k: 'fund' | 'saas' | 'sci' }) {
  if (k === 'saas') return <img src="/projects/didbox.webp" alt="" className="h-full w-full object-cover object-top" />;
  if (k === 'fund')
    return (
      <svg viewBox="0 0 200 110" className="h-full w-full bg-[#0f1a12]">
        <path d="M0,90 L20,84 L40,86 L60,72 L80,66 L100,68 L120,52 L140,44 L160,40 L180,26 L200,18 L200,110 L0,110Z" fill="#7dd87a" opacity=".2" />
        <path d="M0,90 L20,84 L40,86 L60,72 L80,66 L100,68 L120,52 L140,44 L160,40 L180,26 L200,18" fill="none" stroke="#7dd87a" strokeWidth="2.5" />
      </svg>
    );
  return (
    <svg viewBox="0 0 200 110" className="h-full w-full bg-[#0f1820]">
      {[25, 45, 65, 85].map((y, i) => (
        <rect key={y} y={y} width="200" height="20" fill="#6f7f8c" opacity={0.15 + i * 0.07} />
      ))}
      <path d="M40,6 L40,40 C40,70 80,86 130,92 L176,96" fill="none" stroke="#4fb3ff" strokeWidth="3" strokeLinecap="round" />
      <circle cx="176" cy="96" r="7" fill="none" stroke="#4fb3ff" strokeDasharray="2 2" />
    </svg>
  );
}

/** Termo destacado na frase de abertura; mostra uma prévia do projeto ao passar o mouse. */
function Term({ k, text }: { k: 'fund' | 'saas' | 'sci'; text: string }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={previews[k].href}
      onPointerEnter={(e) => e.pointerType === 'mouse' && setHover(true)}
      onPointerLeave={() => setHover(false)}
      className="relative inline-block text-fg underline decoration-accent-ink decoration-2 underline-offset-[6px] transition-colors hover:decoration-[3px]"
    >
      {text}
      <AnimatePresence>
        {hover && (
          <motion.span
            initial={{ opacity: 0, y: -8, scale: 0.92, rotate: -3 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: -2 }}
            exit={{ opacity: 0, y: -6, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-none absolute top-full left-1/2 z-20 mt-3 block w-56 -translate-x-1/2 overflow-hidden rounded-xl border border-line-strong bg-surface shadow-2xl"
          >
            <span className="block aspect-[200/110] overflow-hidden">
              <PreviewArt k={k} />
            </span>
            <span className="block px-3 py-2 font-mono text-[10.5px] text-muted no-underline">{previews[k].label}</span>
          </motion.span>
        )}
      </AnimatePresence>
    </a>
  );
}

function Lead({ segments }: { segments: HeroSegment[] }) {
  return (
    <>
      {segments.map((s, i) => (typeof s === 'string' ? <span key={i}>{s}</span> : <Term key={i} k={s.k} text={s.text} />))}
    </>
  );
}

export function Hero() {
  const { t, lang } = usePrefs();
  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: D + delay, ease },
  });

  return (
    <section id="top" className="relative pt-24 md:pt-28">
      <div className="container-x">
        <motion.div
          {...fade(0)}
          className="flex items-center justify-between gap-4 border-b border-line pb-4 font-mono text-[11px] tracking-wide text-muted uppercase"
        >
          <span className="truncate">
            <span className="hidden sm:inline">Mauricio Duailibi Neto — </span>
            {t(ui.hero.meta)}
          </span>
          <span className="hidden shrink-0 md:inline">
            {ui.hero.location} · <LocalClock />
          </span>
        </motion.div>

        <div className="flex flex-col items-start gap-10 py-14 md:py-20 lg:flex-row lg:items-center lg:gap-16">
          <Portrait />

          <div className="min-w-0 flex-1">
            <h1 className="text-[clamp(2.6rem,6.4vw,5.6rem)] leading-[0.95] font-semibold tracking-[-0.04em]">
              <motion.span {...fade(0.1)} className="block text-muted">
                {t(ui.hero.greeting)}
              </motion.span>
              <motion.span {...fade(0.2)} className="block">
                Mauricio <span className="font-serif font-normal italic">Duailibi</span> Neto.
              </motion.span>
            </h1>

            <motion.p
              {...fade(0.35)}
              className="mt-8 max-w-2xl text-[clamp(1.2rem,2vw,1.6rem)] leading-[1.45] tracking-tight text-muted text-pretty"
            >
              <Lead segments={ui.hero.lead[lang]} />
            </motion.p>

            <motion.div {...fade(0.5)} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 text-[15px] font-medium">
              <a
                href="#work"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-fg px-6 text-bg transition-transform hover:scale-[1.03]"
              >
                {t(ui.hero.ctaWork)}
                <ArrowDown size={17} className="transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href={links.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 hover:underline"
              >
                <WhatsappIcon className="size-5 text-[#25d366]" />
                WhatsApp · {links.phone}
                <ArrowUpRight size={16} className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <span className="flex items-center gap-4 text-muted">
                <a href={`mailto:${links.email}`} aria-label={`E-mail: ${links.email}`} title={links.email} className="transition-colors hover:text-fg">
                  <Mail className="size-5" />
                </a>
                <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-fg">
                  <GithubIcon className="size-5" />
                </a>
                <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-fg">
                  <LinkedinIcon className="size-5" />
                </a>
              </span>
            </motion.div>
          </div>
        </div>

        <motion.dl {...fade(0.65)} className="grid gap-px border-y border-line text-[15px] md:grid-cols-[1fr_auto]">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-4">
            <dt className="flex w-16 items-center gap-2 font-mono text-[11px] text-muted uppercase">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-ink opacity-50" />
                <span className="relative inline-flex size-2 rounded-full bg-accent-ink" />
              </span>
              {t(ui.hero.nowLabel)}
            </dt>
            <dd>
              {t(ui.hero.now)} <span className="text-muted">— Lysa Tech &amp; Ketos</span>
            </dd>
          </div>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-t border-line py-4 md:border-t-0">
            <dt className="w-16 font-mono text-[11px] text-muted uppercase md:w-auto">{t(ui.hero.beforeLabel)}</dt>
            <dd className="text-muted">{ui.hero.before}</dd>
          </div>
        </motion.dl>

        <div className="grid grid-cols-2 md:grid-cols-4">
          {ui.stats.map((s, i) => (
            <motion.div
              key={i}
              {...fade(0.75 + i * 0.06)}
              className={`py-7 md:py-9 ${i % 2 ? 'pl-5' : ''} ${i > 0 ? 'md:pl-8' : ''} ${
                i % 2 ? 'border-l border-line' : ''
              } ${i === 2 ? 'md:border-l md:border-line' : ''} ${i > 1 ? 'border-t border-line md:border-t-0' : ''}`}
            >
              <p className="text-[clamp(1.75rem,6vw,2.75rem)] font-semibold tracking-tight whitespace-nowrap">
                <Counter to={s.value} from={'from' in s ? s.from : 0} prefix={'prefix' in s ? s.prefix : ''} suffix={s.suffix} />
              </p>
              <p className="mt-1.5 max-w-[210px] text-sm text-muted">{t(s.label)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
