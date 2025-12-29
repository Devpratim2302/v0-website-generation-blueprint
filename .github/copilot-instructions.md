# AI Coding Agent Guide

This repo is a Next.js App Router site generated via v0.app and deployed on Vercel. It uses React 19, Next 16, Tailwind CSS v4, shadcn-style UI primitives, and Radix UI. Use this as a working playbook to make accurate, idiomatic changes quickly.

## Architecture
- App Router layout: the HTML shell lives in [app/layout.tsx](../app/layout.tsx); the home page composes sections in [app/page.tsx](../app/page.tsx).
- Components are split by section under [components/](../components) and small UI primitives under [components/ui/](../components/ui). Sections include `Header`, `Hero`, `Clients`, `Process`, `Portfolio`, `Testimonials`, `FAQ`, `ContactForm`, `Footer`.
- Client vs Server: components that use hooks/events start with `"use client"` (e.g. [components/header.tsx](../components/header.tsx), [components/clients.tsx](../components/clients.tsx), [components/contact-form.tsx](../components/contact-form.tsx)). Everything else can remain server by default.
- Styling is Tailwind v4 with CSS variables and the `@theme` block defined in [app/globals.css](../app/globals.css). No tailwind.config file is used; PostCSS loads Tailwind via [postcss.config.mjs](../postcss.config.mjs).
- Path alias `@/*` maps to the repo root (see [tsconfig.json](../tsconfig.json)); utilities live in [lib/utils.ts](../lib/utils.ts) with `cn()` for class merging.

## UI & Styling Patterns
- Buttons/cards use shadcn-style primitives in [components/ui](../components/ui) and rely on `cn()` and `class-variance-authority` for variants (see [components/ui/button.tsx](../components/ui/button.tsx), [components/ui/card.tsx](../components/ui/card.tsx)).
- Theme tokens are CSS custom properties (e.g., `--primary`, `--background`) with dark mode variant via `.dark`. Prefer using Tailwind color tokens like `bg-primary`, `text-foreground` rather than hard-coded colors.
- Animations: custom keyframes and utility classes (e.g., `.animate-fade-in-up`) are declared in [app/globals.css](../app/globals.css).
- Assets live in [public/](../public). Refer with `/path` (e.g., video in [components/hero.tsx](../components/hero.tsx)).

## Navigation & Sections
- The header links scroll to in-page anchors (see `href="#clients"` in [components/header.tsx](../components/header.tsx)). Ensure destination sections include matching `id` attributes (e.g., [components/clients.tsx](../components/clients.tsx) sets `id="clients"`; mirror this for new sections).
- Home composition order is defined in [app/page.tsx](../app/page.tsx). Add, remove, or reorder sections here.

## Development Workflow
- Scripts (prefer pnpm due to lockfile):
  - Dev: `pnpm dev`
  - Build: `pnpm build`
  - Start (prod): `pnpm start`
  - Lint: `pnpm lint`
- Build characteristics: Next is configured to `ignoreBuildErrors` (see [next.config.mjs](../next.config.mjs)), so don’t block on type-only errors if runtime is correct.
- Images are `unoptimized: true`; use standard `<img>` or Next Image if desired, but optimization is off by default.

## Conventions
- Keep new interactive components as client components (`"use client"`) and import UI primitives from [components/ui](../components/ui).
- Use `cn()` for className composition and Tailwind utility-first styling; avoid inline styles except for one-off cases.
- Maintain consistent spacing and container patterns: sections typically use `py-*`, `container mx-auto px-4 lg:px-8`.
- Prefer composing with existing primitives over adding new libraries. Radix UI is available; many packages are listed but only a subset is currently used.

## When Adding Features
- New section: create a component in [components/](../components), export a named component, set an `id` if it’s linkable, then add it to [app/page.tsx](../app/page.tsx).
- New UI primitive: add to [components/ui/](../components/ui) and follow the `data-slot` and variant patterns.
- Theming: extend tokens in [app/globals.css](../app/globals.css) (both `:root` and `.dark`), then consume via Tailwind tokens.
- Forms: follow the pattern in [components/contact-form.tsx](../components/contact-form.tsx); `react-hook-form` and `zod` are available if you need validation, though not wired yet.

## Integrations
- Vercel Analytics is initialized in [app/layout.tsx](../app/layout.tsx) via `@vercel/analytics/next`.
- `next-themes` wrapper is available as [components/theme-provider.tsx](../components/theme-provider.tsx); wrap layouts/pages if you introduce theme switching.

## Gotchas
- Two global styles exist; only [app/globals.css](../app/globals.css) is imported by the app shell. Prefer editing this file over [styles/globals.css](../styles/globals.css).
- Path alias `@/*` may resolve broadly; be explicit with paths for clarity (e.g., `@/components/...`, `@/lib/utils`).
- Public assets must exist under [public/](../public) to be referenced with `/...` URLs.
