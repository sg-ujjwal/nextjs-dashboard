'use client'
import { useState, useCallback } from 'react'
import type { MapMarker } from '@/types'
import { MAP_MARKERS } from '@/services/mapData'

export function useMapData() {
  const [selectedMarker, setSelectedMarker] = useState<MapMarker | null>(null)
  const [hoveredMarker, setHoveredMarker]   = useState<MapMarker | null>(null)
  const [filter, setFilter] = useState<string>('all')

  const filtered = filter === 'all'
    ? MAP_MARKERS
    : MAP_MARKERS.filter(m => m.riskLevel === filter)

  const handleSelect = useCallback((marker: MapMarker | null) => setSelectedMarker(marker), [])
  const handleHover  = useCallback((marker: MapMarker | null) => setHoveredMarker(marker),  [])

  return { markers: filtered, selectedMarker, hoveredMarker, filter, setFilter, handleSelect, handleHover }
}
