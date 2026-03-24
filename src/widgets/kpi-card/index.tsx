'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { alpha } from '@mui/material/styles'
import type { LucideIcon } from 'lucide-react'
import { TrendingUp, TrendingDown, Minus, Droplets, LineChart, Activity, HeartPulse } from 'lucide-react'
import { useCountUp } from '@/shared/hooks/use-count-up'
import type { KPIMetric, Period } from '@/shared/types'
import { Dropdown } from '@/shared/ui/dropdown'
import { CARD_BORDER_RADIUS_SX } from '@/core/theme/card-styles'

const SparklineChart = dynamic(() => import('@/widgets/sparkline-chart'), { ssr: false })

const CARD_PERIOD_OPTIONS: { label: string; value: Period }[] = [
  { label: '7 days', value: '7d' },
  { label: '30 days', value: '30d' },
  { label: '90 days', value: '90d' },
  { label: '1 year', value: '1y' },
]

const KPI_SECONDARY_ICONS: Record<string, LucideIcon> = {
  'water-secured': Droplets,
  'economic-impact': LineChart,
  'productivity-index': Activity,
  'health-indicators': HeartPulse,
}

interface KPICardProps {
  metric: KPIMetric
  index: number
  period: Period
}

interface SecondaryIconBadgeProps {
  metricId: string
  accentColor: string
}

const SecondaryIconBadge = ({ metricId, accentColor }: SecondaryIconBadgeProps) => {
  const Icon = KPI_SECONDARY_ICONS[metricId] ?? Activity
  return (
    <Box
      sx={{
        width: 40,
        height: 40,
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        bgcolor: alpha(accentColor, 0.14),
        color: accentColor,
      }}
    >
      <Icon size={20} strokeWidth={2} aria-hidden />
    </Box>
  )
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
  const trendColor =
    metric.trend === 'stable'
      ? hasDarkBg
        ? 'rgba(255,255,255,0.8)'
        : 'text.disabled'
      : changePositive
        ? hasDarkBg
          ? '#86efac'
          : 'success.main'
        : 'error.main'

  const chartColor = metric.chartColor ?? metric.color
  const chartHeightPrimary = 56
  const chartHeightSecondary = 50

  const chartBlockPrimary = (
    <Box
      sx={{
        flex: '1 1 38%',
        minWidth: { xs: 72, sm: 120 },
        maxWidth: '48%',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        height: chartHeightPrimary,
      }}
    >
      <SparklineChart data={metric.sparklineData} color={chartColor} height={chartHeightPrimary} variant="sparkline" />
    </Box>
  )

  const chartBlockSecondary = (
    <Box
      sx={{
        flex: '1 1 0',
        minWidth: { xs: 100, sm: 112 },
        maxWidth: { xs: '50%', sm: '48%' },
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        minHeight: 70,
      }}
    >
      <SparklineChart
        data={metric.sparklineData}
        color={chartColor}
        height={chartHeightSecondary}
        variant="labeledBars"
        columnWidth="80%"
        barBorderRadius={2}
      />
    </Box>
  )

  if (isPrimary) {
    return (
      <Box
        className="animate-slide-in-up"
        sx={(theme) => ({
          borderRadius: CARD_BORDER_RADIUS_SX,
          p: 2.5,
          display: 'flex',
          flexDirection: 'column',
          gap: 1.5,
          cursor: 'pointer',
          transition: 'box-shadow 0.2s',
          animationDelay: `${index * 80}ms`,
          border: '1px solid',
          minWidth: 0,
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box',
          borderColor: hasDarkBg ? 'rgba(47, 68, 106, 0.3)' : theme.palette.custom.border,
          ...(hasDarkBg
            ? { background: theme.palette.custom.kpiPrimaryGradient }
            : { bgcolor: 'background.paper', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }),
          '&:hover': { boxShadow: 3 },
        })}
      >
        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 1, minWidth: 0 }}>
          <Typography
            sx={{
              fontSize: '0.875rem',
              fontWeight: 500,
              lineHeight: 1.25,
              color: hasDarkBg ? 'rgba(255,255,255,0.9)' : 'text.secondary',
              minWidth: 0,
              flex: '1 1 auto',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {metric.label}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.25, fontSize: '0.75rem', fontWeight: 600, flexShrink: 0, color: trendColor }}>
            {metric.change > 0 ? '+' : ''}
            {metric.change}%
            {metric.trend === 'up' ? <TrendingUp size={12} aria-hidden /> : metric.trend === 'down' ? <TrendingDown size={12} aria-hidden /> : <Minus size={12} aria-hidden />}
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 1.5, minHeight: 56, minWidth: 0 }}>
          <Typography
            sx={{
              fontSize: { xs: '1.35rem', sm: '1.75rem' },
              fontWeight: 700,
              lineHeight: 1,
              flex: '0 1 auto',
              minWidth: 0,
              color: hasDarkBg ? '#fff' : metric.color,
            }}
          >
            {metric.prefix ?? ''}
            {count}
            {metric.unit ?? ''}
          </Typography>
          {chartBlockPrimary}
        </Box>
      </Box>
    )
  }

  const iconAccent = metric.chartColor ?? metric.color

  return (
    <Box
      className="animate-slide-in-up"
      role="group"
      aria-label={`${metric.label} KPI`}
      sx={{
        border: '1px solid',
        borderColor: 'custom.border',
        borderRadius: '16px',
        bgcolor: 'background.paper',
        boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 1.25,
        cursor: 'pointer',
        minWidth: 0,
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box',
        transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s',
        animationDelay: `${index * 80}ms`,
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 10px 20px rgba(0,0,0,0.15), 0 4px 6px rgba(0,0,0,0.1)',
          borderColor: '#cbd5e1',
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 1, minWidth: 0 }}>
        <SecondaryIconBadge metricId={metric.id} accentColor={iconAccent} />
        <Box sx={{ flexShrink: 0, minWidth: 0 }}>
          {metric.showPeriodDropdown ? (
            <Dropdown options={CARD_PERIOD_OPTIONS} value={cardPeriod} onChange={(v) => setCardPeriod(v as Period)} />
          ) : null}
        </Box>
      </Box>
      <Typography
        sx={{
          fontSize: '0.8125rem',
          color: 'text.secondary',
          fontWeight: 500,
          lineHeight: 1.35,
          minWidth: 0,
        }}
      >
        {metric.label}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 1.5, minWidth: 0, mt: 'auto' }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: 1, columnGap: 1.25, minWidth: 0, flex: '0 1 auto' }}>
          <Typography
            component="span"
            sx={{
              fontSize: { xs: '1.25rem', sm: '1.5rem' },
              fontWeight: 700,
              lineHeight: 1.1,
              color: metric.color,
            }}
          >
            {metric.prefix ?? ''}
            {count}
            {metric.unit ?? ''}
          </Typography>
          <Box
            component="span"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 0.25,
              fontSize: '0.75rem',
              fontWeight: 600,
              color: trendColor,
            }}
          >
            {metric.change > 0 ? '+' : ''}
            {metric.change}%
            {metric.trend === 'up' ? <TrendingUp size={12} aria-hidden /> : metric.trend === 'down' ? <TrendingDown size={12} aria-hidden /> : <Minus size={12} aria-hidden />}
          </Box>
        </Box>
        {chartBlockSecondary}
      </Box>
    </Box>
  )
}
