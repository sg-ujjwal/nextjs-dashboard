import { cn } from '@/utils/cn'

interface ProgressBarProps {
  value: number
  max?: number
  color?: string
  label?: string
  showValue?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizes = { sm: 'h-1', md: 'h-2', lg: 'h-3' }

export function ProgressBar({
  value, max = 100, color = '#00d4ff', label, showValue = true, size = 'md', className,
}: ProgressBarProps) {
  const pct = Math.min(Math.max((value / max) * 100, 0), 100)

  return (
    <div className={cn('w-full', className)}>
      {(label || showValue) && (
        <div className="flex justify-between mb-1">
          {label && <span className="text-xs text-text-secondary">{label}</span>}
          {showValue && <span className="text-xs text-text-primary font-medium">{Math.round(pct)}%</span>}
        </div>
      )}
      <div className={cn('w-full bg-slate-100 rounded-full overflow-hidden', sizes[size])}>
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
    </div>
  )
}
