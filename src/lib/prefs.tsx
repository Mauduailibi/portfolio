import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';
import type { L, Lang } from '../content';

type Theme = 'light' | 'dark';

type Prefs = {
  lang: Lang;
  theme: Theme;
  setLang: (l: Lang) => void;
  toggleTheme: () => void;
  t: (v: L | string) => string;
};

const PrefsContext = createContext<Prefs | null>(null);

function store(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // storage indisponível (aba anônima etc.) — segue sem persistir
  }
}

export function PrefsProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => (document.documentElement.dataset.lang === 'pt' ? 'pt' : 'en'));
  const [theme, setTheme] = useState<Theme>(() => (document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'));

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.lang = lang;
    root.lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.title =
      lang === 'pt'
        ? 'Mauricio Duailibi Neto — Engenheiro de Software Full-Stack'
        : 'Mauricio Duailibi Neto — Full-Stack Software Engineer';
  }, [lang]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0c0c0b' : '#f6f5f0');
  }, [theme]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    store('lang', l);
    const url = new URL(location.href);
    if (url.searchParams.has('lang')) {
      url.searchParams.set('lang', l);
      history.replaceState(null, '', url);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      store('theme', next);
      return next;
    });
  }, []);

  const t = useCallback((v: L | string) => (typeof v === 'string' ? v : v[lang]), [lang]);

  return (
    <PrefsContext.Provider value={{ lang, theme, setLang, toggleTheme, t }}>{children}</PrefsContext.Provider>
  );
}

export function usePrefs() {
  const ctx = useContext(PrefsContext);
  if (!ctx) throw new Error('usePrefs must be used inside PrefsProvider');
  return ctx;
}
