'use client'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { MAP_HEADER_GRADIENT } from './map-section-constants'

export const MapSectionHeader = () => (
  <Box sx={{ px: 2.5, py: 2, color: '#fff', background: MAP_HEADER_GRADIENT }}>
    <Typography sx={{ fontSize: '1rem', fontWeight: 700, lineHeight: 1.25 }}>Geographic Impact Distribution</Typography>
    <Typography sx={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.85)', mt: 0.5 }}>
      Real-time deployment scale and risk heat overlay
    </Typography>
  </Box>
)
