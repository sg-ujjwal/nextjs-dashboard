'use client'

import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { ChevronLeft, Waves } from 'lucide-react'

export type HeaderBrandBlockProps = {
  sidebarCollapsed: boolean
  onToggleSidebar: () => void
}

export const HeaderBrandBlock = ({ sidebarCollapsed, onToggleSidebar }: HeaderBrandBlockProps) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, flexShrink: 0 }}>
    <Waves size={22} color="#ffffff" strokeWidth={2} aria-hidden />
    <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '1.125rem', letterSpacing: '-0.02em' }} component="span">
      AquaImpact
    </Typography>
    <IconButton
      onClick={onToggleSidebar}
      aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      size="small"
      sx={{
        color: 'custom.headerBar',
        bgcolor: '#fff',
        borderRadius: 1,
        width: 36,
        height: 36,
        boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
        '&:hover': { bgcolor: 'rgba(255,255,255,0.92)', color: 'custom.headerBar' },
      }}
    >
      <ChevronLeft
        size={18}
        style={{
          transform: sidebarCollapsed ? 'rotate(180deg)' : undefined,
          transition: 'transform 0.25s ease',
        }}
      />
    </IconButton>
  </Box>
)
