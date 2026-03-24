import type { Forecast, PriorityCard, DeploymentAlert, AlertItem } from '@/shared/types'

export const FORECASTS: Forecast[] = [
  { id: '1', title: 'Emerging Water Stress Hotspot', description: 'Southeast Asia delta regions showing accelerated depletion — recommend preemptive irrigation upgrades', probability: 78, impact: 'high', timeframe: '60 days', borderColor: '#ef4444' },
  { id: '2', title: 'Climate Mitigation Opportunity', description: 'Sahel region rainfall patterns favorable for groundwater recharge — ideal window for borehole expansion', probability: 83, impact: 'medium', timeframe: '30 days', borderColor: '#3b82f6' },
]




export const PRIORITY_CARDS: PriorityCard[] = [
  { id: 'p1', rank: 1, title: 'Nigeria Water Grid', region: 'West Africa', score: 9.2, trend: 'up', description: 'Deployment index below target. Urgent intervention suggested.', actions: ['Approve Phase II funding', 'Deploy assessment team', 'Coordinate with Ministry'] },
  { id: 'p2', rank: 2, title: 'Kenya Hub Phase II', region: 'East Africa', score: 8.5, trend: 'down', description: 'Logistics bottlenecks impacting timeline. Assessment required.', actions: ['Review logistics', 'Validate timeline'] },
  { id: 'p3', rank: 3, title: 'Brazil Agritech Expansion', region: 'South America', score: 8.8, trend: 'up', description: 'Irrigation efficiency program for drought-affected farming regions.', actions: ['Stakeholder alignment', 'Pilot site selection'] },
]

export const DEPLOYMENT_ALERTS: DeploymentAlert[] = [
  {
    id: 'da1',
    title: 'Underperforming Deployment Alert',
    message: 'Kenya Hub Phase II is experiencing logistics bottlenecks at the Mombasa port. Current timeline slippage is 14 days, impacting 250k potential beneficiaries.',
    severity: 'warning',
    timestamp: new Date().toISOString(),
    affectedRegions: ['East Africa', 'Kenya'],
  },
]

export const ALERT_TICKER: AlertItem[] = [
  { id: 'a1', message: 'Portfolio Overexposed to East African Climate Risk', severity: 'critical', timestamp: '2 min ago', region: 'East Africa' },
  { id: 'a2', message: 'Severe Drought Intensifying in Horn of Africa', severity: 'high', timestamp: '18 min ago', region: 'Horn of Africa' },
  { id: 'a3', message: 'Political Instability Escalating in Pakistan', severity: 'high', timestamp: '1 hr ago', region: 'Pakistan' },
  { id: 'a4', message: 'Political Instability Escalating in Pakistan', severity: 'high', timestamp: '2 hr ago', region: 'Pakistan' },
]

export const STRATEGIC_FORECASTING = [
  { id: 'sf1', title: 'Emerging Water Stress Hotspot', description: '"Satellite telemetry indicates 22% drop in water table levels in Northern Tigray. Projected crisis within 18 months."', color: '#ef4444' },
  { id: 'sf2', title: 'Climate Mitigation Opportunity', description: '"Projected rainfall shifts in Central America offer a 3-year window for reforestation ROI to exceed initial estimates by 45%."', color: '#93c5fd' },
]

export const PERFORMANCE_CARDS = [
  {
    id: 'best',
    type: 'best' as const,
    title: 'Best Performer',
    deployment: 'Kenya — Solar-Powered Well Network',
    change: 15.6,
    trend: 'up' as const,
  },
  {
    id: 'attention',
    type: 'attention' as const,
    title: 'Needs Attention',
    deployment: 'Mozambique — Coastal Desalination Pilot',
    change: 50.6,
    trend: 'down' as const,
  },
]

export const DEEP_DIVE_CARDS = [
  {
    id: 'country-prioritization',
    title: 'Country Prioritization',
    subtitle: 'Identify strategic regions for next deployment phase.',
    icon: 'globe',
    accentColor: '#1677ff',
    stats: [
      { label: 'Active countries', value: '22', valueColor: '#1677ff' as const },
      { label: 'Pending Review', value: '7', valueColor: '#1677ff' as const },
    ],
    progressValue: 68,
    cta: 'View Rankings',
  },
  {
    id: 'deployment-performance',
    title: 'Deployment Performance',
    subtitle: 'Track technical KPIs and logistical typical milestones.',
    icon: 'bar-chart',
    accentColor: '#22c55e',
    stats: [
      { label: 'Efficiency Score', value: '92%', valueColor: '#22c55e' as const },
      { label: 'vs Last Quarter', value: '+8.2%', valueColor: '#22c55e' as const },
    ],
    progressValue: 92,
    cta: 'Analyze Metrics',
  },
  {
    id: 'proposal-assessment',
    title: 'Proposal Assessment',
    subtitle: 'Review and score incoming venture applications.',
    icon: 'network',
    accentColor: '#f59e0b',
    stats: [
      { label: 'Awaiting Review', value: '8', valueColor: '#f59e0b' as const },
      { label: 'Approved This Month', value: '34', valueColor: '#f59e0b' as const },
    ],
    progressValue: 78,
    cta: 'Review Proposals',
  },
  {
    id: 'intelligence-hub',
    title: 'Intelligence Hub',
    subtitle: 'Access global datasets and research documents.',
    icon: 'file',
    accentColor: '#a855f7',
    stats: [
      { label: 'Beneficiaries Supported', value: '142', valueColor: '#a855f7' as const },
      { label: 'AI Insights', value: '12 New', valueColor: '#a855f7' as const },
    ],
    progressValue: 87,
    cta: 'Explore Hub',
  },
]
