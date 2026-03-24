export interface MapMarker {
  id: string
  country: string
  capital: string
  lat: number
  lng: number
  riskLevel: 'low' | 'medium' | 'high' | 'critical'
  riskScore: number
  region: string
  population?: string
  metrics: {
    stability: number
    economic: number
    security: number
    environmental: number
  }
  activeOperations: number
  lastIncident?: string
  trend: 'improving' | 'declining' | 'stable'
  /** Water-specific: deployment status */
  deploymentStatus?: 'deployed' | 'in_progress' | 'pending'
  /** Water-specific: water scarcity % */
  waterScarcity?: number
  /** Water-specific: capital deployed $M */
  capitalDeployed?: number
  /** Water-specific: impact score % */
  impactScore?: number
  /** Water-specific: infrastructure score /100 */
  infrastructure?: number
  /** Water-specific: active deployment description */
  activeDeployment?: string
}

export interface MapRegion {
  id: string
  name: string
  bounds: [[number, number], [number, number]]
  markerCount: number
  avgRiskScore: number
}
