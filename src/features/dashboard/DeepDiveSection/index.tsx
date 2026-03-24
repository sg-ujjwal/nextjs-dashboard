'use client'
import { DEEP_DIVE_CARDS } from '@/services/dashboardData'
import { DeepDiveCard } from '@/components/cards/DeepDiveCard'

export default function DeepDiveSection() {
  return (
    <section>
      <h2 className="text-xl font-bold text-[#1e293b] mb-4">Deep Dive</h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        {DEEP_DIVE_CARDS.map((card, i) => (
          <DeepDiveCard key={card.id} card={card} index={i} />
        ))}
      </div>
    </section>
  )
}
