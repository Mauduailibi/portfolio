import { motion, type HTMLMotionProps } from 'motion/react';

type Props = HTMLMotionProps<'div'> & { delay?: number; y?: number };

export function Reveal({ delay = 0, y = 24, children, ...rest }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <Reveal className="mb-12 max-w-3xl md:mb-16">
      <p className="eyebrow mb-4 flex items-center gap-3">
        <span className="h-px w-8 bg-accent-ink" />
        {eyebrow}
      </p>
      <h2 className="text-4xl font-semibold tracking-tight text-balance md:text-6xl">{title}</h2>
      {sub && <p className="mt-5 max-w-2xl text-lg text-muted text-pretty">{sub}</p>}
    </Reveal>
  );
}
