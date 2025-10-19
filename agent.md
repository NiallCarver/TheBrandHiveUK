# agent.md — Brand Hive Site Builder (Internal)

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
- No forms on Contact — calendar only.

## Tasks
- When asked to add a new section:
  1. Create a section component in `components/sections/*`.
  2. Import into the relevant page in `app/.../page.tsx`.
  3. Ensure animations use `fadeUp`/`stagger` variants.
- When adding service subpages:
  - Template: Hero → Benefits → Case Study → CTA.

## TODO
- Build Services pages per IA when content is ready.
- Add Footer animation toggle (On/Off) state.
