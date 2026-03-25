'use client'

import { useState } from 'react'
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import { Search } from 'lucide-react'

export const HeaderSearchField = () => {
  const [searching, setSearching] = useState(false)

  return (
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
  )
}
