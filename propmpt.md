# Executive Dashboard Project Prompts

These prompts describe executive dashboard projects. Each one follows the same frontend architecture (Next.js 15, MUI 7, ApexCharts, Leaflet) and repo structure. Read the Common Structure at the bottom before starting any project — it applies to all of them.

---

## Prompt 1 — CyberShield SOC Command Center

I want you to build a Security Operations Center executive dashboard called **CyberShield Command Center**. Think of it as a real-time war room for cybersecurity analysts and executives. The people using this need to understand what is being attacked, where it is coming from, and how quickly the team is responding — all at a glance.

**What to build on the frontend:**
Use Next.js 15 with the App Router, React 19, TypeScript in strict mode, MUI 7, and ApexCharts. The look should be dark and serious — background color `#0A0F1E`, with red and orange used for threats, and monospace font rendering for IP addresses and hash values. Load Inter via `next/font`. The layout must work cleanly at 1920, 1440, and 1280 widths.

**Dashboard sections:**

The top of the page should have a KPI row showing four metrics: number of active threats, resolved incidents today, mean-time-to-respond (MTTR in minutes), and total alert volume. Each number should animate upward on load (count-up effect) and have a small sparkline chart underneath it showing the last 7 days of trend.

Below that, show a world map (Leaflet) with markers representing where attacks are originating. Color each marker by severity — red for critical, orange for high, yellow for medium, blue for low. Clicking a marker should show a popup with attacker details.

Next is the AI Threat Brief section. Give it a gradient header and populate it with the top three attack vectors this week, any active campaigns detected, and a button that lets the user auto-generate a threat report. Show a loading spinner while it generates.

At the bottom, four deep-dive cards: Endpoint Protection Status, Network Anomaly Count, Phishing Attempt Volume, and Patch Compliance Rate. Each card should have an icon, a headline stat, a mini trend chart, and a "View Details" CTA.

The sidebar should show active navigation state. Run a live ticker across the top showing the most recent security alerts scrolling left.

**Folder layout:** Follow the Common Structure at the bottom of this file.

---

## Prompt 2 — EcoTrack Climate Intelligence Hub

I want you to build a climate monitoring executive dashboard called **EcoTrack Climate Intelligence Hub**. Scientists and government executives will use this to track global climate indicators and get AI-assisted briefings on environmental risk.

**Frontend stack:** Next.js 15 App Router, React 19, TypeScript strict, MUI 7, ApexCharts, Leaflet. Earth-tone color palette (`#0D1B2A` background, greens and amber for data states), glassmorphism card surfaces, Ubuntu typography. Breakpoints: 1920 / 1440 / 1280.

**Dashboard sections:**

KPI row at the top showing CO₂ ppm, temperature anomaly (°C above baseline), sea level rise (mm/yr), and number of extreme weather events this month. Count-up animations on load, sparklines underneath each, period dropdown to switch between monthly/quarterly/annual views.

World map with station markers colored by emission zone: green (safe), yellow (watch), red (alert), purple (critical). Hover shows station name and latest reading. Click opens a detail drawer.

AI Climate Brief with gradient header showing the top three priority environmental alerts, a seasonal forecast summary, and a "Generate PDF Report" button with loading state.

Four deep-dive cards: Deforestation Rate, Ocean Acidification Index, Ice Sheet Volume Loss, Renewable Energy Adoption %. Each has a progress bar, trend sparkline, icon badge, and CTA.

Live ticker scrolling the latest sensor readings from global stations.

**Folder layout:** Follow the Common Structure at the bottom of this file.

---

## Prompt 3 — FinEdge Portfolio Command Center

I want you to build a financial portfolio executive dashboard called **FinEdge Portfolio Command Center**. Fund managers and C-suite executives use this to track portfolio performance, assess risk, and get AI-driven rebalancing recommendations.

**Frontend stack:** Next.js 15 App Router, React 19, TypeScript strict, MUI 7, ApexCharts. Dark theme (`#0C111D`), gold accent (`#D4AF37`), semantic green for gains and red for losses. Inter typography. Breakpoints 1920/1440/1280, no horizontal scroll.

