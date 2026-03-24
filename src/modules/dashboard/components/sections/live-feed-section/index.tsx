'use client'

import Box from '@mui/material/Box'
import { AlertTicker } from '@/shared/ui/alert-ticker'
import { CARD_BORDER_RADIUS_SX } from '@/core/theme/card-styles'

export default function LiveFeedSection() {
  return (
    <Box
      component="section"
      sx={{
        borderRadius: CARD_BORDER_RADIUS_SX,
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'custom.border',
        bgcolor: 'background.paper',
        boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
      }}
    >
      <AlertTicker />
    </Box>
  )
}
