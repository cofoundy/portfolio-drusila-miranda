# CLAUDE.md — Premium Starter Template

## Overview

Premium portfolio template with a custom design system. Built on the same Astro + Tailwind v4 stack as minimal-mono but with significantly more visual polish.

## What makes this "Premium"

1. **6-color palette** in `config.ts` → `colors: { primaryDark, primary, primaryLight, accent, surface, surfaceLight }`
2. **3-font typography** — Montserrat (body), Raleway (headings), Cormorant (accent/serif)
3. **2-column hero** with photo, tagline, CTA button, social icons, stats/trust bar
4. **3-column About** with title | bio | floating pull quote
5. **Timeline Experience** with horizontal numbered dots + 2-column cards
6. **Floating pill nav** — glassmorphism pill that appears on scroll > 400px
7. **Services section** — 3-column card grid with icons (optional)
8. **CTA section** — centered call-to-action with icon (optional)
9. **Colored footer** — uses accentColor as background, inverted social icons
10. **Full animation system** — 4 reveal types (up/left/right/scale), stagger delays, shimmer bars, timeline draw, quote float, micro-interactions

## Config Extensions (vs minimal-mono)

```ts
// These fields are NEW in premium-starter:
colors: { primaryDark, primary, primaryLight, accent, surface, surfaceLight }
tagline: string           // Hero subtitle / value prop
stats: { value, label }[] // Trust bar (3 items)
quote: { text, author }   // Pull quote in About section
services: { icon, title, description, items }[]  // Optional
cta: { title, description, buttonText, emailSubject }  // Optional
```

## Available Service Icons

`code`, `mobile`, `cloud`, `building`, `user`, `academic`, `chart`, `shield`, `heart`, `chat`, `star`

## CSS Classes Reference

| Class | Effect |
|-------|--------|
| `.reveal` | Fade up on scroll |
| `.reveal-left` | Slide from left on scroll |
| `.reveal-right` | Slide from right on scroll |
| `.reveal-scale` | Scale up on scroll |
| `.stagger-1` to `.stagger-6` | Delay 100ms–600ms |
| `.card-hover` | Lift + shadow on hover |
| `.btn-hover` | Scale + glow on hover |
| `.icon-hover` | Scale + rotate on hover |
| `.skill-hover` | Scale on hover |
| `.link-underline` | Animated underline on hover |
| `.bar-shimmer` | Gradient shimmer animation |
| `.quote-float` | Gentle float animation |
| `.project-card` | Shine sweep on hover |
| `.hero-*` | Staggered hero entrance animations |

## BrandIcon Component (DO NOT DELETE)

`src/components/BrandIcon.astro` — auto-discovers icons from `public/icons/`.

```astro
import BrandIcon from "./BrandIcon.astro";
<BrandIcon name="Python" size={14} />  <!-- finds public/icons/python.svg -->
<BrandIcon name="BBVA" size={20} />    <!-- finds public/icons/bbva.svg -->
<BrandIcon name="Unknown" />           <!-- fallback: "UN" text badge -->
```

Icons are populated by `~/cofoundy/packages/icons/copy-icons.sh`. SVG and PNG supported. No hardcoded map — if the file exists in `public/icons/`, BrandIcon renders it.

When deleting template components for Premium builds, **keep BrandIcon.astro**.

## Customization Checklist

When using this template for a new client:

1. **config.ts**: Replace ALL placeholder data
2. **colors**: Choose 6-color palette based on client's brand/industry
3. **Run `copy-icons.sh`**: `~/cofoundy/packages/icons/copy-icons.sh .` to populate public/icons/
4. **public/profile.jpg**: Client's professional photo
5. **public/favicon.svg**: Client's initials with brand color
6. **astro.config.mjs**: Set `site: 'https://name.cofoundy.dev'` (no `base` needed — we use subdomains)
7. **Remove unused sections**: Delete `services`/`cta` from config if not needed
