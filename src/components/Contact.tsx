import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUp, ArrowUpRight, Check, Copy, Download, Mail } from 'lucide-react';
import { links, ui } from '../content';
import { usePrefs } from '../lib/prefs';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './BrandIcons';
import { Reveal } from './Reveal';

const YEAR = new Date().getFullYear();

export function Contact() {
  const { t } = usePrefs();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      location.href = `mailto:${links.email}`;
    }
  };

  const channels = [
    { label: 'WhatsApp', sub: links.phone, href: links.whatsapp, Icon: WhatsappIcon },
    { label: 'LinkedIn', sub: 'in/mauricio-duailibi-neto', href: links.linkedin, Icon: LinkedinIcon },
    { label: 'GitHub', sub: '@Mauduailibi', href: links.github, Icon: GithubIcon },
  ];

  return (
    <section id="contact" className="relative overflow-hidden border-t border-line py-24 md:py-36">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-70" />
      <div className="container-x relative">
        <Reveal>
          <p className="eyebrow mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-accent-ink" />
            {t(ui.contact.eyebrow)}
          </p>
          <h2 className="max-w-4xl text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] font-semibold tracking-[-0.035em]">
            {t(ui.contact.title)}
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted">{t(ui.contact.sub)}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={`mailto:${links.email}`}
            className="group inline-flex min-h-16 items-center gap-3 rounded-full bg-accent px-7 text-lg font-medium text-on-accent transition-transform hover:scale-[1.02] md:text-2xl"
          >
            <Mail size={22} />
            <span className="break-all">{links.email}</span>
            <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <button
            type="button"
            onClick={copy}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line-strong px-5 text-sm font-medium transition-colors hover:bg-fg hover:text-bg"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={copied ? 'y' : 'n'}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="inline-flex items-center gap-2"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {t(copied ? ui.contact.copied : ui.contact.copy)}
              </motion.span>
            </AnimatePresence>
          </button>
        </Reveal>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={0.05 * i}>
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-line bg-surface/70 p-5 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-line-strong"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-fg/5 transition-colors group-hover:bg-accent group-hover:text-on-accent">
                  <c.Icon className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-medium">{c.label}</span>
                  <span className="block truncate font-mono text-[11px] text-muted">{c.sub}</span>
                </span>
                <ArrowUpRight size={16} className="ml-auto text-faint transition-colors group-hover:text-fg" />
              </a>
            </Reveal>
          ))}
          <Reveal delay={0.15}>
            <a
              href={links.cv}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-line bg-surface/70 p-5 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-line-strong"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-fg/5 transition-colors group-hover:bg-accent group-hover:text-on-accent">
                <Download size={19} />
              </span>
              <span className="min-w-0">
                <span className="block font-medium">CV</span>
                <span className="block truncate font-mono text-[11px] text-muted">{t(ui.contact.cv)}</span>
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = usePrefs();
  return (
    <footer className="border-t border-line py-8">
      <div className="container-x flex flex-col items-start justify-between gap-4 font-mono text-xs text-faint sm:flex-row sm:items-center">
        <p>
          © {YEAR} Mauricio Duailibi Neto · {t(ui.footer.built)}
        </p>
        <a href="#top" className="inline-flex items-center gap-1.5 transition-colors hover:text-fg">
          {t(ui.footer.top)} <ArrowUp size={13} />
        </a>
      </div>
    </footer>
  );
}
