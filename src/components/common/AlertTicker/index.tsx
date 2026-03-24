'use client'
import { ALERT_TICKER } from '@/services/dashboardData'
import { cn } from '@/utils/cn'
import { AlertTriangle, Info, Zap } from 'lucide-react'

const severityStyles = {
  critical: 'text-[#dc2626]',
  high:     'text-[#dc2626]',
  medium:   'text-[#b91c1c]',
  low:      'text-[#64748b]',
}

const SeverityIcon = ({ s }: { s: string }) => {
  if (s === 'critical' || s === 'high') return <AlertTriangle size={12} />
  if (s === 'medium') return <Zap size={12} />
  return <Info size={12} />
}

export function AlertTicker() {
  const items = [...ALERT_TICKER, ...ALERT_TICKER]

  return (
    <div className="w-full bg-white border-b border-[#e2e8f0] overflow-hidden relative">
      <div className="flex items-center">
        <div className="shrink-0 px-4 py-2 bg-white border-r border-[#e2e8f0] flex items-center gap-2">
          <span className="w-2 h-2 bg-[#ef4444] rounded-full animate-pulse" />
          <span className="text-xs font-semibold text-[#dc2626] uppercase tracking-wider">Live Feed</span>
        </div>
        <div className="overflow-hidden flex-1 bg-white">
          <div className="flex items-center animate-ticker whitespace-nowrap gap-10 py-2 px-4">
            {items.map((item, idx) => (
              <span
                key={`${item.id}-${idx}`}
                className={cn('flex items-center gap-2 text-xs', severityStyles[item.severity as keyof typeof severityStyles])}
              >
                <SeverityIcon s={item.severity} />
                <span className="text-[#94a3b8]">[{item.region}]</span>
                {item.message}
                <span className="text-[#94a3b8]">— {item.timestamp}</span>
                <span className="text-[#e2e8f0] px-4">|</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
