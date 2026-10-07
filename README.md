# Mauricio Duailibi Neto — Portfolio

Portfólio pessoal bilíngue (PT/EN) feito com **Vite + React + TypeScript**, **Tailwind CSS v4** e **Motion**.

## Rodando

```bash
pnpm install
pnpm dev       # http://localhost:5173
pnpm build     # gera dist/
pnpm preview   # serve o build
```

## Idioma e tema

- O idioma é detectado automaticamente pelo navegador (`pt*` → Português, demais → Inglês).
- A escolha manual fica salva no `localStorage`; `?lang=pt` ou `?lang=en` força um idioma no link.
- O tema segue o sistema (claro/escuro) e também pode ser alternado no menu.

## Conteúdo

Todo o texto, projetos, experiências e skills ficam em [`src/content.ts`](src/content.ts), com cada string em `{ pt, en }`.
Screenshots dos projetos ficam em `public/projects/` e o currículo em `public/cv/`.

## Analytics

Defina `VITE_GTM_ID` (ex.: `GTM-XXXXXXX`) no ambiente de build (Vercel → Settings → Environment Variables) para carregar o Google Tag Manager.
Sem a variável, nenhum script de terceiros é carregado.
