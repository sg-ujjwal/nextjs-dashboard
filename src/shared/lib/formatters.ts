export function formatNumber(value: number, decimals = 0): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(decimals)}M`
  if (value >= 1_000)     return `${(value / 1_000).toFixed(decimals)}K`
  return value.toFixed(decimals)
}

export function formatCurrency(value: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(value)
}

export function formatPercent(value: number, decimals = 1): string {
  return `${value >= 0 ? '+' : ''}${value.toFixed(decimals)}%`
}

export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
  }).format(new Date(date))
}

export function formatTime(date: Date | string): string {
  return new Intl.DateTimeFormat('en-US', {
    hour: '2-digit', minute: '2-digit', timeZoneName: 'short',
  }).format(new Date(date))
}

export function getRiskColor(level: 'low' | 'medium' | 'high' | 'critical'): string {
  const map = { low: '#22c55e', medium: '#f59e0b', high: '#ef4444', critical: '#dc2626' }
  return map[level]
}

export function getTrendIcon(trend: 'up' | 'down' | 'stable'): string {
  const map = { up: '↑', down: '↓', stable: '→' }
  return map[trend]
}
