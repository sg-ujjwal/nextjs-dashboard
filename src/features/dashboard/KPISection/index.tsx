'use client'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { KPI_PRIMARY, KPI_SECONDARY } from '@/services/kpiData'
import { KPICard } from '@/components/cards/KPICard'
import { Dropdown } from '@/components/common/Dropdown'
import { usePeriodSelector } from '@/hooks/usePeriodSelector'
import { CARD_BORDER_RADIUS_SX } from '@/theme/cardStyles'

export default function KPISection() {
  const { period, periods, handleChange } = usePeriodSelector()

  return (
    <Box component="section" sx={{ width: '100%', minWidth: 0 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Box>
          <Typography sx={{ fontSize: '1.25rem', fontWeight: 600, letterSpacing: '-0.02em', color: 'text.primary' }}>
            Executive Control Room
          </Typography>
          <Typography
            sx={{
              fontSize: '0.875rem',
              mt: 0.5,
              color: 'text.secondary',
              borderBottom: '1px solid #6486C4',
              display: 'inline-block',
              pb: 0.25,
            }}
          >
            Strategic Overview & Impact Posture
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography sx={{ fontSize: '0.75rem', fontWeight: 500, color: 'text.secondary' }}>System Status</Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                borderRadius: CARD_BORDER_RADIUS_SX,
                px: 1.5,
                py: 0.5,
                bgcolor: 'rgba(34, 197, 94, 0.1)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  bgcolor: '#22c55e',
                  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                }}
              />
              <Typography sx={{ fontSize: '0.75rem', fontWeight: 500, color: '#22c55e' }}>Live Monitoring</Typography>
            </Box>
          </Box>
          <Dropdown options={periods} value={period} onChange={handleChange} />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'minmax(0, 1fr)', md: 'repeat(2, minmax(0, 1fr))' },
          gap: 2,
          mb: 2,
          width: '100%',
        }}
      >
        {KPI_PRIMARY.map((metric, i) => (
          <Box key={metric.id} sx={{ minWidth: 0, maxWidth: '100%' }}>
            <KPICard metric={{ ...metric, isPrimary: true }} index={i} period={period} />
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'minmax(0, 1fr)',
            sm: 'repeat(2, minmax(0, 1fr))',
            md: 'repeat(4, minmax(0, 1fr))',
          },
          gap: 2,
          width: '100%',
        }}
      >
        {KPI_SECONDARY.map((metric, i) => (
          <Box key={metric.id} sx={{ minWidth: 0, maxWidth: '100%' }}>
            <KPICard metric={metric} index={i + 2} period={period} />
          </Box>
        ))}
      </Box>
    </Box>
  )
}
