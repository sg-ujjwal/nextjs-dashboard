'use client'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { WorldMap } from '@/components/map/WorldMap'
import { useMapData } from '@/hooks/useMapData'
import { ChevronRight, Rocket, Wallet, AlertTriangle, Globe, X, Info } from 'lucide-react'
import { getCountryFlag } from '@/utils/countryFlags'
import type { MapMarker } from '@/types'
import { CARD_BORDER_RADIUS_SX } from '@/theme/cardStyles'

const MAP_HEADER_GRADIENT = 'linear-gradient(98.66deg, #2F446A -14.67%, #6486C4 83.98%)'

const parseActiveDeployment = (raw?: string): { title: string; action: string } | null => {
  if (!raw) return null
  const parts = raw.split(/\s*-\s*/)
  if (parts.length >= 2) {
    return { title: parts[0]!.trim(), action: parts[parts.length - 1]!.trim() }
  }
  return { title: raw, action: 'View' }
}

const getDefaultIntelligence = (country: string): string[] => {
  const defaults: Record<string, string> = {
    India: 'India Announces National Water Mission Phase 2',
    Nigeria: 'Nigeria Launches Water Infrastructure Expansion Plan',
    Ethiopia: 'Ethiopia Advances Rural Water Access Initiative',
    Kenya: 'Kenya Expands Nairobi Water Grid Modernization',
  }
  return defaults[country] ? [defaults[country]!] : [`${country} water sector update`]
}

