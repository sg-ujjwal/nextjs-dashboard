'use client'

import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import type { SxProps, Theme } from '@mui/material/styles'
import { CARD_BORDER_RADIUS_SX } from '@/theme/cardStyles'
import { ChevronDown } from 'lucide-react'

interface DropdownOption<T extends string> {
  label: string
  value: T
}

interface DropdownProps<T extends string> {
  options: DropdownOption<T>[]
  value: T
  onChange: (value: T) => void
  sx?: SxProps<Theme>
  label?: string
}

export function Dropdown<T extends string>({ options, value, onChange, sx, label }: DropdownProps<T>) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const current = options.find((o) => o.value === value)

  return (
    <Box sx={{ position: 'relative', ...sx }}>
      {label && (
        <Typography variant="caption" color="text.secondary" sx={{ mb: 0.5, display: 'block' }}>
          {label}
        </Typography>
      )}
      <Button
        variant="outlined"
        onClick={(e) => setAnchorEl(e.currentTarget)}
        endIcon={
          <ChevronDown
            size={14}
            style={{
              transition: 'transform 0.2s',
              transform: open ? 'rotate(180deg)' : 'none',
            }}
          />
        }
        sx={{
          textTransform: 'none',
          borderRadius: CARD_BORDER_RADIUS_SX,
          bgcolor: 'background.paper',
          borderColor: 'custom.border',
          color: 'text.primary',
          fontSize: '0.875rem',
          py: 0.75,
          px: 1.5,
          '&:hover': { borderColor: 'text.secondary', bgcolor: 'background.paper' },
        }}
      >
        {current?.label}
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
        {options.map((opt) => (
          <MenuItem
            key={opt.value}
            selected={opt.value === value}
            onClick={() => {
              onChange(opt.value)
              setAnchorEl(null)
            }}
            sx={{
              fontSize: '0.875rem',
              color: opt.value === value ? '#2F446A' : 'text.secondary',
              fontWeight: opt.value === value ? 600 : 400,
            }}
          >
            {opt.label}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}
