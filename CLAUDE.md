# CLAUDE.md — Aqua Intel Executive Control Room

Guidance for AI assistants working in this repository. **Figma Dev Mode is the authority for pixel values** when it disagrees with code; align tokens and `sx` after verifying Figma.

---

## 1. Role

Senior frontend engineer: **Next.js 15 (App Router), React 19, TypeScript (strict), MUI, ApexCharts**, executive dashboards, and **Figma-accurate** UI.

---

## 2. Product context

- **Product:** Aqua Intel — Executive Control Room.
- **Figma (strict reference):** [Test Project — node 0-1](https://www.figma.com/design/xKEjygtF35qJwilIcn1JtC/Test-Project?node-id=0-1)

**From Figma, do not approximate without explicit user approval:**

- Spacing, typography, colors, shadows, radius, layout proportions.

---

## 3. Tech stack (as implemented)

| Area | Choice |
|------|--------|
| Framework | Next.js 15.x, App Router |
| UI | React 19, MUI 7 (`@mui/material`), Emotion |
| Charts | ApexCharts + `react-apexcharts` |
| Map | Leaflet (dynamic client usage) |
| Motion | Framer Motion (where used) |
| Icons | `lucide-react` |

**Typography:** The app loads **Ubuntu** via `next/font` in `src/app/layout.tsx` and MUI `typography` in `src/core/theme/mui-theme.ts`. The workspace originally specified Roboto; if Figma requires Roboto, change font loading and theme in one coordinated update.

---

## 4. Repository structure (enforce when adding code)

```
src/app/                      # Routes, providers, global CSS only
src/core/theme/               # MUI theme, card radius helper, design tokens
  tokens/                     # colors, spacing, shadows, typography scales
src/shared/
  ui/                         # Small reusable UI (dropdown, badge, ticker, …)
  lib/                        # Pure utilities (formatters, flags, helpers)
  hooks/                      # Hooks used across modules (e.g. use-count-up)
  types/                      # Shared TypeScript types
src/widgets/                  # Composite UI (kpi-card, world-map, sparkline-chart, …)
src/modules/dashboard/        # Dashboard feature: components, hooks, services
```

**Path aliases (see `tsconfig.json`):** `@/*`, `@/core/*`, `@/shared/*`, `@/widgets/*`, `@/modules/*`.

**Conventions:**

- Prefer **feature code** under `src/modules/<feature>/` (hooks, services, section components).
- Prefer **reusable primitives** under `src/shared/` and **composites** under `src/widgets/`.
- **Do not** introduce parallel trees (e.g. a second `components/` at `src/` root) without a clear reason.

---

## 5. Styling and design system (consistent output)

These rules **enforce** consistency; follow them before inventing new colors or spacing.

### 5.1 Single sources of truth

| Need | Use |
|------|-----|
| Brand / semantic colors (reference) | `src/core/theme/tokens/colors.ts` |
| Spacing scale, layout constants | `src/core/theme/tokens/spacing.ts` |
| Shadow presets | `src/core/theme/tokens/shadows.ts` |
| Type scale (sizes/weights) | `src/core/theme/tokens/typography.ts` |
| MUI palette, `palette.custom`, component defaults | `src/core/theme/mui-theme.ts` |
| Card `borderRadius` multiplier for cards | `CARD_BORDER_RADIUS_SX` from `src/core/theme/card-styles.ts` |
| Barrel re-exports | `src/core/theme/index.ts` |

### 5.2 Implementation rules

1. **MUI:** Use **`sx`** or **`styled`**; avoid ad-hoc inline style objects except for truly dynamic values.
2. **Colors in UI:** Prefer **`theme.palette`** and **`theme.palette.custom.*`** for chrome (sidebar, header, borders) instead of hard-coded hex when a token already exists.
3. **New colors:** Add to **tokens** (and wire through MUI if they should be theme-aware), don’t scatter one-off hex across sections.
4. **Spacing:** Prefer theme spacing units (`sx={{ p: 2, gap: 1.5 }}`) aligned with the **4px grid** in `tokens/spacing.ts`.
5. **Charts:** ApexCharts only; match font family to the app (e.g. Ubuntu CSS variable where charts expose `fontFamily`).

### 5.3 What this file does *not* do

It does not duplicate every hex from tokens (they live in code). Agents must **read and reuse** those files rather than copying values from memory.

---

## 6. Feature checklist (product spec)

Use for completeness when changing the dashboard; implementation lives under `src/modules/dashboard` and `src/widgets`.

1. **KPI row** — Count-up, sparklines, period dropdown, tooltips.
2. **Map** — Many markers (Africa, South Asia, Southeast Asia, etc.), risk/deployment coloring, hover + click detail, zoom.
3. **AI Executive Brief** — Gradient header, priorities, deployment alert, generate/report loading pattern.
4. **Deep dive** — Four cards, gradients/icons/stats/progress/CTA, hover lift.
5. **Global UX** — Card hover, buttons, charts, dropdowns, sidebar active state, ticker motion.

---

## 7. Charts, responsiveness, performance

- **Charts:** Animate on load; tooltips show exact values; no meaningless series labels.
- **Breakpoints:** Target **1920 / 1440 / 1280**; no horizontal scroll; grids must collapse cleanly.
- **Performance:** Dynamic import for heavy client-only pieces (map, charts); avoid pointless re-renders of chart options.

---

## 8. Code quality

- Strict TypeScript; avoid `any`.
- Match existing import style and **kebab-case** file names for new files where the repo already uses them.
- Keep changes scoped; don’t refactor unrelated modules in the same task.

---

## 9. Commands

```bash
npm run dev
npm run build
npm run start
```

---

## 10. Goal

Ship and maintain a **production-grade** executive dashboard: behavior and visuals stay aligned with **Figma** and with **`src/core/theme`** + **MUI** conventions above.