**Dashboard sections:**

KPI row: AUM (assets under management), daily P&L in dollars and percent, Sharpe ratio, and max drawdown %. Count-up animations, sparklines, period dropdown (1D / 1W / 1M / YTD / All).

Allocation map: a bubble chart overlaid on a world map showing regional capital exposure. Bubble size = allocation weight, color = return performance (green/red).

AI Portfolio Brief: gradient header, top 5 movers today (winners and losers), risk concentration alerts, and a "Generate Rebalancing Report" button that triggers an async job and shows a loading state until complete.

Four deep-dive cards: Equities breakdown, Fixed Income, Alternatives, and Cash & Derivatives. Each card shows allocation %, return, risk metrics, and a mini donut or bar chart.

Live ticker scrolling major indices: S&P 500, Nasdaq, Nikkei, FTSE, DAX — with color-coded price change.

**Folder layout:** Follow the Common Structure at the bottom of this file.

---

## Prompt 4 — HealthPulse Hospital Operations Dashboard

I want you to build a hospital operations executive dashboard called **HealthPulse Command Center**. Hospital administrators and clinical leads use this to monitor bed capacity, patient flow, and departmental throughput in real time. The interface needs to feel calm, clinical, and fast.

**Frontend stack:** Next.js 15 App Router, React 19, TypeScript strict, MUI 7, ApexCharts, Leaflet. White and blue clinical palette with a dark sidebar (`#1A2035`). Ubuntu typography. Breakpoints 1920/1440/1280.

**Dashboard sections:**

KPI row: Bed Occupancy %, Average ER Wait Time (minutes), Surgeries Scheduled Today, and Staff-to-Patient Ratio. Count-up animations on load, sparklines showing 7-day trends, and a shift selector (Day / Evening / Night).

Facility map: Leaflet map styled as a hospital floor plan showing each ward as a marker. Color wards by capacity — green (under 70%), amber (70–90%), red (over 90%). Clicking a ward opens a popup with live bed count.

AI Clinical Brief: priority admission queue, patients recommended for discharge today, staffing gap alerts, and a "Generate Daily Ops Report" button.

Four deep-dive cards: ICU Status (census, acuity, ventilator count), ER Throughput (arrivals/hr, door-to-doctor time), OR Utilization (rooms in use, upcoming cases), Pharmacy Inventory (critical drug stock levels with alert badges).

Live ticker scrolling critical patient alerts and code calls.

**Folder layout:** Follow the Common Structure at the bottom of this file.

---

## Prompt 5 — LogiFlow Supply Chain Intelligence Center

I want you to build a supply chain executive dashboard called **LogiFlow Intelligence Center**. Supply chain directors and operations VPs use this to track delivery performance, supplier reliability, and logistics costs across a global network.

**Frontend stack:** Next.js 15 App Router, React 19, TypeScript strict, MUI 7, ApexCharts, Leaflet. Navy and orange palette (`#0B1628` background, `#F97316` accent), glassmorphism card surfaces. Inter typography. Breakpoints 1920/1440/1280.

**Dashboard sections:**

KPI row: On-Time Delivery Rate (%), Inventory Turnover Ratio, Supplier Risk Score (0–100), and Average Freight Cost per Unit. Count-up animations, sparklines, and a period dropdown.

World map: animated route arcs showing active shipments between origin and destination ports. Supplier location markers colored by risk tier (green/amber/red). Clicking a route shows shipment details.

AI Supply Brief: gradient header with the top three disruption risks this week (weather, geopolitical, supplier delays), active bottleneck alerts, and a "Generate Briefing" button.

Four deep-dive cards: Procurement Cycle Time, Warehouse Utilization %, Last-Mile Performance, Returns & Reverse Logistics Volume.

Live ticker scrolling shipment status updates as they come in.

**Folder layout:** Follow the Common Structure at the bottom of this file.

---

## Prompt 6 — GridGuard Energy Operations Center

I want you to build an energy grid executive dashboard called **GridGuard Operations Center**. Grid operators and utility executives use this to monitor load, generation mix, and outage status across a regional or national power grid in real time.

