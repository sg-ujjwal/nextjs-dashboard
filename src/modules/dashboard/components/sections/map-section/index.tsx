'use client'

import Box from '@mui/material/Box'
import { WorldMap } from '@/widgets/world-map'
import { useMapData } from '@/modules/dashboard/hooks/use-map-data'
import { CARD_BORDER_RADIUS_SX } from '@/core/theme/card-styles'
import { CountryProfileModal } from './country-profile-modal'
import { MapFooterStats } from './map-footer-stats'
import { MapLegendPanels } from './map-legend-panels'
import { MapSectionHeader } from './map-section-header'

export default function MapSection() {
  const { markers, selectedMarker, handleSelect, handleHover } = useMapData()

  const mapStats = {
    activeDeployment: markers.filter((m) => m.deploymentStatus === 'deployed' || m.deploymentStatus === 'in_progress').length,
    capitalDeployed: markers.reduce((sum, m) => sum + (m.capitalDeployed ?? 0), 0),
    highAlerts: markers.filter((m) => m.riskLevel === 'high' || m.riskLevel === 'critical').length,
    diversification: 62,
  }

  return (
    <Box component="section" sx={{ height: '100%', minHeight: 0, display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          borderRadius: CARD_BORDER_RADIUS_SX,
          overflow: 'hidden',
          border: '1px solid',
          borderColor: 'custom.border',
          boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
          flex: 1,
          minHeight: 0,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <MapSectionHeader />
        <Box sx={{ position: 'relative', flex: 1, minHeight: 0 }}>
          <WorldMap markers={markers} selectedMarker={selectedMarker} onMarkerClick={handleSelect} onMarkerHover={handleHover} />
          {selectedMarker && <CountryProfileModal marker={selectedMarker} onClose={() => handleSelect(null)} />}
          <MapLegendPanels />
        </Box>
        <MapFooterStats
          activeDeployment={mapStats.activeDeployment}
          capitalDeployed={mapStats.capitalDeployed}
          highAlerts={mapStats.highAlerts}
          diversification={mapStats.diversification}
        />
      </Box>
    </Box>
  )
}
