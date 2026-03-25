'use client'

import Image from 'next/image'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { ChevronLeft } from 'lucide-react'

export type HeaderBrandBlockProps = {
  sidebarCollapsed: boolean
  onToggleSidebar: () => void
}

export const HeaderBrandBlock = ({ sidebarCollapsed, onToggleSidebar }: HeaderBrandBlockProps) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.75, sm: 1.25 }, flexShrink: 0, minWidth: 0 }}>
    <Box
      component="span"
      sx={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: { xs: 24, sm: 28 },
        height: { xs: 24, sm: 28 },
        flexShrink: 0,
      }}
      aria-hidden
    >
      <Image
        src="/brand-logo.png"
        alt=""
        width={28}
        height={28}
        priority
        sizes="28px"
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </Box>
    <Typography
      sx={{
        color: '#fff',
        fontWeight: 700,
        fontSize: { xs: '1rem', sm: '1.125rem' },
        letterSpacing: '-0.02em',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: { xs: '42vw', sm: 'none' },
      }}
      component="span"
    >
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
        width: 20,
        height: 20,
        boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
        '&:hover': { bgcolor: 'rgba(255,255,255,0.92)', color: 'custom.headerBar' },
      }}
    >
      <ChevronLeft
        size={8}
        style={{
          transform: sidebarCollapsed ? 'rotate(180deg)' : undefined,
          transition: 'transform 0.25s ease',
        }}
      />
    </IconButton>
  </Box>
)
