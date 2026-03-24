'use client'
import { DollarSign, Globe, Users, ShieldAlert, TrendingUp, TrendingDown } from 'lucide-react'
import { ProgressBar } from '@/components/common/ProgressBar'
import { useCountUp } from '@/hooks/useCountUp'

interface StatCardProps {
  label: string
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  change: number
  changeLabel: string
  icon: React.ElementType
  color: string
  index: number
}

function StatCard({ label, value, prefix, suffix, decimals = 0, change, changeLabel, icon: Icon, color, index }: StatCardProps) {
  const count = useCountUp({ end: value, duration: 1500, delay: index * 120, decimals })
  const isPositive = change > 0

  return (
    <div className="bg-bg-elevated rounded-lg p-4 border border-bg-border hover:border-slate-300 transition-all duration-200 cursor-pointer hover:-translate-y-0.5">
      <div className="flex items-center justify-between mb-3">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${color}15` }}>
          <Icon size={16} style={{ color }} />
        </div>
        <div className={`flex items-center gap-0.5 text-xs font-semibold ${isPositive ? 'text-success' : 'text-danger'}`}>
          {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          {isPositive ? '+' : ''}{change}%
        </div>
      </div>
      <p className="text-2xl font-bold text-text-primary leading-none mb-1">
        {prefix}{count}{suffix}
      </p>
      <p className="text-xs text-text-muted">{label}</p>
      <p className="text-xs text-text-muted mt-1">{changeLabel}</p>
    </div>
  )
}

const STATS: StatCardProps[] = [
  { label: 'Total Budget Deployed', value: 50.4, prefix: '$', suffix: 'M', decimals: 1, change: 12.5, changeLabel: 'vs last quarter', icon: DollarSign, color: '#22c55e', index: 0 },
  { label: 'Population Covered', value: 2.1, prefix: '', suffix: 'B', decimals: 1, change: 8.3, changeLabel: 'global reach', icon: Globe, color: '#00d4ff', index: 1 },
  { label: 'Aid Distribution Rate', value: 25, prefix: '', suffix: '%', decimals: 0, change: -3.2, changeLabel: 'needs improvement', icon: Users, color: '#f59e0b', index: 2 },
  { label: 'Threat Mitigation', value: 37, prefix: '', suffix: '%', decimals: 0, change: 5.8, changeLabel: 'above target', icon: ShieldAlert, color: '#a855f7', index: 3 },
]

export default function OperationalSummary() {
  return (
    <div className="card-base p-5 h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-text-primary">Operational Overview</h3>
        <p className="text-xs text-text-muted mt-0.5">Key financial & impact metrics</p>
      </div>
      <div className="grid grid-cols-2 gap-3 flex-1">
        {STATS.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
      <div className="mt-4 space-y-3">
        <ProgressBar label="Budget Utilization" value={74} color="#22c55e" size="sm" />
        <ProgressBar label="Mission Completion" value={68} color="#1677ff" size="sm" />
        <ProgressBar label="Resource Allocation" value={82} color="#a855f7" size="sm" />
      </div>
    </div>
  )
}
