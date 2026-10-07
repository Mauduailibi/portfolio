import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { ui, type Lang } from '../content';
import { usePrefs } from '../lib/prefs';

const items = [
  { href: '#work', label: ui.nav.work },
  { href: '#experience', label: ui.nav.experience },
  { href: '#about', label: ui.nav.about },
];

function LangSwitch() {
  const { lang, setLang, t } = usePrefs();
  return (
    <div
      role="group"
      aria-label={t(ui.lang)}
      className="relative flex h-9 items-center rounded-full border border-line bg-surface/60 p-0.5 font-mono text-[11px]"
    >
      {(['pt', 'en'] as Lang[]).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`relative z-10 h-full rounded-full px-2.5 uppercase transition-colors ${
            lang === l ? 'text-on-accent' : 'text-muted hover:text-fg'
          }`}
        >
          {lang === l && (
            <motion.span
              layoutId="lang-pill"
              className="absolute inset-0 -z-10 rounded-full bg-accent"
              transition={{ type: 'spring', stiffness: 500, damping: 35 }}
            />
          )}
          {l}
        </button>
      ))}
    </div>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme, t } = usePrefs();
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={t(ui.theme)}
      className="grid size-9 place-items-center rounded-full border border-line bg-surface/60 text-muted transition-colors hover:text-fg"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.25 }}
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

export function Nav() {
  const { t } = usePrefs();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled || open ? 'border-b border-line bg-bg/75 backdrop-blur-xl' : 'border-b border-transparent'
        }`}
      >
        <nav className="container-x flex h-16 items-center justify-between gap-4">
          <a href="#top" className="group flex shrink-0 items-center gap-2.5" onClick={() => setOpen(false)}>
            <span className="grid h-8 place-items-center rounded-full bg-fg px-2.5 font-mono text-[12px] font-semibold tracking-wider text-bg transition-colors group-hover:bg-accent group-hover:text-on-accent">
              MDN
            </span>
            <span className="hidden text-sm font-medium tracking-tight whitespace-nowrap sm:block md:hidden lg:block">Mauricio Duailibi Neto</span>
          </a>

          <div className="hidden items-center gap-0.5 md:flex lg:gap-1">
            {items.map((i) => (
              <a
                key={i.href}
                href={i.href}
                className="rounded-full px-3 py-2 text-sm whitespace-nowrap text-muted transition-colors hover:bg-fg/5 hover:text-fg lg:px-3.5"
              >
                {t(i.label)}
              </a>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <LangSwitch />
            <ThemeToggle />
            <a
              href="#contact"
              className="hidden h-9 items-center rounded-full bg-fg px-4 text-sm font-medium text-bg transition-transform hover:scale-[1.03] md:flex"
            >
              {t(ui.nav.contact)}
            </a>
            <button
              type="button"
              className="grid size-9 place-items-center rounded-full border border-line md:hidden"
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </nav>
        <motion.div style={{ scaleX: progress }} className="h-px origin-left bg-accent-ink/70" />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="fixed inset-x-0 top-16 bottom-0 bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <div className="container-x flex flex-col gap-2 pt-8">
              {[...items, { href: '#contact', label: ui.nav.contact }].map((i, idx) => (
                <motion.a
                  key={i.href}
                  href={i.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx }}
                  className="border-b border-line py-4 text-3xl font-semibold tracking-tight"
                >
                  {t(i.label)}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
