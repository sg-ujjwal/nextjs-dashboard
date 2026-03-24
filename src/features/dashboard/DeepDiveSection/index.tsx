'use client'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { DEEP_DIVE_CARDS } from '@/services/dashboardData'
import { DeepDiveCard } from '@/components/cards/DeepDiveCard'

export default function DeepDiveSection() {
  return (
    <Box component="section">
      <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: 'text.primary', mb: 2 }}>Deep Dive</Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)' }, gap: 2 }}>
        {DEEP_DIVE_CARDS.map((card, i) => (
          <DeepDiveCard key={card.id} card={card} index={i} />
        ))}
      </Box>
    </Box>
  )
}