**Frontend stack:** Next.js 15 App Router, React 19, TypeScript strict, MUI 7, ApexCharts, Leaflet. Dark theme (`#0A1628`), electric-blue accent (`#00C8FF`), amber alerts (`#FBBF24`). Ubuntu typography. Breakpoints 1920/1440/1280.

**Dashboard sections:**

KPI row: Current Grid Load (% of capacity), Renewable Mix (% of generation), Active Outage Count, and SAIDI reliability index. Count-up animations, sparklines, and a period dropdown.

Regional map: Leaflet map showing substation markers and outage zone polygons. Color substations by load level, outage zones by severity.

AI Grid Brief: load forecasting alert for the next 6 hours, peak demand warning, generation shortfall risk, and a "Generate Operational Report" button.

Four deep-dive cards: Generation Capacity by Source (solar/wind/gas/hydro), Transmission Line Losses %, Demand Response Activations Today, Battery Storage State of Charge.

Live ticker scrolling grid frequency deviations and automatic reclosing events.

**Folder layout:** Follow the Common Structure at the bottom of this file.

---

## Prompt 7 — TalentIQ HR Executive Intelligence

I want you to build an HR analytics executive dashboard called **TalentIQ Executive Intelligence**. CHROs and HR business partners use this to track workforce health, hiring velocity, and talent risk across the organization.

**Frontend stack:** Next.js 15 App Router, React 19, TypeScript strict, MUI 7, ApexCharts. Warm professional palette (`#1C1F2E` background, teal `#14B8A6`, amber). Inter typography. Breakpoints 1920/1440/1280.

**Dashboard sections:**

KPI row: Total Headcount, Voluntary Attrition Rate (%), Average Time-to-Hire (days), and Employee Net Promoter Score (eNPS). Count-up animations, sparklines, period dropdowns (MTD / QTD / YTD).

Org map: world map with bubble markers sized by headcount per region, colored by attrition rate (green low, red high). Clicking a region shows department breakdown.

AI HR Brief: gradient header listing the top three flight-risk employee segments, open requisition pipeline summary, and a "Generate Board Report" button.

Four deep-dive cards: Attrition Analysis (reasons breakdown), Recruitment Funnel (applied → offer → joined), L&D Completion Rate (by department), Compensation Equity Score.

Sidebar with module-level navigation. Card hover lift effect throughout.

**Folder layout:** Follow the Common Structure at the bottom of this file.

---

## Prompt 8 — SkyOps Aviation Fleet Command Center

I want you to build an aviation fleet executive dashboard called **SkyOps Fleet Command Center**. Airline operations directors and fleet managers use this to monitor aircraft status, departure punctuality, and maintenance exposure across the entire fleet.

**Frontend stack:** Next.js 15 App Router, React 19, TypeScript strict, MUI 7, ApexCharts, Leaflet. Deep sky palette (`#050F1F`, sky-blue `#0EA5E9` accent, amber alerts `#F59E0B`). Ubuntu typography. Breakpoints 1920/1440/1280.

**Dashboard sections:**

KPI row: Fleet Utilization %, On-Time Departure Rate %, Open Minimum Equipment List (MEL) Items, and Fuel Efficiency (kg/100km). Count-up animations and sparklines.

Live route map: Leaflet map showing real-time aircraft positions as markers with heading indicators. Connecting arcs show active routes. Marker color indicates status — blue (on time), amber (delayed), red (grounded).

AI Ops Brief: gradient header with top maintenance alerts due in the next 48 hours, active weather disruptions affecting routes, and a "Generate Ops Report" button.

Four deep-dive cards: Aircraft Availability by fleet type, Crew Scheduling gaps and overtime risk, Ground Operations turnaround time, Fuel Management variance vs plan.

Live ticker scrolling departure and arrival status changes across the network.

**Folder layout:** Follow the Common Structure at the bottom of this file.

---

## Prompt 9 — RetailPulse E-Commerce Command Center

I want you to build an e-commerce executive dashboard called **RetailPulse Command Center**. E-commerce directors and growth leads use this to monitor revenue, conversion performance, and fulfillment health in real time.

