# Agents Workflow

This document defines a simple, repeatable workflow for using coding agents in this repository.

## 1) Goal First

Before running an agent, write a clear task statement:

- What to change
- Where to change it
- What must not change
- How success will be validated

Example:
"Update sidebar icons in `src/modules/dashboard/components/sidebar/index.tsx` using custom SVG components from `src/core/theme/tokens/svg.Contant.tsx` without changing layout spacing."

## 2) Pre-Check Context

Read these before editing:

- `CLAUDE.md`
- Relevant feature files
- Theme tokens in `src/core/theme/tokens/*`

Then confirm:

- File ownership and placement follow project structure
- Tokens exist before adding hardcoded values
- Existing UI patterns are reused

## 3) Execution Flow

Use this order for every implementation task:

1. **Inspect**
   - Read target files and related dependencies.
2. **Plan**
   - Decide minimal changes with least surface area.
3. **Implement**
   - Apply edits directly to relevant files.
4. **Validate**
   - Run lint checks for edited files.
   - Run `npm run build` for integration safety.
5. **Report**
   - Summarize changed files and behavior impact.

## 4) UI/Design Rules

- Use MUI `sx` and existing theme tokens.
- Keep Figma-aligned visuals (spacing, typography, border, color).
- Avoid introducing one-off hex values when token exists.
- Preserve responsive behavior (`xs/sm/md/lg/xl`) when touching layout.

## 5) Code Quality Rules

- TypeScript strict-safe changes only.
- No `any` unless absolutely unavoidable.
- Keep functions/components focused and small.
- Avoid unrelated refactors in the same change.
- Prefer reusable components for repeated SVG/UI patterns.

## 6) Definition of Done

A task is complete only when all are true:

- Requested behavior is implemented.
- Design accuracy: UI matches Figma intent (spacing, typography, borders, colors, shadows, radius).
- Functionality: charts, hover states, tooltips, animations, and dropdown interactions work end-to-end.
- Code quality: changes are clean, readable, and scoped (no unrelated refactors).
- CLAUDE.md quality: guidance in `CLAUDE.md` was followed (theme tokens, MUI `sx`, Figma-accurate values).
- Responsive layout: works at 1920px, 1440px, and 1280px without breaking layout.
- Time efficiency: deliver with minimal iterations (validate early, avoid large rebuild loops).
- No new lint issues in modified files.
- Build passes.
- Final summary includes:
  - files changed
  - what changed
  - what was verified

## 7) Quick Command Checklist

```bash
npm run dev
npm run build
```

For targeted verification, use editor lint diagnostics on modified files first, then run full build.
