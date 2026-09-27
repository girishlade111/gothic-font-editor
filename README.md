# Gothic Font Editor

A live gothic-font playground: type any text, pick a gothic typeface, and drag a slider to
resize it — rendered instantly in a dark, medieval-styled preview panel. Built with
Next.js, React, and Tailwind CSS.

## What it does

A simple text-styling tool. Enter a name or phrase, choose between the gothic fonts
**UnifrakturMaguntia** (blackletter) and **Cinzel** (classical Roman caps), and adjust the
font size with a slider — the preview updates live.

## Features

- **Live text preview** — type anything, see it rendered in gothic type immediately
- **Two gothic fonts** — UnifrakturMaguntia (blackletter) and Cinzel, loaded via
  `next/font/google` (self-hosted at build, no runtime Google Fonts request)
- **Font-size slider** — smooth size control from small to display-size
- **Dark medieval UI** — slate panel, centered preview stage, shadcn/ui-style controls

## Tech stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v3** + `tailwindcss-animate`
- **Radix UI** primitives (`@radix-ui/react-label`, `react-select`, `react-slider`)
  via shadcn/ui-style `components/ui`
- **next/font/google** — Cinzel + UnifrakturMaguntia
- **lucide-react** icons

## Quick start

```bash
# Install dependencies (npm or pnpm)
npm install

# Run the dev server
npm run dev

# Open http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Project structure

```
gothic-font-editor/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # FontEditor: text input, font select, size slider, preview
│   └── globals.css         # Tailwind + font variables
├── components/
│   ├── theme-provider.tsx   # next-themes wrapper
│   └── ui/                  # input, label, select, slider
├── lib/
│   └── utils.ts             # cn() class helper
├── public/                  # Static assets
├── next.config.mjs
├── components.json          # shadcn/ui config
└── tailwind.config.ts
```

## Environment variables

None — the app is fully client-side and needs no secrets or API keys.

## Deployment

The app has no API routes, server actions, or server-side data fetching, so it can be
**statically exported** and hosted anywhere static files work (GitHub Pages, Cloudflare
Pages, Netlify, Vercel).

Static export is enabled in `next.config.mjs` via `output: "export"` with
`basePath: "/gothic-font-editor"` for the GitHub Pages subpath.

Live demo: https://girishlade111.github.io/gothic-font-editor/

> Note: `basePath` is only needed for the GitHub Pages subpath. If you deploy to a root
> domain (e.g. on Vercel or Cloudflare Pages), remove the `basePath` line from
> `next.config.mjs` and rebuild.

---

Built by Girish Lade · https://ladestack.in