**Frontend stack:** Next.js 15 App Router, React 19, TypeScript strict, MUI 7, ApexCharts, Leaflet. Vibrant palette (`#0F172A` background, violet `#7C3AED`, emerald `#10B981`). Inter typography. Breakpoints 1920/1440/1280.

**Dashboard sections:**

KPI row: Gross Merchandise Value (GMV), Conversion Rate %, Average Order Value (AOV), and Cart Abandonment Rate %. Count-up animations, sparklines, and a period dropdown (today / 7D / 30D / custom range).

Sales map: Leaflet map with regional revenue heat coloring — darker fill means higher GMV in that region. Hovering shows the region's top-performing category.

AI Commerce Brief: trending SKUs driving the most volume today, inventory risk alerts (items about to go out of stock), active promo performance summary, and a "Generate Report" button.

Four deep-dive cards: Acquisition (sessions, new vs returning, traffic sources), Engagement (pages per session, add-to-cart rate), Retention (repeat purchase rate, LTV), Fulfillment (on-time shipment %, return rate).

Live ticker showing orders-per-minute updating in real time.

**Folder layout:** Follow the Common Structure at the bottom of this file.

---

## Prompt 10 — AquaFleet Maritime Operations Center

I want you to build a maritime fleet executive dashboard called **AquaFleet Operations Center**. Fleet managers and port operations directors use this to track vessel positions, cargo utilization, and port schedules across global shipping lanes.

**Frontend stack:** Next.js 15 App Router, React 19, TypeScript strict, MUI 7, ApexCharts, Leaflet. Ocean palette (`#040D1A` background, teal `#0891B2`, orange alert `#F97316`). Ubuntu typography. Breakpoints 1920/1440/1280.

**Dashboard sections:**

KPI row: Vessels Currently at Sea, Cargo Utilization % across the fleet, Average Port Turnaround Time (hours), and Fuel Cost per Nautical Mile. Count-up animations and sparklines.

Vessel tracking map: Leaflet ocean map showing live vessel positions via AIS data. Marker color by status — blue (en-route on schedule), amber (delayed), grey (anchored), red (distress). Clicking opens a detail panel with vessel name, ETA, cargo manifest summary, and route.

AI Fleet Brief: gradient header with top weather rerouting recommendations, ETA deviations greater than 4 hours, and a "Generate Fleet Brief" button.

Four deep-dive cards: Route Efficiency (actual vs planned nm), Port Operations (berth availability at top 5 ports), Maintenance Schedule (vessels due for service in 30 days), Crew Compliance (certification expiry watch list).

Live ticker scrolling AIS position updates and port arrival confirmations.

**Folder layout:** Follow the Common Structure at the bottom of this file.

---

## Prompt 11 — ManuPulse Factory Floor Intelligence

I want you to build a manufacturing executive dashboard called **ManuPulse Factory Intelligence**. Plant managers and operations VPs use this to monitor production output, equipment health, and quality metrics across one or more factory floors.

**Frontend stack:** Next.js 15 App Router, React 19, TypeScript strict, MUI 7, ApexCharts, Leaflet. Industrial palette (`#0D1117` background, steel-blue `#3B82F6`, amber `#F59E0B`). Ubuntu typography. Breakpoints 1920/1440/1280.

**Dashboard sections:**

KPI row: Overall Equipment Effectiveness (OEE %) — the headline manufacturing metric, Units Produced Today vs Target, Defect Rate in PPM (parts per million), and Planned vs Actual Output %. Count-up animations and sparklines.

Plant map: Leaflet-based facility view (use a custom image overlay for the factory floor plan) with machine station markers. Color each station by real-time status — green (running), amber (idle), red (fault/downtime). Clicking opens a station detail panel showing current job, operator, cycle time, and last fault code.

AI Production Brief: bottleneck alerts with the specific workstation causing delay, quality escape notifications, shift-over-shift performance comparison, and a "Generate Shift Report" button.

Four deep-dive cards: Availability (planned vs unplanned downtime), Performance (actual cycle time vs ideal), Quality (first-pass yield %), Maintenance — Total Productive Maintenance view with upcoming PM schedule.

