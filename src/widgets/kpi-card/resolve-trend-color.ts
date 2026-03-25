import type { KPIMetric } from '@/shared/types'

export const resolveTrendColor = (metric: KPIMetric, hasDarkBg: boolean): string => {
  const changePositive = metric.change > 0
  if (metric.trend === 'stable') {
    return hasDarkBg ? 'rgba(255,255,255,0.8)' : 'text.disabled'
  }
  if (changePositive) {
    return hasDarkBg ? '#86efac' : 'success.main'
  }
  return 'error.main'
}
