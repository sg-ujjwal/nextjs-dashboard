'use client'

import { useState, useEffect, useRef } from 'react'

export interface UseCountUpOptions {
  end: number
  duration?: number
  start?: number
  decimals?: number
  delay?: number
}

export const useCountUp = ({
  end,
  duration = 2000,
  start = 0,
  decimals = 0,
  delay = 0,
}: UseCountUpOptions): number => {
  const [count, setCount] = useState(start)
  const frameRef = useRef<number>(0)
  const startTimeRef = useRef<number | null>(null)
  useEffect(() => {
    const timeout = setTimeout(() => {
      const animate = (timestamp: number) => {
        if (!startTimeRef.current) startTimeRef.current = timestamp
        const elapsed = timestamp - startTimeRef.current
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(parseFloat((start + (end - start) * eased).toFixed(decimals)))
        if (progress < 1) {
          frameRef.current = requestAnimationFrame(animate)
        }
      }
      frameRef.current = requestAnimationFrame(animate)
    }, delay)
    return () => {
      clearTimeout(timeout)
      cancelAnimationFrame(frameRef.current)
      startTimeRef.current = null
    }
  }, [end, duration, start, decimals, delay])
  return count
}
