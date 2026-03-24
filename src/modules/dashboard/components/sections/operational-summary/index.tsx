'use client'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { DollarSign, Globe, Users, ShieldAlert, TrendingUp, TrendingDown } from 'lucide-react'
import { ProgressBar } from '@/shared/ui/progress-bar'
import { useCountUp } from '@/shared/hooks/use-count-up'
import { CARD_BORDER_RADIUS_SX } from '@/core/theme/card-styles'

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

const StatCard = ({ label, value, prefix, suffix, decimals = 0, change, changeLabel, icon: Icon, color, index }: StatCardProps) => {
  const count = useCountUp({ end: value, duration: 1500, delay: index * 120, decimals })
  const isPositive = change > 0

  return (
    <Box
      sx={{
        bgcolor: 'custom.bgElevated',
        borderRadius: CARD_BORDER_RADIUS_SX,
        p: 2,
        border: '1px solid',
        borderColor: 'custom.border',
        transition: 'border-color 0.2s, transform 0.2s',
        cursor: 'pointer',
        '&:hover': { borderColor: '#cbd5e1', transform: 'translateY(-2px)' },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
        <Box
          sx={{
            width: 32,
            height: 32,
            borderRadius: CARD_BORDER_RADIUS_SX,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: `${color}26`,
          }}
        >
          <Icon size={16} style={{ color }} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.25, fontSize: '0.75rem', fontWeight: 600, color: isPositive ? 'success.main' : 'error.main' }}>
          {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          {isPositive ? '+' : ''}
          {change}%
        </Box>
      </Box>
      <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: 'text.primary', lineHeight: 1, mb: 0.5 }}>
        {prefix}
        {count}
        {suffix}
      </Typography>
      <Typography sx={{ fontSize: '0.75rem', color: 'text.disabled' }}>{label}</Typography>
      <Typography sx={{ fontSize: '0.75rem', color: 'text.disabled', mt: 0.5 }}>{changeLabel}</Typography>
    </Box>
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
    <Box
      sx={{
        border: '1px solid',
        borderColor: 'custom.border',
        borderRadius: CARD_BORDER_RADIUS_SX,
        bgcolor: 'background.paper',
        boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
        p: 2.5,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ mb: 2 }}>
        <Typography sx={{ fontSize: '0.875rem', fontWeight: 600, color: 'text.primary' }}>Operational Overview</Typography>
        <Typography sx={{ fontSize: '0.75rem', color: 'text.disabled', mt: 0.5 }}>Key financial & impact metrics</Typography>
      </Box>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1.5, flex: 1 }}>
        {STATS.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </Box>
      <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        <ProgressBar label="Budget Utilization" value={74} color="#22c55e" size="sm" />
        <ProgressBar label="Mission Completion" value={68} color="#1677ff" size="sm" />
        <ProgressBar label="Resource Allocation" value={82} color="#a855f7" size="sm" />
      </Box>
    </Box>
  )
}
