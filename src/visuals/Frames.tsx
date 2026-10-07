import type { ReactNode } from 'react';
import { Lock } from 'lucide-react';

export function BrowserFrame({ url, children, className = '' }: { url: string; children: ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-line-strong bg-surface shadow-2xl shadow-black/15 ${className}`}>
      <div className="flex h-9 items-center gap-3 border-b border-line bg-bg-soft px-3.5">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="mx-auto flex h-5.5 max-w-[60%] flex-1 items-center justify-center gap-1.5 rounded-md bg-fg/5 px-3 font-mono text-[10.5px] text-muted">
          <Lock size={9} />
          <span className="truncate">{url}</span>
        </div>
        <div className="w-[46px]" />
      </div>
      {children}
    </div>
  );
}

/** Screenshot de página inteira que rola ao passar o mouse (ou com o dedo no celular). */
export function ScrollShot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="scroll-shot relative aspect-[16/10] overflow-hidden bg-bg-soft">
      <img src={src} alt={alt} loading="lazy" decoding="async" className="absolute inset-x-0 top-0 w-full" />
    </div>
  );
}

export function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full rounded-[30px] border border-line-strong bg-[#0b0b0a] p-[7px] shadow-2xl shadow-black/40">
      <div className="absolute top-[13px] left-1/2 z-10 h-[16px] w-[64px] -translate-x-1/2 rounded-full bg-black" />
      <div className="aspect-[390/844] overflow-hidden rounded-[24px] bg-bg-soft">
        <img src={src} alt={alt} loading="lazy" decoding="async" className="h-full w-full object-cover object-top" />
      </div>
    </div>
  );
}

export function AppWindow({ title, children, className = '' }: { title: string; children: ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-line-strong bg-surface shadow-2xl shadow-black/15 ${className}`}>
      <div className="flex h-9 items-center gap-3 border-b border-line bg-bg-soft px-3.5">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-fg/15" />
          <span className="size-2.5 rounded-full bg-fg/15" />
          <span className="size-2.5 rounded-full bg-fg/15" />
        </div>
        <span className="mx-auto font-mono text-[10.5px] text-muted">{title}</span>
        <div className="w-[46px]" />
      </div>
      {children}
    </div>
  );
}
