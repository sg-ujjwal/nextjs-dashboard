'use client'
import { useState, useCallback } from 'react'
import type { Period } from '@/types'

export function usePeriodSelector(initial: Period = '30d') {
  const [period, setPeriod] = useState<Period>(initial)

  const periods: { label: string; value: Period }[] = [
    { label: '7 Days',   value: '7d'  },
    { label: '30 Days',  value: '30d' },
    { label: '90 Days',  value: '90d' },
    { label: '1 Year',   value: '1y'  },
  ]

  const handleChange = useCallback((p: Period) => setPeriod(p), [])

  return { period, periods, handleChange }
}
