'use client'
import { Sparkles, AlertTriangle, ChevronRight, ArrowUpRight } from 'lucide-react'
import { PRIORITY_CARDS, DEPLOYMENT_ALERTS, STRATEGIC_FORECASTING } from '@/services/dashboardData'
import { useReportGeneration } from '@/hooks/useReportGeneration'
import { cn } from '@/utils/cn'

const HEADER_GRADIENT = 'linear-gradient(98.66deg, #2F446A -14.67%, #6486C4 83.98%)'

export default function AIBriefPanel() {
  const { isGenerating, isComplete, progress, generate } = useReportGeneration()

  return (
    <div className="rounded-xl overflow-hidden border border-[#93c5fd] shadow-[0_1px_3px_rgba(0,0,0,0.08)] bg-white h-full flex flex-col">
      {/* Header - medium blue solid, rounded top */}
      <div
        className="px-5 py-4 flex items-center justify-between"
        style={{ background: HEADER_GRADIENT }}
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0">
            <Sparkles size={18} className="text-white" />
          </div>
          <div>
            <h2 className="text-base font-bold text-white">AI Executive Brief</h2>
            <p className="text-xs text-white/80 mt-0.5">Updated: 3 minute ago</p>
          </div>
        </div>
        <button
          onClick={generate}
          disabled={isGenerating}
          className={cn(
            'flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium bg-white text-[#2F446A] transition-all',
            isGenerating && 'opacity-70 cursor-wait',
            isComplete && 'bg-emerald-100 text-emerald-800'
          )}
        >
          {isGenerating ? 'Generating...' : isComplete ? 'Report Ready' : 'View Full Report'}
          <ChevronRight size={14} />
        </button>
      </div>

      {isGenerating && (
        <div className="px-5 py-2 bg-[#f8fafc]">
          <div className="h-1.5 bg-[#e2e8f0] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{ width: `${progress}%`, backgroundColor: '#2F446A' }}
            />
          </div>
        </div>
      )}

      <div className="p-5 flex-1 overflow-y-auto space-y-5">
        {/* TOP 3 PRIORITIES */}
        <div>
          <h3 className="text-[10px] font-semibold text-[#94a3b8] uppercase tracking-wider mb-3">
            Top 3 Priorities
          </h3>
          <div className="space-y-2">
            {PRIORITY_CARDS.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 p-3 rounded-lg bg-[#f8fafc] hover:bg-[#f1f5f9] cursor-pointer transition-colors border border-transparent hover:border-[#e2e8f0]"
              >
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                  style={{ backgroundColor: '#2F446A' }}
                >
                  {item.rank}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-[#1e293b]">{item.title}</p>
                  <p className="text-xs text-[#64748b] mt-0.5">{item.description}</p>
                </div>
                <ArrowUpRight size={16} className="text-[#94a3b8] shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* Underperforming Deployment Alert */}
        {DEPLOYMENT_ALERTS.map((alert) => (
          <div
            key={alert.id}
            className="rounded-lg p-4 border border-[#fed7aa]/50"
            style={{ backgroundColor: '#fff7ed' }}
          >
            <div className="flex items-start gap-3">
              <AlertTriangle
                size={20}
                className="shrink-0 mt-0.5"
                style={{ color: '#ea580c' }}
              />
              <div>
                <p
                  className="text-sm font-bold"
                  style={{ color: '#9a3412' }}
                >
                  {alert.title}
                </p>
                <p
                  className="text-xs mt-1.5 leading-relaxed"
                  style={{ color: '#9a3412' }}
                >
                  {alert.message}
                </p>
                <button
                  type="button"
                  className="text-xs font-bold mt-2 hover:underline flex items-center gap-0.5"
                  style={{ color: '#9a3412' }}
                >
                  View
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* STRATEGIC FORECASTING */}
        <div>
          <h3 className="text-[10px] font-semibold text-[#94a3b8] uppercase tracking-wider mb-3">
            Strategic Forecasting
          </h3>
          <div className="space-y-2">
            {STRATEGIC_FORECASTING.map((item) => (
              <div
                key={item.id}
                className="rounded-lg p-3 bg-[#f8fafc] border-l-4 pl-3"
                style={{ borderLeftColor: item.color }}
              >
                <p className="text-sm font-bold text-[#1e293b]">{item.title}</p>
                <p className="text-xs text-[#64748b] mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
