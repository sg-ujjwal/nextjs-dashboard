'use client'
import { Globe, BarChart2, Network, FileText, ChevronRight } from 'lucide-react'

interface DeepDiveStat {
  label: string
  value: string
  valueColor: string
}

interface DeepDiveCardData {
  id: string
  title: string
  subtitle: string
  icon: string
  accentColor: string
  stats: DeepDiveStat[]
  progressValue: number
  cta: string
}

interface DeepDiveCardProps {
  card: DeepDiveCardData
  index: number
}

const iconMap: Record<string, React.ElementType> = {
  globe: Globe,
  'bar-chart': BarChart2,
  network: Network,
  file: FileText,
}

export function DeepDiveCard({ card, index }: DeepDiveCardProps) {
  const Icon = iconMap[card.icon] ?? Globe

  return (
    <div
      className="bg-white border border-[#e2e8f0] rounded-xl flex flex-col cursor-pointer relative overflow-hidden animate-slide-in-up hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
      style={{
        animationDelay: `${index * 100}ms`,
        boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
        background: `linear-gradient(135deg, ${card.accentColor}08 0%, transparent 40%), #ffffff`,
      }}
    >
      <div className="p-5 flex flex-col gap-4 flex-1">
        {/* Header: title + icon top right */}
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <p className="text-sm font-bold text-[#1e293b] leading-tight">{card.title}</p>
            <p className="text-xs text-[#64748b] mt-0.5">{card.subtitle}</p>
          </div>
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
            style={{
              backgroundColor: `${card.accentColor}20`,
              color: card.accentColor,
            }}
          >
            <Icon size={18} />
          </div>
        </div>

        {/* Stats - key value pairs */}
        <div className="space-y-2">
          {card.stats.map((stat) => (
            <div key={stat.label} className="flex items-center justify-between text-sm">
              <span className="text-[#64748b]">{stat.label}</span>
              <span className="font-bold" style={{ color: stat.valueColor }}>
                {stat.value}
              </span>
            </div>
          ))}
        </div>

        {/* Single thin progress bar */}
        <div className="h-1.5 bg-[#e2e8f0] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: `${card.progressValue}%`,
              backgroundColor: card.accentColor,
            }}
          />
        </div>

        {/* CTA link */}
        <a
          href="#"
          className="mt-auto flex items-center gap-0.5 text-sm font-medium hover:opacity-80 transition-opacity"
          style={{ color: '#1677ff' }}
        >
          {card.cta}
          <ChevronRight size={14} />
        </a>
      </div>
    </div>
  )
}
