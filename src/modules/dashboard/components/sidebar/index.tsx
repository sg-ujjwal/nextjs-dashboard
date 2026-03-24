'use client'

import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { LayoutDashboard, Map, Shield, TrendingUp, Cloud } from 'lucide-react'

interface NavItem {
  id: string
  label: string
  icon: React.ElementType
  badge?: number
  section: string
}

const NAV_ITEMS: NavItem[] = [
  { id: 'dashboard', label: 'Control Room', icon: LayoutDashboard, section: 'STRATEGIC' },
  { id: 'countries', label: 'Countries', icon: Map, section: 'STRATEGIC' },
  { id: 'deployment', label: 'Deployment', icon: Shield, section: 'ASSESSMENT' },
  { id: 'proposals', label: 'Proposals', icon: TrendingUp, section: 'ASSESSMENT' },
  { id: 'intelligence', label: 'Intelligence', icon: Cloud, section: 'ASSESSMENT' },
]

const SECTIONS = ['STRATEGIC', 'ASSESSMENT']

interface SidebarProps {
  collapsed: boolean
}

export function Sidebar({ collapsed }: SidebarProps) {
  const [active, setActive] = useState('dashboard')

  return (
    <Box
      component="aside"
      className="no-scrollbar"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        transition: 'width 0.28s ease',
        height: '100%',
        flexShrink: 0,
        bgcolor: 'custom.sidebarBg',
        borderRight: '1px solid',
        borderColor: 'custom.sidebarBorder',
        width: collapsed ? 72 : 248,
        overflowY: 'auto',
      }}
    >
      <Box component="nav" sx={{ flex: 1, py: 2.5, px: collapsed ? 1 : 1.5, overflowY: 'auto' }} className="no-scrollbar">
        {SECTIONS.map((section) => {
          const items = NAV_ITEMS.filter((n) => n.section === section)
          return (
            <Box key={section} sx={{ mb: 2.5 }}>
              {!collapsed && (
                <Typography
                  sx={{
                    fontSize: '0.6875rem',
                    color: 'custom.sidebarSectionLabel',
                    fontWeight: 600,
                    px: 1.5,
                    mb: 1,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  {section}
                </Typography>
              )}
              {items.map((item) => {
                const isActive = active === item.id
                return (
                  <Button
                    key={item.id}
                    onClick={() => setActive(item.id)}
                    title={collapsed ? item.label : undefined}
                    fullWidth
                    sx={{
                      justifyContent: collapsed ? 'center' : 'flex-start',
                      gap: 1.5,
                      px: collapsed ? 1 : 1.5,
                      py: 1,
                      mb: 0.5,
                      minHeight: 44,
                      fontSize: '0.875rem',
                      textTransform: 'none',
                      borderRadius: 2,
                      position: 'relative',
                      color: isActive ? 'custom.sidebarTextActive' : 'custom.sidebarText',
                      bgcolor: isActive ? 'custom.sidebarActive' : 'transparent',
                      border: 'none',
                      '&:hover': {
                        bgcolor: isActive ? 'custom.sidebarActive' : 'custom.sidebarHover',
                        color: isActive ? 'custom.sidebarTextActive' : 'custom.sidebarText',
                      },
                    }}
                  >
                    <item.icon size={20} style={{ flexShrink: 0, opacity: isActive ? 1 : 0.9 }} />
                    {!collapsed && (
                      <>
                        <Typography component="span" sx={{ flex: 1, textAlign: 'left', fontSize: 'inherit', fontWeight: isActive ? 600 : 500 }}>
                          {item.label}
                        </Typography>
                        {item.badge && (
                          <Box
                            component="span"
                            sx={{
                              bgcolor: 'error.main',
                              color: '#fff',
                              fontSize: '0.6875rem',
                              minWidth: 20,
                              height: 20,
                              px: 0.5,
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                            }}
                          >
                            {item.badge}
                          </Box>
                        )}
                      </>
                    )}
                    {collapsed && item.badge && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 6,
                          right: 8,
                          width: 8,
                          height: 8,
                          bgcolor: 'error.main',
                          borderRadius: '50%',
                        }}
                      />
                    )}
                  </Button>
                )
              })}
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}
