# Veltrax Website

Marketing website for **Veltrax** — AI-enabled decision infrastructure for capital providers.

## Tech Stack

- [Astro](https://astro.build) 5.x with React components
- [Tailwind CSS](https://tailwindcss.com) 4.x (oatmeal-mist theme from TailwindPlus)
- [TailwindPlus Elements](https://tailwindcss.com/plus/ui-blocks/documentation/elements) for interactive components
- Static output, deployed to Cloudflare Pages

## Getting Started

```bash
yarn install
yarn dev
```

Dev server runs at [http://localhost:4321](http://localhost:4321).

## Scripts

| Command | Description |
| --- | --- |
| `yarn dev` | Start development server |
| `yarn build` | Build for production |
| `yarn preview` | Preview production build |
| `yarn type-check` | Run TypeScript type checking |
| `yarn lint` | Lint with ESLint |
| `yarn format` | Format with Prettier |
| `yarn test` | Run tests |

## Project Structure

```
src/
├── components/
│   ├── elements/      # Base UI components (button, link, container, etc.)
│   ├── icons/         # SVG icon components
│   ├── sections/      # Page section components (hero, features, footer, etc.)
│   └── pages/         # Page content components & shared layout parts (Navbar, Footer)
├── layouts/
│   └── Layout.astro   # Main HTML layout
├── pages/             # Astro page routes
│   ├── index.astro
│   ├── about.astro
│   ├── privacy-policy.astro
│   ├── 404.astro
│   └── services/
│       └── meridian.astro
└── styles/
    └── global.css      # Tailwind config & theme (mist palette, fonts)
```

## Pages

- `/` — Home
- `/about` — About Veltrax
- `/services/meridian` — Meridian: AI-Assisted Credit Memo Intelligence
- `/privacy-policy` — Privacy Policy

## License

Proprietary. The TailwindPlus theme components are licensed under the [Tailwind Plus license](https://tailwindcss.com/plus/license).
