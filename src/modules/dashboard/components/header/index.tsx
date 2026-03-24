'use client'

import { useState } from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import Typography from '@mui/material/Typography'
import { ChevronLeft, Moon, Search, Waves } from 'lucide-react'

interface HeaderProps {
  sidebarCollapsed: boolean
  onToggleSidebar: () => void
}

export const Header = ({ sidebarCollapsed, onToggleSidebar }: HeaderProps) => {
  const [searching, setSearching] = useState(false)

  return (
    <Box
      component="header"
      sx={{
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 2.5,
        flexShrink: 0,
        borderBottom: '1px solid',
        borderColor: 'custom.headerBorder',
        bgcolor: 'custom.headerBar',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, minWidth: 0 }}>
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
              color: '#fff',
              bgcolor: 'rgba(0,0,0,0.22)',
              borderRadius: 1,
              width: 36,
              height: 36,
              '&:hover': { bgcolor: 'rgba(0,0,0,0.35)' },
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

        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            gap: 1,
            bgcolor: 'rgba(255,255,255,0.1)',
            border: '1px solid',
            borderColor: searching ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.2)',
            borderRadius: 2,
            transition: 'width 0.3s, border-color 0.3s',
            width: searching ? 280 : 200,
            ml: 1,
          }}
        >
          <Search size={16} style={{ marginLeft: 12, color: 'rgba(255,255,255,0.65)', flexShrink: 0 }} aria-hidden />
          <InputBase
            placeholder="Search..."
            onFocus={() => setSearching(true)}
            onBlur={() => setSearching(false)}
            sx={{
              flex: 1,
              color: '#fff',
              fontSize: '0.875rem',
              py: 0.875,
              pr: 1.5,
              '& input::placeholder': { color: 'rgba(255,255,255,0.5)', opacity: 1 },
            }}
          />
        </Box>
      </Box>

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
    </Box>
  )
}
