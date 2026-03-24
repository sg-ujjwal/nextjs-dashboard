import { cn } from '@/utils/cn'
import type { RiskLevel } from '@/types'

interface BadgeProps {
  level: RiskLevel | 'info'
  label?: string
  className?: string
}

const variants = {
  low:      'bg-success-muted text-success border-success/20',
  medium:   'bg-warning-muted text-warning border-warning/20',
  high:     'bg-danger-muted  text-danger  border-danger/20',
  critical: 'bg-red-50        text-red-600 border-red-200',
  info:     'bg-info-muted    text-info    border-info/20',
} as const

const dots = {
  low:      'bg-success',
  medium:   'bg-warning',
  high:     'bg-danger',
  critical: 'bg-red-600 animate-pulse',
  info:     'bg-info',
}

export function Badge({ level, label, className }: BadgeProps) {
  return (
    <span className={cn(
      'inline-flex items-center gap-1.5 text-xs font-medium px-2 py-0.5 rounded-full border',
      variants[level], className
    )}>
      <span className={cn('w-1.5 h-1.5 rounded-full', dots[level])} />
      {label ?? level.charAt(0).toUpperCase() + level.slice(1)}
    </span>
  )
}
