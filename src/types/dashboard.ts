export type RiskLevel = 'low' | 'medium' | 'high' | 'critical'
export type TrendDirection = 'up' | 'down' | 'stable'
export type Period = '7d' | '30d' | '90d' | '1y'

export interface AlertItem {
  id: string
  message: string
  severity: RiskLevel
  timestamp: string
  region?: string
}

export interface Forecast {
  id: string
  title: string
  description: string
  probability: number
  impact: RiskLevel
  timeframe: string
  borderColor: string
}

export interface PriorityCard {
  id: string
  rank: number
  title: string
  region: string
  score: number
  trend: TrendDirection
  description: string
  actions: string[]
}

export interface DeploymentAlert {
  id: string
  title: string
  message: string
  severity: 'warning' | 'critical'
  timestamp: string
  affectedRegions: string[]
}
