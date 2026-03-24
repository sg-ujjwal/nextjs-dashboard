'use client'
import { WorldMap } from '@/components/map/WorldMap'
import { useMapData } from '@/hooks/useMapData'
import { ChevronRight, Rocket, Wallet, AlertTriangle, Globe, X, Info } from 'lucide-react'
import { getCountryFlag } from '@/utils/countryFlags'
import type { MapMarker } from '@/types'

const MAP_HEADER_GRADIENT = 'linear-gradient(98.66deg, #2F446A -14.67%, #6486C4 83.98%)'

function parseActiveDeployment(raw?: string): { title: string; action: string } | null {
  if (!raw) return null
  const parts = raw.split(/\s*-\s*/)
  if (parts.length >= 2) {
    return { title: parts[0]!.trim(), action: parts[parts.length - 1]!.trim() }
  }
  return { title: raw, action: 'View' }
}

function getDefaultIntelligence(country: string): string[] {
  const defaults: Record<string, string> = {
    India: 'India Announces National Water Mission Phase 2',
    Nigeria: 'Nigeria Launches Water Infrastructure Expansion Plan',
    Ethiopia: 'Ethiopia Advances Rural Water Access Initiative',
    Kenya: 'Kenya Expands Nairobi Water Grid Modernization',
  }
  return defaults[country] ? [defaults[country]!] : [`${country} water sector update`]
}

