'use client'
import { useState, useCallback } from 'react'

export function useReportGeneration() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [isComplete,   setIsComplete]   = useState(false)
  const [progress,     setProgress]     = useState(0)

  const generate = useCallback(async () => {
    setIsGenerating(true)
    setIsComplete(false)
    setProgress(0)

    for (let i = 0; i <= 100; i += 10) {
      await new Promise(r => setTimeout(r, 150))
      setProgress(i)
    }

    setIsGenerating(false)
    setIsComplete(true)
    setTimeout(() => { setIsComplete(false); setProgress(0) }, 3000)
  }, [])

  return { isGenerating, isComplete, progress, generate }
}
