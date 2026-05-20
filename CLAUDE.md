# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server with HMR
npm run build      # tsc -b && vite build
npm run lint       # ESLint over the project
npm run preview    # Preview production build locally
```

No test runner is configured.

## Architecture

React 19 + TypeScript + Vite SPA for "That's Very ADHD" — an ADHD coaching/consultation service. Uses React Router v7, Tailwind CSS v4, and i18next.

### Entry & Routing

`src/main.tsx` wraps the app in `ThemeProvider` and `LocationProvider`. `src/App.tsx` defines the route tree (React Router v7) and injects a scroll-to-top effect on navigation. All routes share the `Layout` wrapper (Navbar + Footer).

### Two Cross-Cutting Contexts

**`ThemeContext`** — light/dark mode, persisted in `localStorage`, toggled via CSS class on `<html>`.

**`LocationContext`** — detects the user's region (SPAIN / EU / GLOBAL) by fetching `https://www.cloudflare.com/cdn-cgi/trace`. Also auto-selects language (ES → Spanish, FR → French) and stores the preference in `localStorage`. Pricing in `PricingCard` and other components reads `UserLocation` from this context.

### i18n

`src/i18n.ts` configures i18next with the browser language detector and HTTP backend loading from `/public/locales/{lng}/translation.json`. Supported languages: `en`, `es`, `fr`. Helper scripts in the repo root (`update_translations*.cjs`) automate keeping translation files in sync.

### Component Patterns

- **`Button.tsx`** — polymorphic; accepts `as="a" | typeof Link` for routing vs. anchor use cases. Three variants: `primary`, `secondary`, `outline`.
- **`PricingCard.tsx`** — reads `UserLocation` context to display region-appropriate pricing.
- **`CalendlyWidget.tsx`** — embeds the Calendly inline widget; used on service pages.
- **`SectionBlock.tsx`** — layout primitive for page sections with optional background color.

### Styling

Tailwind CSS v4 configured in `src/index.css`. Custom design tokens:
- Primary: `#34BBB4` (teal), variant `#2A9691`
- Light mode: bg `#f0eee9`, text `#4a3f36`
- Dark mode inverts bg/text; toggled via `.dark` class on `<html>`
- Font: Lexend (loaded via Google Fonts), weights 100–900
