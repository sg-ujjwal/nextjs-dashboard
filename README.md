# Aqua Intel Dashboard

Aqua Intel Executive Control Room built with Next.js App Router, React, TypeScript, and MUI.

## Tech Stack

- Next.js 15 (App Router)
- React 19 + TypeScript (strict)
- MUI 7 + Emotion
- ApexCharts (`apexcharts`, `react-apexcharts`)
- Leaflet (`leaflet`, `react-leaflet`)
- Framer Motion

## Getting Started

### Prerequisites

- Node.js 20+ recommended
- npm 10+ recommended

### Install

```bash
npm install
```

### Run in development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build and run production

```bash
npm run build
npm run start
```

## Project Structure

```text
src/
├── app/                 # App Router pages, providers, global styles
├── core/                # Theme, design tokens, shared styling primitives
├── features/            # Feature-level entry points and organization
│   └── dashboard/
├── modules/             # Existing feature implementation modules
│   └── dashboard/
├── widgets/             # Composite UI widgets (kpi-card, map, charts)
├── shared/              # Reusable ui/hooks/lib/types
├── components/          # Enterprise UI/common/layout composition exports
├── hooks/               # Cross-feature hook exports
├── services/            # Cross-feature service exports
├── constants/           # Shared constants exports
├── types/               # Shared type exports
└── utils/               # Shared utility exports
```

## Architecture Notes

- Keep business logic in hooks/services, not inside large JSX blocks.
- Reusable primitives live in `shared` and `components/ui`.
- Feature-specific entry points should come from `features/<feature>`.
- Preserve existing behavior during refactors: structure changes should be non-breaking.

## Design System

- Theme source of truth: `src/core/theme/mui-theme.ts`
- Tokens:
  - `src/core/theme/tokens/colors.ts`
  - `src/core/theme/tokens/spacing.ts`
  - `src/core/theme/tokens/shadows.ts`
  - `src/core/theme/tokens/typography.ts`

## Main Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run lint command (requires lint config setup in this repo)

## Contribution Guidelines

- Use TypeScript strictly; avoid `any`.
- Keep naming consistent:
  - Components: PascalCase
  - Variables/functions: camelCase
  - Folders/files: kebab-case (or existing local convention)
- Avoid changing business logic when doing architecture-only refactors.
- Validate with `npm run build` after significant changes.
