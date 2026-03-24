'use client'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { useCountUp } from '@/hooks/useCountUp'
import { cn } from '@/utils/cn'
import type { KPIMetric, Period } from '@/types'
import { Dropdown } from '@/components/common/Dropdown'

const SparklineChart = dynamic(() => import('@/components/charts/SparklineChart'), { ssr: false })

const CARD_PERIOD_OPTIONS: { label: string; value: Period }[] = [
  { label: '7 days', value: '7d' },
  { label: '30 days', value: '30d' },
  { label: '90 days', value: '90d' },
  { label: '1 year', value: '1y' },
]

interface KPICardProps {
  metric: KPIMetric
  index: number
  period: Period
}

export function KPICard({ metric, index, period }: KPICardProps) {
  const [cardPeriod, setCardPeriod] = useState<Period>('7d')
  const count = useCountUp({
    end: metric.value,
    duration: 1500,
    delay: index * 100,
    decimals: metric.value % 1 !== 0 ? 1 : 0,
  })

  const isPrimary = metric.isPrimary ?? false
  const hasDarkBg = (metric.hasDarkBackground ?? true) && isPrimary
  const changePositive = metric.change > 0
  const trendColor = metric.trend === 'stable'
    ? hasDarkBg ? 'text-white/80' : 'text-text-muted'
    : changePositive
      ? 'text-success'
      : 'text-danger'

  const chartColor = metric.chartColor ?? metric.color
  const chartHeight = isPrimary ? 56 : 48

  const chartBlock = (
    <div
      className={cn(
        'shrink-0 flex items-end justify-end overflow-hidden',
        isPrimary ? 'w-[42%] min-w-[120px] h-14' : 'w-[42%] min-w-[90px] h-12'
      )}
    >
      <SparklineChart data={metric.sparklineData} color={chartColor} height={chartHeight} />
    </div>
  )

  if (isPrimary) {
    return (
      <div
        className={cn(
          'rounded-xl p-5 flex flex-col gap-3 cursor-pointer animate-slide-in-up hover:shadow-lg transition-all duration-200',
          hasDarkBg ? 'border border-[#2F446A]/30' : 'card-base border border-bg-border'
        )}
        style={{
          animationDelay: `${index * 80}ms`,
          ...(hasDarkBg
            ? { background: 'radial-gradient(152.14% 265.63% at 50% 50%, #466192 0%, #2F446A 100%)' }
            : {}),
        }}
      >
        <div className="flex items-start justify-between gap-2">
          <p
            className={cn(
              'text-sm font-medium leading-tight',
              hasDarkBg ? 'text-white/90' : 'text-text-secondary'
            )}
          >
            {metric.label}
          </p>
          <div className={cn('text-xs flex items-center gap-0.5 font-semibold shrink-0', trendColor)}>
            {metric.trend === 'up' ? <TrendingUp size={12} /> : metric.trend === 'down' ? <TrendingDown size={12} /> : <Minus size={12} />}
            {metric.change > 0 ? '+' : ''}{metric.change}%
          </div>
        </div>
        <div className="flex items-end justify-between gap-4 min-h-14">
          <span
            className="text-3xl font-bold leading-none shrink-0"
            style={hasDarkBg ? { color: '#ffffff' } : { color: metric.color }}
          >
            {metric.prefix ?? ''}{count}{metric.unit ?? ''}
          </span>
          {chartBlock}
        </div>
      </div>
    )
  }

  return (
    <div
      className="card-base card-hover p-4 flex flex-col gap-3 cursor-pointer animate-slide-in-up"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="flex items-start justify-between gap-2">
        <p className="text-xs text-text-secondary font-medium leading-tight">{metric.label}</p>
        <div className="flex items-center gap-2 shrink-0">
          {metric.showPeriodDropdown && (
            <Dropdown
              options={CARD_PERIOD_OPTIONS}
              value={cardPeriod}
              onChange={(v) => setCardPeriod(v as Period)}
              className="shrink-0"
            />
          )}
          <div className={cn('text-xs flex items-center gap-0.5 font-semibold shrink-0', trendColor)}>
            {metric.trend === 'up' ? <TrendingUp size={12} /> : metric.trend === 'down' ? <TrendingDown size={12} /> : <Minus size={12} />}
            {metric.change > 0 ? '+' : ''}{metric.change}%
          </div>
        </div>
      </div>
      <div className="flex items-end justify-between gap-4 min-h-12">
        <span className="text-3xl font-bold leading-none shrink-0" style={{ color: metric.color }}>
          {metric.prefix ?? ''}{count}{metric.unit ?? ''}
        </span>
        {chartBlock}
      </div>
      <p className="text-xs text-text-muted">{metric.changePeriod}</p>
    </div>
  )
}
