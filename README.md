# The Brand Hive UK — Website Scaffold

**Stack:** Next.js 15 (App Router) · Tailwind · Framer Motion · Coolify (Docker)

## Quickstart
```bash
npm i
npm run dev
# build & run
npm run build && npm start
```

### Calendar
Replace both `https://cal.com/your-handle` iframes with your booking link.

### Pages
- `/` Home
- `/about`
- `/contact`

### Design
Dark, black/gold/white. Tokens in `styles/tokens.css`. Tailwind maps CSS vars in `tailwind.config.ts`.

### Motion
Framer Motion variants in `lib/motion.ts`. All sections use transform/opacity-only animations and respect `prefers-reduced-motion` by default (to add a toggle, wire in a UI state in Footer).

---
Generated 2025-10-17T21:29:00.331716
