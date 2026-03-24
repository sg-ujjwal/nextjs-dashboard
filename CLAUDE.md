# 🚀 CLAUDE CODE MASTER PROMPT — AQUA INTEL EXECUTIVE CONTROL ROOM

You are a **senior staff-level frontend engineer** specializing in **Next.js 15, React 19, TypeScript, Material UI, and ApexCharts**, with strong expertise in **pixel-perfect UI implementation from Figma** and **enterprise dashboard architecture**.

Your task is to **fully design, architect, and implement** a production-quality web application based on the provided Figma file.

---

## 📌 PROJECT CONTEXT

Build the **Aqua Intel — Executive Control Room Dashboard**.

Figma Source (STRICT SOURCE OF TRUTH):
https://www.figma.com/design/xKEjygtF35qJwilIcn1JtC/Test-Project?node-id=0-1

⚠️ You MUST use Figma Dev Mode values exactly:

* spacing
* typography
* colors
* shadows
* border radius
* layout proportions

NO approximation allowed (even 2px deviation is unacceptable).

---

## 🧱 TECH STACK (STRICT)

* Next.js 15 (App Router)
* React 19 (Functional Components only)
* TypeScript (strict mode)
* Material UI (MUI v5+)
* ApexCharts (for ALL charts)
* Roboto font ONLY

---

## 🧠 DEVELOPMENT APPROACH

You will:

1. Generate the full project structure
2. Create reusable components
3. Implement all UI + logic
4. Ensure pixel-perfect accuracy
5. Add animations and interactivity
6. Maintain clean, scalable architecture

DO NOT:

* Write everything in one file
* Use placeholder logic
* Skip interactivity
* Approximate styles

---

## 📁 PROJECT STRUCTURE (MANDATORY)

Generate a scalable structure:

/app
/components
/common
/charts
/cards
/map
/layout
/features
/dashboard
/hooks
/services
/theme
/types
/utils

---

## 🎨 DESIGN SYSTEM RULES

Extract from Figma and enforce globally:

### Colors

* Define all colors in theme.ts
* Include primary, secondary, success, warning, error, gradients

### Typography

* Use ONLY Roboto
* Match font-size, weight, line-height EXACTLY

### Spacing

* Follow 4px or 8px grid (as per Figma)
* No arbitrary spacing

### Shadows & Radius

* Match exact Figma elevation values

---

## 🧩 CORE FEATURES TO BUILD

### 1. KPI CARDS

* Count-up animation on load
* Embedded ApexCharts sparkline bar charts
* Tooltip on hover
* Functional period selector dropdown

---

### 2. INTERACTIVE MAP

* Use a map library (Leaflet or Mapbox preferred)
* Render 20+ markers across:

  * Africa
  * South Asia
  * Southeast Asia

Marker behavior:

* Color by risk:

  * Green (low)
  * Orange (medium)
  * Red (high)
* Hover → tooltip (country, metrics, capital)
* Click → detailed popup card
* Zoom controls must work

---

### 3. AI EXECUTIVE BRIEF

* Gradient header with icon
* Two-column layout:

  * Left: forecasting list with colored borders
  * Right: top 3 priority cards
* Deployment alert section (warning UI)
* "Generate Full Report" button:

  * Click animation
  * Loading state

---

### 4. DEEP DIVE CARDS

* 4 cards with:

  * Gradient backgrounds
  * Icon containers
  * Stats rows
  * Progress bars
  * CTA buttons
* Hover animation (lift + shadow)
* Fully clickable

---

### 5. GLOBAL INTERACTIONS

ALL elements must be interactive:

* Cards → hover lift (translateY + shadow)
* Buttons → hover + active states
* Charts → tooltips + animation
* Dropdowns → fully functional
* Sidebar:

  * Navigation
  * Active state highlight
* Alerts ticker:

  * Horizontal scrolling animation

---

## 📊 CHART REQUIREMENTS (APEXCHARTS)

* Smooth animation on load
* No dummy labels like "Group"
* Realistic data
* Tooltips must show exact values

---

## 📱 RESPONSIVENESS

Must work PERFECTLY at:

* 1920px
* 1440px
* 1280px

Rules:

* No horizontal scroll
* No broken layouts
* Maintain proportions

---

## ⚡ PERFORMANCE

* Use dynamic imports where needed
* Avoid unnecessary re-renders
* Optimize chart rendering

---

## 🧪 CODE QUALITY

* Strict TypeScript typing
* Reusable components
* Clean separation of concerns
* No inline messy styles
* Use MUI sx or styled API properly

---

## 📄 CLAUDE.md GENERATION

Also generate a **CLAUDE.md file** in root including:

* Color palette
* Typography rules
* Spacing system
* Component patterns
* Animation rules
* Interaction guidelines

This file must ensure consistent AI-generated output.

---

## 🚀 FINAL OUTPUT

You must:

1. Generate full working codebase
2. Ensure production-ready quality
3. Include all components and logic
4. Make UI pixel-perfect to Figma
5. Provide instructions to run locally
6. Prepare for Vercel deployment

---

## ⚠️ EXECUTION MODE

Work step-by-step:

1. Initialize project
2. Setup theme
3. Build layout
4. Create components
5. Add charts
6. Add map
7. Add interactions
8. Final polish

After each step:

* Verify correctness
* Refactor if needed

---

## 🎯 GOAL

Deliver a **high-end executive dashboard** that looks and behaves exactly like a real enterprise analytics platform — not a prototype.

---

Start now.
