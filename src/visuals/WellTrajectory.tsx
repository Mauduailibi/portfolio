import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { usePrefs } from '../lib/prefs';
import { AppWindow } from './Frames';

const layers = [
  { y: 70, c: '#c9b48a' },
  { y: 130, c: '#a8946d' },
  { y: 195, c: '#8a8f7a' },
  { y: 255, c: '#6f7f8c' },
  { y: 315, c: '#5b6b7a' },
];

// Trajetória: vertical → ganho de ângulo (build) → trecho tangente até o alvo.
const optimal = 'M80,24 L80,110 C80,190 150,240 250,268 L410,300';
const planned = 'M80,24 L80,150 C80,230 170,262 300,282 L410,300';

export function WellTrajectory() {
  const { lang } = usePrefs();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const params = [
    { k: 'KOP', v: '1 120 m' },
    { k: lang === 'pt' ? 'Taxa de build' : 'Build rate', v: '3.0°/30 m' },
    { k: lang === 'pt' ? 'Inclinação' : 'Inclination', v: '62.4°' },
    { k: 'MD', v: '3 486 m' },
  ];
  const results = [
    { k: lang === 'pt' ? 'Força' : 'Drag', v: -14 },
    { k: 'Torque', v: -18 },
    { k: lang === 'pt' ? 'Tempo de broca' : 'Bit time', v: -9 },
  ];

  return (
    <div ref={ref}>
      <AppWindow title="Drilling Software — Minimization">
        <div className="grid sm:grid-cols-[1fr_170px]">
          <div className="relative overflow-hidden bg-[#0f1820] text-white">
            <svg viewBox="0 0 460 340" className="block h-auto w-full">
              <defs>
                <pattern id="well-dots" width="10" height="10" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="0.6" fill="white" opacity="0.08" />
                </pattern>
              </defs>
              <rect width="460" height="24" fill="#16222c" />
              {layers.map((l, i) => {
                const prev = i ? layers[i - 1].y : 24;
                return (
                  <motion.path
                    key={l.y}
                    d={`M0,${prev} Q115,${prev + (i % 2 ? 10 : -8)} 230,${prev} T460,${prev} L460,${l.y} Q345,${l.y + (i % 2 ? -8 : 10)} 230,${l.y} T0,${l.y} Z`}
                    fill={l.c}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 0.22 + i * 0.05 } : {}}
                    transition={{ delay: i * 0.08 }}
                  />
                );
              })}
              <rect y="24" width="460" height="316" fill="url(#well-dots)" />

              <motion.ellipse
                cx="410"
                cy="300"
                rx="34"
                ry="14"
                fill="#4fb3ff"
                fillOpacity="0.15"
                stroke="#4fb3ff"
                strokeDasharray="3 3"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={inView ? { scale: [1, 1.12, 1], opacity: 1 } : {}}
                transition={{ scale: { repeat: Infinity, duration: 2.4 }, opacity: { delay: 0.3 } }}
                style={{ transformOrigin: '410px 300px' }}
              />
              <text x="410" y="328" textAnchor="middle" fontSize="9" fill="#9fd4ff" fontFamily="var(--font-mono)">
                {lang === 'pt' ? 'ALVO' : 'TARGET'}
              </text>

              <motion.path
                d={planned}
                fill="none"
                stroke="white"
                strokeOpacity="0.35"
                strokeWidth="1.5"
                strokeDasharray="4 5"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.4, ease: 'easeInOut' }}
              />
              <motion.path
                d={optimal}
                fill="none"
                stroke="#4fb3ff"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 2.2, delay: 0.9, ease: 'easeInOut' }}
              />
              {inView && (
                <motion.circle
                  r="5"
                  fill="#fff"
                  stroke="#4fb3ff"
                  strokeWidth="2"
                  style={{ offsetPath: `path('${optimal}')`, offsetRotate: '0deg' }}
                  initial={{ offsetDistance: '0%' }}
                  animate={{ offsetDistance: '100%' }}
                  transition={{ duration: 2.2, delay: 0.9, ease: 'easeInOut' }}
                />
              )}

              <rect x="70" y="14" width="20" height="10" rx="2" fill="#e8eef3" />
              <text x="96" y="22" fontSize="9" fill="#cfe3f2" fontFamily="var(--font-mono)">
                {lang === 'pt' ? 'cabeça do poço' : 'wellhead'}
              </text>

              <g fontFamily="var(--font-mono)" fontSize="8.5">
                <line x1="300" y1="44" x2="318" y2="44" stroke="#4fb3ff" strokeWidth="2.5" />
                <text x="324" y="47" fill="#cfe3f2">
                  {lang === 'pt' ? 'otimizada' : 'optimized'}
                </text>
                <line x1="300" y1="60" x2="318" y2="60" stroke="white" strokeOpacity="0.4" strokeDasharray="3 3" />
                <text x="324" y="63" fill="#cfe3f2" opacity="0.7">
                  {lang === 'pt' ? 'planejada' : 'planned'}
                </text>
              </g>
            </svg>
          </div>

          <div className="space-y-4 border-t border-line p-4 sm:border-t-0 sm:border-l">
            <div>
              <p className="eyebrow mb-2 !text-[10px]">{lang === 'pt' ? 'Parâmetros' : 'Parameters'}</p>
              <dl className="grid grid-cols-2 gap-x-3 gap-y-2 sm:grid-cols-1">
                {params.map((p) => (
                  <div key={p.k} className="flex items-baseline justify-between gap-2 text-[11px]">
                    <dt className="text-muted">{p.k}</dt>
                    <dd className="font-mono">{p.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <p className="eyebrow mb-2 !text-[10px]">{lang === 'pt' ? 'Resultado' : 'Result'}</p>
              <div className="space-y-2">
                {results.map((r, i) => (
                  <div key={r.k}>
                    <div className="mb-1 flex justify-between text-[11px]">
                      <span className="text-muted">{r.k}</span>
                      <span className="font-mono text-[#2b8fd6] dark:text-[#4fb3ff]">{r.v}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-fg/8">
                      <motion.div
                        className="h-full rounded-full bg-[#4fb3ff]"
                        initial={{ width: '100%' }}
                        animate={inView ? { width: `${100 + r.v}%` } : {}}
                        transition={{ delay: 2.4 + i * 0.15, duration: 0.8 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="font-mono text-[9.5px] text-faint">pytest · golden tests ✓</p>
          </div>
        </div>
      </AppWindow>
    </div>
  );
}
