import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Check, Database, FileSpreadsheet, LoaderCircle, ShieldCheck } from 'lucide-react';
import { usePrefs } from '../lib/prefs';
import { AppWindow } from './Frames';

// Dados puramente ilustrativos — o projeto real é confidencial.
const series = [32, 34, 33, 38, 41, 40, 46, 49, 47, 53, 58, 57, 62, 66, 64, 71, 75, 79, 78, 84];

const steps = [
  { icon: Database, pt: 'Ingestão de arquivos de recebíveis', en: 'Receivables file ingestion' },
  { icon: ShieldCheck, pt: 'Validação de lastro e elegibilidade', en: 'Collateral & eligibility checks' },
  { icon: FileSpreadsheet, pt: 'Cálculo de cota e indicadores', en: 'NAV & covenant calculation' },
  { icon: FileSpreadsheet, pt: 'Relatório diário para administradora', en: 'Daily report to administrator' },
];

function path(values: number[], w: number, h: number) {
  const max = Math.max(...values) * 1.1;
  const step = w / (values.length - 1);
  return values.map((v, i) => `${i ? 'L' : 'M'}${(i * step).toFixed(1)},${(h - (v / max) * h).toFixed(1)}`).join(' ');
}

export function FundDashboard() {
  const { lang } = usePrefs();
  const ref = useRef<HTMLDivElement>(null);
  const active = useInView(ref, { margin: '-100px' });
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [done, setDone] = useState(0);

  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => setDone((d) => (d >= steps.length + 2 ? 0 : d + 1)), 1100);
    return () => clearInterval(id);
  }, [active]);

  const W = 520;
  const H = 150;
  const line = path(series, W, H);

  const kpis = [
    { label: lang === 'pt' ? 'Patrimônio líquido' : 'Net assets', value: 'R$ 1••,•M', delta: '+2.4%' },
    { label: lang === 'pt' ? 'Títulos ativos' : 'Active receivables', value: '1•.•••', delta: '+318' },
    { label: lang === 'pt' ? 'Subordinação' : 'Subordination', value: '••,•%', delta: 'OK' },
  ];

  return (
    <div ref={ref}>
      <AppWindow title="fund-ops · dashboard">
        <div className="grid grid-cols-[52px_1fr] text-fg sm:grid-cols-[150px_1fr]">
          <aside className="space-y-1 border-r border-line bg-bg-soft/60 p-2 sm:p-3">
            {['Dashboard', lang === 'pt' ? 'Carteira' : 'Portfolio', 'Pipelines', lang === 'pt' ? 'Relatórios' : 'Reports', 'Audit log'].map(
              (n, i) => (
                <div
                  key={n}
                  className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px] ${i === 0 ? 'bg-fg/8 font-medium' : 'text-muted'}`}
                >
                  <span className={`size-1.5 shrink-0 rounded-full ${i === 0 ? 'bg-[#7dd87a]' : 'bg-fg/20'}`} />
                  <span className="hidden truncate sm:inline">{n}</span>
                </div>
              ),
            )}
          </aside>

          <div className="min-w-0 space-y-3 p-3 sm:p-4">
            <div className="grid grid-cols-3 gap-2">
              {kpis.map((k, i) => (
                <motion.div
                  key={k.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 * i }}
                  className="rounded-lg border border-line bg-bg/50 p-2 sm:p-2.5"
                >
                  <p className="truncate text-[9.5px] text-muted sm:text-[10.5px]">{k.label}</p>
                  <p className="mt-0.5 font-mono text-[12px] font-semibold sm:text-sm">{k.value}</p>
                  <p className="font-mono text-[9.5px] text-[#4caf50]">{k.delta}</p>
                </motion.div>
              ))}
            </div>

            <div className="rounded-lg border border-line bg-bg/50 p-3">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-[11px] font-medium">{lang === 'pt' ? 'Evolução da carteira' : 'Portfolio growth'}</p>
                <div className="flex gap-1 font-mono text-[9px] text-muted">
                  {['1M', '3M', '1Y'].map((p, i) => (
                    <span key={p} className={`rounded px-1.5 py-0.5 ${i === 2 ? 'bg-fg/10 text-fg' : ''}`}>
                      {p}
                    </span>
                  ))}
                </div>
              </div>
              <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full overflow-visible" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="fund-fill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#7dd87a" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#7dd87a" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[0.25, 0.5, 0.75].map((g) => (
                  <line key={g} x1="0" x2={W} y1={H * g} y2={H * g} stroke="currentColor" strokeOpacity="0.07" />
                ))}
                <motion.path
                  d={`${line} L${W},${H} L0,${H} Z`}
                  fill="url(#fund-fill)"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
                <motion.path
                  d={line}
                  fill="none"
                  stroke="#5cc85a"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1.6, ease: 'easeInOut' }}
                />
              </svg>
            </div>

            <div className="rounded-lg border border-line bg-bg/50 p-3">
              <p className="mb-2 flex items-center justify-between text-[11px] font-medium">
                <span>{lang === 'pt' ? 'Rotina diária automatizada' : 'Automated daily routine'}</span>
                <span className="font-mono text-[9.5px] text-muted">06:00 UTC-3</span>
              </p>
              <ul className="space-y-1.5">
                {steps.map((s, i) => {
                  const state = done > i ? 'done' : done === i ? 'run' : 'wait';
                  return (
                    <li key={s.en} className="flex items-center gap-2.5 text-[11px]">
                      <span
                        className={`grid size-4.5 shrink-0 place-items-center rounded-full transition-colors ${
                          state === 'done' ? 'bg-[#5cc85a] text-white' : state === 'run' ? 'text-[#5cc85a]' : 'bg-fg/8 text-faint'
                        }`}
                      >
                        {state === 'done' ? (
                          <Check size={10} strokeWidth={3} />
                        ) : state === 'run' ? (
                          <LoaderCircle size={14} className="animate-spin" />
                        ) : (
                          <s.icon size={9} />
                        )}
                      </span>
                      <span className={`truncate ${state === 'wait' ? 'text-muted' : ''}`}>{s[lang]}</span>
                      <span className="ml-auto font-mono text-[9.5px] text-faint">
                        {state === 'done' ? `${(0.4 + i * 0.7).toFixed(1)}s` : state === 'run' ? '…' : ''}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </AppWindow>
    </div>
  );
}
