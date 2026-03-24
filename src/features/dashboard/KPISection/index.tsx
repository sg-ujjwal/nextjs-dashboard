'use client'
import { KPI_PRIMARY, KPI_SECONDARY } from '@/services/kpiData'
import { KPICard } from '@/components/cards/KPICard'
import { Dropdown } from '@/components/common/Dropdown'
import { usePeriodSelector } from '@/hooks/usePeriodSelector'

export default function KPISection() {
  const { period, periods, handleChange } = usePeriodSelector()

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="section-title">Executive Control Room</h2>
          <p className="section-subtitle">Strategic Overview & Impact Posture</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-[#64748b]">System Status</span>
            <div className="flex items-center gap-2 rounded-full px-3 py-1" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)' }}>
              <span className="w-2 h-2 bg-[#22c55e] rounded-full animate-pulse" />
              <span className="text-xs font-medium" style={{ color: '#22c55e' }}>Live Monitoring</span>
            </div>
          </div>
          <Dropdown options={periods} value={period} onChange={handleChange} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {KPI_PRIMARY.map((metric, i) => (
          <KPICard key={metric.id} metric={{ ...metric, isPrimary: true }} index={i} period={period} />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {KPI_SECONDARY.map((metric, i) => (
          <KPICard key={metric.id} metric={metric} index={i + 2} period={period} />
        ))}
      </div>
    </section>
  )
}
