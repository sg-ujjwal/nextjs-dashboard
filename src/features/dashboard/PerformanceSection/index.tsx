'use client'
import { Trophy, CircleAlert, TrendingUp, TrendingDown } from 'lucide-react'
import { PERFORMANCE_CARDS } from '@/services/dashboardData'
import { cn } from '@/utils/cn'

export default function PerformanceSection() {
  return (
    <section>
      <div className="grid md:grid-cols-2 gap-4">
        {PERFORMANCE_CARDS.map((card) => {
          const isBest = card.type === 'best'
          return (
            <div
              key={card.id}
              className={cn(
                'rounded-xl p-4 border border-[#e2e8f0] transition-all duration-200 hover:shadow-md cursor-pointer bg-white flex items-center gap-4',
                isBest ? 'border-l-4 border-l-[#16a34a]' : 'border-l-4 border-l-[#dc2626]',
              )}
            >
              <div
                className={cn(
                  'w-10 h-10 rounded-lg flex items-center justify-center shrink-0',
                  isBest ? 'bg-[#22c55e]' : 'bg-[#ef4444]',
                )}
              >
                {isBest ? (
                  <Trophy size={20} className="text-white" />
                ) : (
                  <CircleAlert size={20} className="text-white" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold text-[#64748b] uppercase tracking-wider mb-0.5">
                  {card.title}
                </p>
                <p className="text-sm font-bold text-[#1e293b]">{card.deployment}</p>
              </div>
              <div
                className={cn(
                  'flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-bold shrink-0',
                  isBest
                    ? 'bg-[#dcfce7] text-[#16a34a]'
                    : 'bg-[#fee2e2] text-[#dc2626]',
                )}
              >
                {card.trend === 'up' ? (
                  <TrendingUp size={16} />
                ) : (
                  <TrendingDown size={16} />
                )}
                {card.trend === 'up' ? '+' : '-'}{card.change}%
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
