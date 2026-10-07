import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

/** Atraso (s) para as animações de entrada começarem depois da cortina inicial. */
export const INTRO_DELAY = 0.85;

type Phase = 'revealing' | 'covering' | 'idle';

// Do topo para o fundo: o painel de cima é o primeiro a sair e o último a entrar.
const panels = ['bg-accent', 'bg-fg', 'bg-bg-soft'];
const ease = [0.76, 0, 0.24, 1] as const;

export function PageTransition() {
  const reduced = useReducedMotion();
  const [phase, setPhase] = useState<Phase>(reduced ? 'idle' : 'revealing');
  const target = useRef<string | null>(null);

  // Links internos (#secao) viram uma "troca de página": cobre, pula, revela.
  useEffect(() => {
    if (reduced) return;
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element).closest?.('a[href^="#"]');
      const hash = a?.getAttribute('href');
      if (!hash || hash === '#' || !document.querySelector(hash)) return;
      e.preventDefault();
      target.current = hash;
      setPhase('covering');
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [reduced]);

  if (reduced) return null;

  const covering = phase === 'covering';
  const lastIndex = covering ? 0 : panels.length - 1;

  const onDone = () => {
    if (phase === 'covering') {
      const hash = target.current;
      const el = hash ? document.querySelector(hash) : null;
      if (el) {
        el.scrollIntoView({ behavior: 'instant', block: 'start' });
        history.pushState(null, '', hash === '#top' ? location.pathname + location.search : hash);
      }
      setPhase('revealing');
    } else if (phase === 'revealing') {
      setPhase('idle');
    }
  };

  return (
    <div aria-hidden="true" className={`fixed inset-0 z-[100] ${phase === 'idle' ? 'pointer-events-none' : ''}`}>
      {panels.map((bg, i) => (
        <motion.div
          key={bg}
          className={`absolute inset-0 ${bg}`}
          style={{ zIndex: panels.length - i, originX: covering ? 1 : 0 }}
          initial={{ scaleX: 1 }}
          animate={{ scaleX: covering ? 1 : 0 }}
          transition={{
            duration: covering ? 0.55 : 0.7,
            ease,
            delay: covering ? (panels.length - 1 - i) * 0.1 : 0.15 + i * 0.12,
          }}
          onAnimationComplete={i === lastIndex ? onDone : undefined}
        />
      ))}
      <motion.span
        className="absolute inset-0 z-10 grid place-items-center font-mono text-2xl font-semibold tracking-[0.2em] text-on-accent"
        initial={{ opacity: 1 }}
        animate={{ opacity: covering ? 1 : 0 }}
        transition={{ duration: 0.2, delay: covering ? 0.35 : 0.05 }}
      >
        MDN
      </motion.span>
    </div>
  );
}
