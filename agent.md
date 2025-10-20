# agent.md ‚Äî Brand Hive Site Builder (Internal)

## Objective
Generate and maintain pages and components for The Brand Hive UK website using Next.js 15, Tailwind, and Framer Motion, following the approved IA and design system.

## Brand Voice
Punchy, authoritative, descriptive without waffle. Modern, premium, tech-forward.

## Color & Theme
Dark-first. Primary gold (#F5C542) with white on black. Tokens live in `styles/tokens.css` and Tailwind aliases in `tailwind.config.ts`.

## Information Architecture
- Home: Hero, Trusted By, Features, Results, CTA, Book calendar section
- Services (future): index + subpages (X, LinkedIn, Lead Gen, Web & App Dev)
- About: company snapshot, founder story, proof
- Contact: calendar embed only

## Components to Use
- `/components/ui/Section.tsx` for all section wrappers
- `/components/ui/CTAButton.tsx` for CTAs
- `/components/Header.tsx`, `/components/Footer.tsx`
- Motion helpers in `lib/motion.ts`

## Copywriting Prompts
- Hero headline format: `{Outcome} for {Audience} on {Channels}`
- Subhead: `{Positioning}: {Proof/Mechanism}.`
- CTAs: "Book a Call", "Explore Services"

## Guardrails
- No AI chatbot on site (for now).
- Keep animations transform/opacity-only.
- Respect accessibility: clear contrast, logical heading order.
- No forms on Contact ‚Äî calendar only.

## Tasks
- When asked to add a new section:
  1. Create a section component in `components/sections/*`.
  2. Import into the relevant page in `app/.../page.tsx`.
  3. Ensure animations use `fadeUp`/`stagger` variants.
- When adding service subpages:
  - Template: Hero ‚Üí Benefits ‚Üí Case Study ‚Üí CTA.

## TODO
- Build Services pages per IA when content is ready.
- Add Footer animation toggle (On/Off) state.

## Progress Log (2025-10-20)
- Audit: Verified existence of core components/utilities (`components/ui/Section.tsx`, `CTAButton.tsx`, `Header.tsx`, `Footer.tsx`, `lib/motion.ts`, `components/sections/*`).
- Footer: Implemented global animation toggle using `MotionProvider`; later refactored footer to compact single-row layout while retaining legal and nav links. Toggle persists via `localStorage`.
- CTA microinteractions: Added magnetic hover/press feedback to `CTAButton`.
- Homepage structure: Removed Insights teaser; moved Differentiators directly under Process; added spacing so sections fit one-per-scroll; added Home link to Navbar; removed infographic from brief Process cards.
- Testimonials: Added subtle 3D tilt + glow on hover (transform/opacity only).
- Metrics: Added count-up and parallax accents initially; later cleaned label by removing ‚ÄúLast 9 intervals‚Äù.
- Logos: Added JSON-driven control for Trusted By; later switched global logo path to `/logos/The_Brand_Hive_UK_Transparent.png` with fallbacks to `/logos/brand-logo.png` and updated SEO schema/logo refs.
- Exit intent: Added dismissible bottom bar linking to Book section.
- Process pages: Deepened step copy with premium, practitioner-grade detail and added lightweight SVG infographics per step (desktop + mobile). Removed ‚ÄúExpand‚Äù on homepage Process.
- Copy hygiene: Fixed punctuation/encoding artifacts and updated contact email to `info@thebrandhive.uk` across site.
- Build hygiene: Resolved UTF-8 issue in `app/layout.tsx` and ensured TypeScript checks pass.

Open follow-ups
- Replace placeholder infographics on homepage (kept intentionally minimal per guardrails) when assets are ready.
- Add MD/MDX Insights pipeline when package installs are permitted.
- Optionally wrap root layout with `Providers` for universal motion state.

### Subsequent updates
- Navbar/Header: Removed image logo; brand now rendered as text ìThe Brand Hiveî.
- Trusted By: Excluded the site logo from the marquee API so it wonít display in the brand list.
- Homepage Process intro: Kept ìrevenue growthî on a single line via whitespace-nowrap.
- Metrics: Removed the ìLast 9 intervalsî label for a cleaner card.
- Testimonials: Updated Randyís quote to say ìengaged with Niall and his teamî.
- Logo handling: Added Logo component with on-error fallback and kept metadata/seoschema references updated; later removed from nav per request.
