// Google Tag Manager — só carrega se VITE_GTM_ID estiver definido no ambiente.
export function initAnalytics() {
  const id = import.meta.env.VITE_GTM_ID as string | undefined;
  if (!id || import.meta.env.DEV) return;
  const w = window as unknown as { dataLayer: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(s);
}
