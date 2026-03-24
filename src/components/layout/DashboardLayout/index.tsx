'use client'

import { useState } from 'react'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import { Sparkles } from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Sidebar } from '@/components/layout/Sidebar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        bgcolor: 'custom.bgPrimary',
        overflow: 'hidden',
      }}
    >
      <Header sidebarCollapsed={sidebarCollapsed} onToggleSidebar={() => setSidebarCollapsed((c) => !c)} />
      <Box sx={{ display: 'flex', flex: 1, minHeight: 0, overflow: 'hidden' }}>
        <Sidebar collapsed={sidebarCollapsed} />
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, overflow: 'hidden', position: 'relative' }}>
          <Box component="main" sx={{ flex: 1, overflowY: 'auto', bgcolor: 'custom.bgPrimary' }}>
            {children}
          </Box>
          <Fab
            color="primary"
            aria-label="Add or quick action"
            sx={{
              position: 'fixed',
              bottom: 24,
              right: 24,
              zIndex: 50,
              bgcolor: 'custom.fab',
              width: 56,
              height: 56,
              boxShadow: 3,
              '&:hover': { bgcolor: 'custom.fab', opacity: 0.92 },
            }}
          >
            <Sparkles size={22} color="#fff" />
          </Fab>
        </Box>
      </Box>
    </Box>
  )
}
