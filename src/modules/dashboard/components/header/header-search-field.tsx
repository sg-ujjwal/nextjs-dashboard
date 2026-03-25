'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import { Search, X } from 'lucide-react'

export const HeaderSearchField = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClose = useCallback(() => {
    setIsOpen(false)
    setIsFocused(false)
  }, [])

  const handleOpen = useCallback(() => {
    setIsOpen(true)
  }, [])

  useEffect(() => {
    if (!isOpen) {
      return
    }
    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const node = containerRef.current
      if (node && !node.contains(event.target as Node)) {
        handleClose()
      }
    }
    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('touchstart', handlePointerDown)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('touchstart', handlePointerDown)
    }
  }, [isOpen, handleClose])

  useEffect(() => {
    if (!isOpen) {
      return
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, handleClose])

  useEffect(() => {
    if (!isOpen) {
      return
    }
    const id = window.requestAnimationFrame(() => {
      inputRef.current?.focus()
    })
    return () => window.cancelAnimationFrame(id)
  }, [isOpen])

  return (
    <Box
      ref={containerRef}
      sx={{
        display: { xs: 'none', md: 'flex' },
        alignItems: 'center',
        ml: 0.5,
        flexShrink: 0,
      }}
    >
      {!isOpen ? (
        <IconButton
          type="button"
          onClick={handleOpen}
          aria-label="Open search"
          aria-expanded={false}
          sx={{
            color: 'rgba(255,255,255,0.92)',
            borderRadius: 1,
            width: 36,
            height: 36,
            '&:hover': { bgcolor: 'rgba(255,255,255,0.12)', color: '#fff' },
          }}
        >
          <Search size={20} strokeWidth={2} aria-hidden />
        </IconButton>
      ) : (
        <Box
          id="header-search-field"
          role="search"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            pl: 0.5,
            pr: 0.25,
            minHeight: 40,
            maxWidth: 320,
            width: { md: 280 },
            bgcolor: 'rgba(255,255,255,0.12)',
            border: '1px solid',
            borderColor: isFocused ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.22)',
            borderRadius: 2,
            transition: 'border-color 0.2s ease',
            animation: 'headerSearchExpand 0.25s ease-out',
            '@keyframes headerSearchExpand': {
              from: { opacity: 0.85, transform: 'scaleX(0.94)' },
              to: { opacity: 1, transform: 'scaleX(1)' },
            },
            transformOrigin: 'left center',
          }}
        >
          <Search size={18} color="rgba(255,255,255,0.7)" style={{ flexShrink: 0, marginLeft: 8 }} aria-hidden />
          <InputBase
            inputRef={inputRef}
            placeholder="Search..."
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            sx={{
              flex: 1,
              minWidth: 0,
              color: '#fff',
              fontSize: '0.875rem',
              py: 0.75,
              pr: 0.5,
              '& input::placeholder': { color: 'rgba(255,255,255,0.5)', opacity: 1 },
            }}
            inputProps={{ 'aria-label': 'Search dashboard' }}
          />
          <IconButton
            type="button"
            size="small"
            onClick={handleClose}
            aria-label="Close search"
            sx={{
              color: 'rgba(255,255,255,0.75)',
              '&:hover': { color: '#fff', bgcolor: 'rgba(255,255,255,0.1)' },
            }}
          >
            <X size={18} aria-hidden />
          </IconButton>
        </Box>
      )}
    </Box>
  )
}