function CountryProfileModal({ marker, onClose }: { marker: MapMarker; onClose: () => void }) {
  const flag = getCountryFlag(marker.id)
  const deployment = parseActiveDeployment(marker.activeDeployment)
  const intelligence = getDefaultIntelligence(marker.country)
  const statusLabel = marker.deploymentStatus === 'deployed' ? 'Active' : marker.deploymentStatus === 'in_progress' ? 'In Progress' : 'Pending'
  const isActive = marker.deploymentStatus === 'deployed'

  return (
    <Box
      role="dialog"
      aria-label={`${marker.country} profile`}
      sx={{
        position: 'absolute',
        top: 16,
        left: 16,
        width: 320,
        bgcolor: '#f1f5f9',
        borderRadius: CARD_BORDER_RADIUS_SX,
        boxShadow: 6,
        border: '1px solid',
        borderColor: 'custom.border',
        p: 2,
        zIndex: 1000,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 1.5, mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, minWidth: 0 }}>
          <Box
            aria-hidden
            sx={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              bgcolor: 'background.paper',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.25rem',
              flexShrink: 0,
              border: '1px solid',
              borderColor: 'custom.border',
              boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
            }}
          >
            {flag}
          </Box>
          <Box sx={{ minWidth: 0 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
              <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: 'text.primary' }}>{marker.country}</Typography>
              {isActive && (
                <Typography
                  component="span"
                  sx={{ fontSize: '0.75rem', px: 1, py: 0.25, borderRadius: 9999, fontWeight: 600, flexShrink: 0, bgcolor: 'rgba(34, 197, 94, 0.15)', color: '#16a34a' }}
                >
                  {statusLabel}
                </Typography>
              )}
            </Box>
            <Typography sx={{ fontSize: '0.75rem', color: 'text.disabled', mt: 0.25 }}>{marker.region}</Typography>
          </Box>
        </Box>
        <Button
          onClick={onClose}
          aria-label="Close"
          sx={{ minWidth: 0, p: 0.75, borderRadius: CARD_BORDER_RADIUS_SX, color: 'text.disabled', '&:hover': { bgcolor: 'rgba(255,255,255,0.8)', color: 'text.primary' } }}
        >
          <X size={18} />
        </Button>
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1, mb: 2 }}>
        {[
          { k: 'Water Scarcity', v: `${marker.waterScarcity ?? 0}%`, vColor: (marker.waterScarcity ?? 0) >= 60 ? '#dc2626' : '#1e293b' },
          { k: 'Capital Deployed', v: `$${marker.capitalDeployed ?? 0}M`, vColor: '#1e293b' },
          { k: 'Impact Score', v: `${marker.impactScore ?? 0}%`, vColor: '#1e293b' },
          { k: 'Infrastructure', v: `${marker.infrastructure ?? 0}/100`, vColor: '#1e293b' },
        ].map((cell) => (
          <Box key={cell.k} sx={{ bgcolor: 'background.paper', borderRadius: CARD_BORDER_RADIUS_SX, p: 1.5, border: '1px solid', borderColor: 'custom.border', boxShadow: '0 1px 2px rgba(0,0,0,0.06)' }}>
            <Typography sx={{ fontSize: '10px', color: 'text.disabled', textTransform: 'uppercase', letterSpacing: '0.06em', mb: 0.5 }}>{cell.k}</Typography>
            <Typography sx={{ fontSize: '0.875rem', fontWeight: 700, color: cell.vColor }}>{cell.v}</Typography>
          </Box>
        ))}
      </Box>

      {deployment && (
        <Box sx={{ mb: 2, pt: 1.5, borderTop: '1px solid', borderColor: 'custom.border' }}>
          <Typography sx={{ fontSize: '10px', color: 'text.disabled', textTransform: 'uppercase', letterSpacing: '0.06em', mb: 1 }}>Active Deployments</Typography>
          <Box sx={{ bgcolor: 'background.paper', borderRadius: CARD_BORDER_RADIUS_SX, p: 1.5, border: '1px solid', borderColor: 'custom.border', boxShadow: '0 1px 2px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
            <Typography sx={{ fontSize: '0.875rem', fontWeight: 500, color: 'text.primary', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {deployment.title}
            </Typography>
            <Button
              type="button"
              size="small"
              sx={{
                flexShrink: 0,
                borderRadius: 9999,
                fontSize: '0.75rem',
                fontWeight: 600,
                textTransform: 'none',
                px: 1.5,
                py: 0.5,
                bgcolor: 'rgba(22, 119, 255, 0.15)',
                color: '#1677ff',
                minWidth: 0,
              }}
            >
              {deployment.action}
            </Button>
          </Box>
        </Box>
      )}

      {intelligence.length > 0 && (
        <Box sx={{ mb: 2, pt: 1.5, borderTop: '1px solid', borderColor: 'custom.border' }}>
          <Typography sx={{ fontSize: '10px', color: 'text.disabled', textTransform: 'uppercase', letterSpacing: '0.06em', mb: 1 }}>
            Intelligence ({intelligence.length})
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
            {intelligence.map((item, i) => (
              <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, fontSize: '0.875rem' }}>
                <Info size={16} style={{ flexShrink: 0, marginTop: 2, color: '#1677ff' }} />
                <Typography component="span" sx={{ color: '#1677ff', fontWeight: 500, cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      )}

      <Button
        fullWidth
        endIcon={<ChevronRight size={16} />}
        sx={{
          py: 1.5,
          borderRadius: CARD_BORDER_RADIUS_SX,
          textTransform: 'none',
          fontSize: '0.875rem',
          fontWeight: 600,
          bgcolor: '#2F446A',
          color: '#fff',
          '&:hover': { bgcolor: '#2F446A', opacity: 0.9 },
        }}
      >
        View Full Profile
      </Button>
    </Box>
  )
}

export default function MapSection() {
  const { markers, selectedMarker, handleSelect, handleHover } = useMapData()

  const mapStats = {
    activeDeployment: markers.filter((m) => m.deploymentStatus === 'deployed' || m.deploymentStatus === 'in_progress').length,
    capitalDeployed: markers.reduce((sum, m) => sum + (m.capitalDeployed ?? 0), 0),
    highAlerts: markers.filter((m) => m.riskLevel === 'high' || m.riskLevel === 'critical').length,
    diversification: 62,
  }

  const legendRow = (dot: string, label: string) => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: dot, flexShrink: 0 }} />
      <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>{label}</Typography>
    </Box>
  )

  const riskRow = (size: number, label: string) => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Box sx={{ width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <Box
          sx={{
            width: size,
            height: size,
            borderRadius: '50%',
            border: '2px solid',
            borderColor: 'rgba(148, 163, 184, 0.5)',
            boxShadow: '0 0 0 1px rgba(255,255,255,0.8)',
            bgcolor: 'rgba(148, 163, 184, 0.2)',
          }}
        />
      </Box>
      <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>{label}</Typography>
    </Box>
  )

  return (
    <Box component="section" sx={{ height: '100%', minHeight: 0, display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ borderRadius: CARD_BORDER_RADIUS_SX, overflow: 'hidden', border: '1px solid', borderColor: 'custom.border', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ px: 2.5, py: 2, color: '#fff', background: MAP_HEADER_GRADIENT }}>
          <Typography sx={{ fontSize: '1rem', fontWeight: 700, lineHeight: 1.25 }}>Geographic Impact Distribution</Typography>
          <Typography sx={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.85)', mt: 0.5 }}>Real-time deployment scale and risk heat overlay</Typography>
        </Box>
        <Box sx={{ position: 'relative', flex: 1, minHeight: 0 }}>
          <WorldMap markers={markers} selectedMarker={selectedMarker} onMarkerClick={handleSelect} onMarkerHover={handleHover} />
          {selectedMarker && <CountryProfileModal marker={selectedMarker} onClose={() => handleSelect(null)} />}
          <Box sx={{ position: 'absolute', top: 16, right: 16, display: 'flex', flexDirection: 'column', gap: 1.5, zIndex: 1000 }}>
            <Box sx={{ bgcolor: 'background.paper', borderRadius: CARD_BORDER_RADIUS_SX, boxShadow: 3, border: '1px solid', borderColor: 'custom.border', p: 1.5 }}>
              <Typography sx={{ fontSize: '10px', fontWeight: 600, color: 'text.primary', textTransform: 'uppercase', letterSpacing: '0.06em', mb: 1 }}>Status Layer</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                {legendRow('#22c55e', 'Deployed solution')}
                {legendRow('#f59e0b', 'Deployment in progress')}
                {legendRow('#1677ff', 'Pending proposal')}
              </Box>
            </Box>
            <Box sx={{ bgcolor: 'background.paper', borderRadius: CARD_BORDER_RADIUS_SX, boxShadow: 3, border: '1px solid', borderColor: 'custom.border', p: 1.5 }}>
              <Typography sx={{ fontSize: '10px', fontWeight: 600, color: 'text.primary', textTransform: 'uppercase', letterSpacing: '0.06em', mb: 1 }}>Risk Status</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {riskRow(8, 'Low')}
                {riskRow(12, 'Medium')}
                {riskRow(16, 'High')}
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', color: '#fff', borderBottomLeftRadius: CARD_BORDER_RADIUS_SX, borderBottomRightRadius: CARD_BORDER_RADIUS_SX, background: MAP_HEADER_GRADIENT }}>
          <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, px: 2, py: 1.5, minWidth: 0 }}>
            <Rocket size={16} color="rgba(255,255,255,0.9)" style={{ flexShrink: 0 }} />
            <Typography sx={{ fontSize: '0.75rem', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Active Deployment</Typography>
            <Typography sx={{ fontSize: '0.875rem', fontWeight: 700, flexShrink: 0 }}>{mapStats.activeDeployment}</Typography>
          </Box>
          <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, px: 2, py: 1.5, minWidth: 0, borderLeft: '1px solid rgba(255,255,255,0.2)' }}>
            <Wallet size={16} color="rgba(255,255,255,0.9)" style={{ flexShrink: 0 }} />
            <Typography sx={{ fontSize: '0.75rem', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Capital Deployment</Typography>
            <Typography sx={{ fontSize: '0.875rem', fontWeight: 700, flexShrink: 0 }}>${mapStats.capitalDeployed.toFixed(1)}M</Typography>
          </Box>
          <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, px: 2, py: 1.5, minWidth: 0, borderLeft: '1px solid rgba(255,255,255,0.2)' }}>
            <AlertTriangle size={16} color="rgba(255,255,255,0.9)" style={{ flexShrink: 0 }} />
            <Typography sx={{ fontSize: '0.75rem', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>High Alerts</Typography>
            <Typography sx={{ fontSize: '0.875rem', fontWeight: 700, flexShrink: 0 }}>{mapStats.highAlerts}</Typography>
          </Box>
          <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, px: 2, py: 1.5, minWidth: 0, borderLeft: '1px solid rgba(255,255,255,0.2)' }}>
            <Globe size={16} color="rgba(255,255,255,0.9)" style={{ flexShrink: 0 }} />
            <Typography sx={{ fontSize: '0.75rem', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Diversification</Typography>
            <Typography sx={{ fontSize: '0.875rem', fontWeight: 700, flexShrink: 0 }}>{mapStats.diversification}/100</Typography>
            <Box sx={{ width: 64, height: 6, bgcolor: 'rgba(255,255,255,0.2)', borderRadius: 9999, overflow: 'hidden', flexShrink: 0 }}>
              <Box sx={{ height: '100%', bgcolor: '#22c55e', borderRadius: 9999, transition: 'width 0.3s', width: `${mapStats.diversification}%` }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
