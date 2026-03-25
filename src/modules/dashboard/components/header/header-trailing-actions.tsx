'use client'

import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { Moon } from 'lucide-react'

export const HeaderTrailingActions = () => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
    <IconButton
      aria-label="Toggle dark mode"
      sx={{ color: 'rgba(255,255,255,0.85)', '&:hover': { color: '#fff', bgcolor: 'rgba(255,255,255,0.1)' } }}
    >
      <Moon size={20} />
    </IconButton>
    <Box
      sx={{
        width: 40,
        height: 40,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #5b8fd4 0%, #7c9fd9 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        border: '2px solid rgba(255,255,255,0.35)',
        boxSizing: 'border-box',
      }}
    >
      <Typography sx={{ color: '#fff', fontSize: '0.8rem', fontWeight: 600 }}>U</Typography>
    </Box>
  </Box>
)