Live ticker scrolling machine fault events and shift handover notes.

**Folder layout:** Follow the Common Structure at the bottom of this file.

---

## Prompt 12 — EduInsight University Executive Dashboard

I want you to build a university executive dashboard called **EduInsight Command Center**. University presidents, provosts, and deans use this to track enrollment health, academic outcomes, research funding, and alumni engagement across the institution.

**Frontend stack:** Next.js 15 App Router, React 19, TypeScript strict, MUI 7, ApexCharts, Leaflet. Academic palette (`#0F1929` background, navy `#1D4ED8`, gold `#EAB308`). Inter typography. Breakpoints 1920/1440/1280.

**Dashboard sections:**

KPI row: Total Enrollment (headcount), 4-Year Graduation Rate %, Research Funding Secured ($M this fiscal year), and Student Satisfaction NPS. Count-up animations, sparklines, period dropdowns (semester / academic year / 5-year).

Campus map: Leaflet map of the campus grounds with building markers. Color each building by utilization rate — classroom occupancy, lab booking rate, dormitory capacity. Clicking opens a building summary.

AI Academic Brief: at-risk student cohort alerts (based on GPA drop, attendance, or financial holds), upcoming research grant deadlines, key milestone summary for the board, and a "Generate Provost Report" button.

Four deep-dive cards: Admissions Funnel (applied → admitted → enrolled → retained), Academic Performance (GPA distribution, honors count), Research Output (papers published, patents filed, grant win rate), Alumni Giving (participation rate, total gifts YTD, major gift pipeline).

Sidebar with module-level navigation between academic, research, financial, and alumni views. Card hover lift throughout.

**Folder layout:** Follow the Common Structure at the bottom of this file.

---

## Common Structure (applies to all 12 projects)

Every project above uses this exact folder layout. Do not deviate from it.

```
src/
  app/                        # Next.js App Router — routes, layout.tsx, providers, global.css only
  core/
    theme/
      tokens/                 # colors.ts · spacing.ts · shadows.ts · typography.ts
      mui-theme.ts            # MUI theme config — palette, palette.custom, component defaults
      card-styles.ts          # CARD_BORDER_RADIUS_SX shared constant
      index.ts                # barrel re-export for everything in core/theme
  shared/
    ui/                       # Small reusable primitives: dropdown, badge, ticker, icon-badge
    lib/                      # Pure utility functions: formatters, flag helpers, date utils
    hooks/                    # Cross-module hooks: use-count-up, use-interval, use-breakpoint
    types/                    # Shared TypeScript types and interfaces
  widgets/                    # Composite UI components: KpiCard, WorldMap, SparklineChart, DeepDiveCard
  modules/
    dashboard/                # Feature-level code: section components, hooks, services, mock/real data
```

**Path aliases** (configure in `tsconfig.json`): `@/*` `@/core/*` `@/shared/*` `@/widgets/*` `@/modules/*`

**Coding conventions — non-negotiable:**

- Strict TypeScript throughout. No `any`, no type assertions unless absolutely unavoidable and commented.
- File names in kebab-case everywhere. Component names in PascalCase inside those files.
- For MUI styling, use `sx` prop or `styled()` — never plain inline style objects except for genuinely dynamic computed values.
- Colors must come from `theme.palette` or `theme.palette.custom.*`. Do not scatter hex codes across component files. New colors go into `tokens/colors.ts` first, then wired into the MUI theme.
- Spacing must follow the 4px grid. Use theme spacing units in `sx` (e.g., `p: 2` = 16px) not raw pixel strings.
- Charts: ApexCharts only. Always animate on load. Tooltips must show exact values with proper units. No dummy series labels.
- Map and chart components must be dynamically imported (`next/dynamic` with `ssr: false`) since they are client-only.
- Target breakpoints are 1920 / 1440 / 1280. No horizontal scroll at any of these widths. Grids must collapse cleanly.
- Do not create a parallel `components/` folder at `src/` root. All reusable UI goes into `shared/ui/` or `widgets/`.

**Running the project:**
```bash
npm run dev      # development server
npm run build    # production build
npm run start    # production server
```
