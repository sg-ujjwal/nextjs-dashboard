import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import type { SxProps, Theme } from '@mui/material/styles'

interface ProgressBarProps {
  value: number
  max?: number
  color?: string
  label?: string
  showValue?: boolean
  size?: 'sm' | 'md' | 'lg'
  sx?: SxProps<Theme>
}

const HEIGHT = { sm: 4, md: 8, lg: 12 }

export function ProgressBar({
  value,
  max = 100,
  color = '#00d4ff',
  label,
  showValue = true,
  size = 'md',
  sx,
}: ProgressBarProps) {
  const pct = Math.min(Math.max((value / max) * 100, 0), 100)
  const h = HEIGHT[size]

  return (
    <Box sx={{ width: '100%', ...sx }}>
      {(label || showValue) && (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
          {label && (
            <Typography variant="caption" color="text.secondary">
              {label}
            </Typography>
          )}
          {showValue && (
            <Typography variant="caption" color="text.primary" fontWeight={500}>
              {Math.round(pct)}%
            </Typography>
          )}
        </Box>
      )}
      <Box sx={{ width: '100%', bgcolor: '#f1f5f9', borderRadius: 9999, overflow: 'hidden', height: h }}>
        <Box
          sx={{
            height: '100%',
            borderRadius: 9999,
            transition: 'width 0.7s ease-out',
            width: `${pct}%`,
            bgcolor: color,
          }}
        />
      </Box>
    </Box>
  )
}
