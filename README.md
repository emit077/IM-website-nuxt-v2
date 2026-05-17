# Indian Mentors — Premium Landing Page

A modern, premium, conversion-focused landing page hero for **Indian Mentors**, India's verified tutor platform connecting parents and students with background-checked home and online tutors.

Built with **Nuxt 3 + Vue 3 + Tailwind CSS + Vue Motion (`@vueuse/motion`)**.

---

## Highlights

- Split-screen hero: persuasive content on the left, animated visual on the right
- Verified badge, gradient headline, dual CTAs, trust chips, stats grid
- Glassmorphism floating cards (Verified Tutor, 4.9 Rating, 5,000+ Tutors, Online + Home)
- Parallax student image, animated mesh blobs, soft radial glow
- Staggered fade-up entrance animations via Vue Motion
- Fully responsive (mobile → tablet → desktop)
- SEO-ready (`useSeoMeta`, OG tags, semantic HTML, lang attr)
- Accessibility: aria labels, focus rings, semantic landmarks, prefers-reduced-motion friendly
- Lazy/optimised imagery via `@nuxt/image`
- Brand tokens: Indigo `#4338CA` · Emerald `#10B981` · Amber `#F59E0B` · Cream `#FCFCFA`

---

## Tech Stack

| Layer        | Tool                                |
| ------------ | ----------------------------------- |
| Framework    | Nuxt 3                              |
| UI           | Vue 3 Composition API + Tailwind CSS|
| Animations   | `@vueuse/motion` (Vue Motion)       |
| Fonts        | Plus Jakarta Sans + Inter (Google)  |
| Images       | `@nuxt/image` (WebP/AVIF, lazy)     |

---

## Getting Started

```bash
# 1. Install dependencies
npm install
# or pnpm install / yarn install

# 2. Run the dev server
npm run dev
# → http://localhost:3000

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

---

## Project Structure

```
indian-mentors/
├── app.vue                     # Root app shell
├── nuxt.config.ts              # Nuxt config (modules, fonts, SEO)
├── tailwind.config.js          # Brand tokens, animations, shadows
├── postcss.config.js
├── assets/
│   └── css/main.css            # Base styles, components, utilities
├── components/
│   ├── AppNavbar.vue           # Sticky responsive navbar
│   ├── HeroSection.vue         # Main hero (left + right)
│   ├── HeroVisual.vue          # Right-side image + floating cards
│   ├── HeroStats.vue           # Stats grid
│   ├── TrustIndicators.vue     # Trust chips row
│   ├── FloatingCard.vue        # Reusable glassmorphism card
│   ├── PartnersStrip.vue       # Curricula / partners marquee
│   └── Icon*.vue               # Lightweight SVG icons
├── layouts/
│   └── default.vue
├── pages/
│   └── index.vue               # Landing page entry
└── public/
    ├── favicon.svg
    └── robots.txt
```

---

## Customisation

- **Colors**: edit `tailwind.config.js` → `theme.extend.colors.brand`
- **Headline / copy**: `components/HeroSection.vue`
- **Floating cards**: `components/HeroVisual.vue`
- **Stats**: `components/HeroStats.vue`
- **Trust chips**: `components/TrustIndicators.vue`

---

## Animation Tokens

All entrance animations use Vue Motion's `v-motion` directive with:
- duration: 400–900 ms
- ease: `[0.22, 1, 0.36, 1]` (premium cubic-bezier)
- stagger delays: 100–150 ms between siblings

Floating cards use a CSS `@keyframes float` (6–8s) for ambient motion.

---

## License

MIT — replace student photo with a licensed brand asset before production.
# IM-website-nuxt
# IM-website-nuxt-v2
