import { useEffect, useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import { Check } from 'lucide-react';
import { usePrefs } from '../lib/prefs';

/** Escoamento potencial ao redor de um cilindro, com partículas advectadas e coloridas pela velocidade. */
export function FlowField() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const inView = useInView(canvas, { margin: '0px' });
  const reduced = useReducedMotion();

  useEffect(() => {
    const c = canvas.current;
    if (!c || !inView) return;
    const ctx = c.getContext('2d')!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = c.clientWidth;
    const h = c.clientHeight;
    c.width = w * dpr;
    c.height = h * dpr;
    ctx.scale(dpr, dpr);

    const cx = w * 0.38;
    const cy = h / 2;
    const R = Math.min(w, h) * 0.17;
    const U = 1.4;

    const vel = (x: number, y: number) => {
      const dx = x - cx;
      const dy = y - cy;
      const r2 = dx * dx + dy * dy;
      const r4 = r2 * r2;
      const k = R * R;
      return [U * (1 - (k * (dx * dx - dy * dy)) / r4), -U * ((2 * k * dx * dy) / r4)];
    };

    const spawn = () => ({ x: Math.random() * -40, y: Math.random() * h, age: 0 });
    const ps = Array.from({ length: 420 }, () => ({ ...spawn(), x: Math.random() * w }));

    const color = (s: number) => {
      const t = Math.min(1, Math.max(0, (s - 0.4) / 2.2));
      const hue = 205 - t * 160;
      return `hsl(${hue} 90% ${55 + t * 10}%)`;
    };

    let raf = 0;
    const frame = () => {
      ctx.fillStyle = 'rgba(11, 17, 24, 0.12)';
      ctx.fillRect(0, 0, w, h);
      for (const p of ps) {
        const [u, v] = vel(p.x, p.y);
        const nx = p.x + u;
        const ny = p.y + v;
        ctx.strokeStyle = color(Math.hypot(u, v));
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(nx, ny);
        ctx.stroke();
        p.x = nx;
        p.y = ny;
        p.age++;
        const inside = (p.x - cx) ** 2 + (p.y - cy) ** 2 < R * R;
        if (p.x > w + 10 || p.y < -10 || p.y > h + 10 || inside || p.age > 600) Object.assign(p, spawn());
      }
      ctx.fillStyle = '#1d2a36';
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.25)';
      ctx.stroke();
      if (!reduced) raf = requestAnimationFrame(frame);
    };

    ctx.fillStyle = '#0b1118';
    ctx.fillRect(0, 0, w, h);
    if (reduced) for (let i = 0; i < 160; i++) frame();
    else raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced]);

  return <canvas ref={canvas} className="block h-full w-full bg-[#0b1118]" aria-hidden="true" />;
}

export function FormArt() {
  const { lang } = usePrefs();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const fields = lang === 'pt' ? ['Nome da escola', 'Projeto', 'Orientador(a)'] : ['School name', 'Project', 'Advisor'];

  return (
    <div ref={ref} className="relative grid h-full place-items-center overflow-hidden bg-gradient-to-br from-[#123b6b] via-[#1c5aa0] to-[#2e8bd8] p-6">
      <div className="absolute -top-10 -right-10 size-40 rounded-full bg-white/10 blur-2xl" />
      <div className="w-full max-w-[260px] rounded-xl bg-white p-4 text-[#10233a] shadow-2xl">
        <p className="text-[10px] font-semibold tracking-wider text-[#1c5aa0] uppercase">Missão Cientista · 2026</p>
        <p className="mb-3 text-sm font-semibold">{lang === 'pt' ? 'Inscrição de projeto' : 'Project registration'}</p>
        {fields.map((f, i) => (
          <div key={f} className="mb-2">
            <p className="mb-0.5 text-[9px] text-[#5a6b7d]">{f}</p>
            <div className="h-6 overflow-hidden rounded-md border border-[#dbe4ee] bg-[#f5f8fb] px-2">
              <motion.div
                className="mt-[9px] h-1.5 rounded bg-[#b9c9da]"
                initial={{ width: 0 }}
                animate={inView ? { width: `${70 - i * 15}%` } : {}}
                transition={{ delay: 0.3 + i * 0.35, duration: 0.5 }}
              />
            </div>
          </div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.6 }}
          className="mt-3 flex items-center gap-1.5 rounded-md bg-[#e7f6ec] px-2 py-1.5 text-[10px] font-medium text-[#1d7a3e]"
        >
          <Check size={11} strokeWidth={3} /> {lang === 'pt' ? 'Inscrição confirmada' : 'Registration confirmed'}
        </motion.div>
      </div>
    </div>
  );
}
