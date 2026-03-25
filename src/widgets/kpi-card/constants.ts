import type { LucideIcon } from 'lucide-react'
import { Droplets, LineChart, Activity, HeartPulse } from 'lucide-react'
import type { Period } from '@/shared/types'

export const CARD_PERIOD_OPTIONS: { label: string; value: Period }[] = [
  { label: '7 days', value: '7d' },
  { label: '30 days', value: '30d' },
  { label: '90 days', value: '90d' },
  { label: '1 year', value: '1y' },
]

export const KPI_SECONDARY_ICONS: Record<string, LucideIcon> = {
  'water-secured': Droplets,
  'economic-impact': LineChart,
  'productivity-index': Activity,
  'health-indicators': HeartPulse,
}
