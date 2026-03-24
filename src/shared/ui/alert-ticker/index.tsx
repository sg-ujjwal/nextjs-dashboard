'use client'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { ALERT_TICKER } from '@/modules/dashboard/services/dashboard-data'
import { AlertTriangle, Info, Zap } from 'lucide-react'

const SEVERITY_COLOR: Record<string, string> = {
  critical: '#dc2626',
  high: '#dc2626',
  medium: '#b91c1c',
  low: '#64748b',
}

const SeverityIcon = ({ s }: { s: string }) => {
  if (s === 'critical' || s === 'high') return <AlertTriangle size={12} />
  if (s === 'medium') return <Zap size={12} />
  return <Info size={12} />
}

export function AlertTicker() {
  const items = [...ALERT_TICKER, ...ALERT_TICKER]

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'custom.border', overflow: 'hidden', position: 'relative' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box
          sx={{
            flexShrink: 0,
            px: 2,
            py: 1,
            bgcolor: 'background.paper',
            borderRight: '1px solid',
            borderColor: 'custom.border',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Box
            sx={{
              width: 8,
              height: 8,
              bgcolor: 'error.main',
              borderRadius: '50%',
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }}
          />
          <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: '#dc2626', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Live Feed
          </Typography>
        </Box>
        <Box sx={{ overflow: 'hidden', flex: 1, bgcolor: 'background.paper' }}>
          <Box className="animate-ticker" sx={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap', gap: 5, py: 1, px: 2 }}>
            {items.map((item, idx) => (
              <Box
                key={`${item.id}-${idx}`}
                component="span"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, fontSize: '0.75rem', color: SEVERITY_COLOR[item.severity] ?? '#64748b' }}
              >
                <SeverityIcon s={item.severity} />
                <Typography component="span" sx={{ fontSize: 'inherit', color: '#94a3b8' }}>
                  [{item.region}]
                </Typography>
                {item.message}
                <Typography component="span" sx={{ fontSize: 'inherit', color: '#94a3b8' }}>
                  — {item.timestamp}
                </Typography>
                <Typography component="span" sx={{ fontSize: 'inherit', color: 'custom.border', px: 2 }}>
                  |
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