function CountryProfileModal({
  marker,
  onClose,
}: {
  marker: MapMarker
  onClose: () => void
}) {
  const flag = getCountryFlag(marker.id)
  const deployment = parseActiveDeployment(marker.activeDeployment)
  const intelligence = getDefaultIntelligence(marker.country)
  const statusLabel = marker.deploymentStatus === 'deployed' ? 'Active' : marker.deploymentStatus === 'in_progress' ? 'In Progress' : 'Pending'
  const isActive = marker.deploymentStatus === 'deployed'

  return (
    <div
      className="absolute top-4 left-4 w-80 bg-[#f1f5f9] rounded-xl shadow-xl border border-bg-border p-4 z-[1000]"
      role="dialog"
      aria-label={`${marker.country} profile`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-start gap-3 min-w-0">
          <span
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-xl shrink-0 border border-bg-border shadow-sm"
            aria-hidden
          >
            {flag}
          </span>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-base font-bold text-text-primary">{marker.country}</h3>
              <span
                className={isActive ? 'text-xs px-2 py-0.5 rounded-full font-semibold shrink-0' : 'hidden'}
                style={isActive ? { backgroundColor: 'rgba(34, 197, 94, 0.15)', color: '#16a34a' } : undefined}
              >
                {statusLabel}
              </span>
            </div>
            <p className="text-xs text-text-muted mt-0.5">{marker.region}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg hover:bg-white/80 text-text-muted hover:text-text-primary transition-colors shrink-0"
          aria-label="Close"
        >
          <X size={18} />
        </button>
      </div>

      {/* Metrics Grid 2x2 */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        <div className="bg-white rounded-lg p-3 border border-bg-border shadow-sm">
          <p className="text-[10px] text-text-muted uppercase tracking-wider mb-1">Water Scarcity</p>
          <p
            className="text-sm font-bold"
            style={{ color: (marker.waterScarcity ?? 0) >= 60 ? '#dc2626' : '#1e293b' }}
          >
            {marker.waterScarcity ?? 0}%
          </p>
        </div>
        <div className="bg-white rounded-lg p-3 border border-bg-border shadow-sm">
          <p className="text-[10px] text-text-muted uppercase tracking-wider mb-1">Capital Deployed</p>
          <p className="text-sm font-bold text-text-primary">${marker.capitalDeployed ?? 0}M</p>
        </div>
        <div className="bg-white rounded-lg p-3 border border-bg-border shadow-sm">
          <p className="text-[10px] text-text-muted uppercase tracking-wider mb-1">Impact Score</p>
          <p className="text-sm font-bold text-text-primary">{marker.impactScore ?? 0}%</p>
        </div>
        <div className="bg-white rounded-lg p-3 border border-bg-border shadow-sm">
          <p className="text-[10px] text-text-muted uppercase tracking-wider mb-1">Infrastructure</p>
          <p className="text-sm font-bold text-text-primary">{marker.infrastructure ?? 0}/100</p>
        </div>
      </div>

      {/* Active Deployments */}
      {deployment && (
        <div className="mb-4 pt-3 border-t border-bg-border">
          <p className="text-[10px] text-text-muted uppercase tracking-wider mb-2">Active Deployments</p>
          <div className="bg-white rounded-lg p-3 border border-bg-border shadow-sm flex items-center justify-between gap-2">
            <span className="text-sm font-medium text-text-primary truncate">{deployment.title}</span>
            <button
              type="button"
              className="shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors"
              style={{ backgroundColor: 'rgba(22, 119, 255, 0.15)', color: '#1677ff' }}
            >
              {deployment.action}
            </button>
          </div>
        </div>
      )}

      {/* Intelligence */}
      {intelligence.length > 0 && (
        <div className="mb-4 pt-3 border-t border-bg-border">
          <p className="text-[10px] text-text-muted uppercase tracking-wider mb-2">
            Intelligence ({intelligence.length})
          </p>
          <div className="space-y-1.5">
            {intelligence.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-2 text-sm"
              >
                <Info size={16} className="shrink-0 mt-0.5" style={{ color: '#1677ff' }} />
                <span className="text-[#1677ff] font-medium cursor-pointer hover:underline">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <button
        className="w-full flex items-center justify-center gap-1.5 py-3 rounded-lg text-white text-sm font-semibold hover:opacity-90 transition-opacity"
        style={{ backgroundColor: '#2F446A' }}
      >
        View Full Profile
        <ChevronRight size={16} />
      </button>
    </div>
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

  return (
    <section className="h-full min-h-0 flex flex-col">
      <div className="rounded-xl overflow-hidden border border-bg-border shadow-sm flex-1 min-h-0 flex flex-col">
        <div
          className="px-5 py-4 text-white"
          style={{ background: MAP_HEADER_GRADIENT }}
        >
          <h2 className="text-base font-bold leading-tight">Geographic Impact Distribution</h2>
          <p className="text-sm text-white/85 mt-1">Real-time deployment scale and risk heat overlay</p>
        </div>
        <div className="relative flex-1 min-h-0">
          <WorldMap
            markers={markers}
            selectedMarker={selectedMarker}
            onMarkerClick={handleSelect}
            onMarkerHover={handleHover}
          />

          {/* Country profile modal - shows when any marker is selected */}
          {selectedMarker && (
            <CountryProfileModal
              marker={selectedMarker}
              onClose={() => handleSelect(null)}
            />
          )}

          {/* Legend - floating top right (z-[1000] to appear above Leaflet map) */}
          <div className="absolute top-4 right-4 flex flex-col gap-3 z-[1000]">
            <div className="bg-white rounded-lg shadow-lg border border-bg-border p-3">
              <p className="text-[10px] font-semibold text-text-primary uppercase tracking-wider mb-2">Status Layer</p>
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] shrink-0" />
                  <span className="text-text-secondary">Deployed solution</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b] shrink-0" />
                  <span className="text-text-secondary">Deployment in progress</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1677ff] shrink-0" />
                  <span className="text-text-secondary">Pending proposal</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg border border-bg-border p-3">
              <p className="text-[10px] font-semibold text-text-primary uppercase tracking-wider mb-2">Risk Status</p>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-5 h-5 shrink-0">
                    <span className="w-2 h-2 rounded-full ring-2 ring-offset-1 ring-text-muted/50 bg-text-muted/20" />
                  </span>
                  <span className="text-text-secondary">Low</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-5 h-5 shrink-0">
                    <span className="w-3 h-3 rounded-full ring-2 ring-offset-1 ring-text-muted/50 bg-text-muted/20" />
                  </span>
                  <span className="text-text-secondary">Medium</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-5 h-5 shrink-0">
                    <span className="w-4 h-4 rounded-full ring-2 ring-offset-1 ring-text-muted/50 bg-text-muted/20" />
                  </span>
                  <span className="text-text-secondary">High</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary bar - dark blue with rounded bottom */}
        <div
          className="flex items-center divide-x divide-white/20 text-white rounded-b-xl"
          style={{ background: MAP_HEADER_GRADIENT }}
        >
          <div className="flex-1 flex items-center justify-center gap-2 px-4 py-3 min-w-0">
            <Rocket size={16} className="shrink-0 text-white/90" />
            <span className="text-xs font-medium truncate">Active Deployment</span>
            <span className="text-sm font-bold shrink-0">{mapStats.activeDeployment}</span>
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 px-4 py-3 min-w-0">
            <Wallet size={16} className="shrink-0 text-white/90" />
            <span className="text-xs font-medium truncate">Capital Deployment</span>
            <span className="text-sm font-bold shrink-0">${mapStats.capitalDeployed.toFixed(1)}M</span>
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 px-4 py-3 min-w-0">
            <AlertTriangle size={16} className="shrink-0 text-white/90" />
            <span className="text-xs font-medium truncate">High Alerts</span>
            <span className="text-sm font-bold shrink-0">{mapStats.highAlerts}</span>
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 px-4 py-3 min-w-0">
            <Globe size={16} className="shrink-0 text-white/90" />
            <span className="text-xs font-medium truncate">Diversification</span>
            <span className="text-sm font-bold shrink-0">{mapStats.diversification}/100</span>
            <div className="w-16 h-1.5 bg-white/20 rounded-full overflow-hidden shrink-0">
              <div
                className="h-full bg-[#22c55e] rounded-full transition-all duration-300"
                style={{ width: `${mapStats.diversification}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
