import type { KPIMetric } from '@/shared/types'

/** Large primary KPI cards - Total beneficiaries & Capital deployed */
export const KPI_PRIMARY: KPIMetric[] = [
  {
    id: 'total-beneficiaries',
    label: 'Total beneficiaries reached',
    value: 12.4,
    unit: 'M',
    change: 34,
    changePeriod: 'vs last quarter',
    trend: 'up',
    sparklineData: [9.1, 9.8, 9.3, 30.6, 9.8, 41.1, 5.4, 60.4, 9.1, 9.8, 9.3, 30.6, 9.8, 41.1, 5.4, 60.4],
    color: '#ffffff',
    chartColor: '#94a3b8',
    icon: 'beneficiaries',
    description: 'Total people reached by water solutions',
    hasDarkBackground: true,
  },
  {
    id: 'total-capital',
    label: 'Total Capital deployed',
    value: 450,
    prefix: '$',
    unit: 'M',
    change: 34,
    changePeriod: 'vs last quarter',
    trend: 'up',
    // Dummy pattern to mimic alternating up/down spikes in the reference screenshot
    sparklineData: [330, 200, 540, 120, 600, 300, 760, 450, 330, 200, 540, 120, 600, 300, 760, 450],
    color: '#1e293b',
    chartColor: '#2F446A',
    icon: 'wallet',
    description: 'Total capital deployed across deployments',
    hasDarkBackground: false,
  },
]

/** 
 * Secondary row: mimics visual reference with alternating up/down "spikes".
 * Each sparkline: penultimate bar is visual peak; last = current value
 */
export const KPI_SECONDARY: KPIMetric[] = [
  {
    id: 'water-secured',
    label: 'Water Secured',
    value: 850.4,
    unit: 'M',
    change: 34,
    changePeriod: '7 days',
    trend: 'up',
    // Dummy pattern to mimic alternating up/down spikes in the reference screenshot
    sparklineData: [620, 700, 640, 780, 730, 810, 920, 850.4, 620, 700, 640, 780, 730, 810, 920, 850.4, 620, 700, 640, 780, 730, 810, 920, 850.4],
    color: '#2e4362',
    chartColor: '#2e4362',
    description: 'Cubic meters of water secured',
    showPeriodDropdown: true,
  },
  {
    id: 'economic-impact',
    label: 'Economic impact',
    value: 2.1,
    prefix: '$',
    unit: 'B',
    change: 62,
    changePeriod: 'vs last quarter',
    trend: 'up',
    // Dummy pattern to mimic alternating up/down spikes in the reference screenshot
    sparklineData: [0.95, 1.2, 1.05, 1.35, 1.28, 1.72, 2.48, 2.1, 0.95, 1.2, 1.05, 1.35, 1.28, 1.72, 2.48, 2.1, 0.95, 1.2, 1.05, 1.35, 1.28, 1.72, 2.48, 2.1],
    color: '#15803d',
    chartColor: '#15803d',
    description: 'Economic impact in billions',
  },
  {
    id: 'productivity-index',
    label: 'Productivity improvement index',
    value: 25,
    unit: '%',
    change: 50,
    changePeriod: 'vs last quarter',
    trend: 'up',
    // Dummy pattern to mimic alternating up/down spikes in the reference screenshot
    sparklineData: [12, 15, 14, 19, 18, 27, 30, 25, 12, 15, 14, 19, 18, 27, 30, 25, 12, 15, 14, 19, 18, 27, 30, 25],
    color: '#0284c7',
    chartColor: '#38bdf8',
    description: 'Productivity improvement percentage',
  },
  {
    id: 'health-indicators',
    label: 'Health improvement indicators',
    value: 31,
    unit: '%',
    change: 21,
    changePeriod: 'vs last quarter',
    trend: 'up',
    // Dummy pattern to mimic alternating up/down spikes in the reference screenshot
    sparklineData: [19, 23, 22, 26, 25, 31, 38, 31, 19, 23, 22, 26, 25, 31, 38, 31, 19, 23, 22, 26, 25, 31, 38, 31],
    color: '#ea580c',
    chartColor: '#fb923c',
    description: 'Health improvement percentage',
  },
]
