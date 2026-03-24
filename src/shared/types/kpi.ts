export interface KPIMetric {
  id: string
  label: string
  value: number
  unit?: string
  prefix?: string
  change: number
  changePeriod: string
  trend: 'up' | 'down' | 'stable'
  sparklineData: number[]
  color: string
  /** Override for chart bar color (e.g. primary card 1 = light grey, card 2 = dark blue) */
  chartColor?: string
  icon?: string
  description?: string
  /** When true, renders as large primary card (top row) */
  isPrimary?: boolean
  /** When true, uses dark blue background; when false with isPrimary, uses white */
  hasDarkBackground?: boolean
  /** When true, shows period dropdown (e.g. 7 days) in card header */
  showPeriodDropdown?: boolean
}

export interface KPISectionData {
  metrics: KPIMetric[]
  lastUpdated: string
  period: string
}
