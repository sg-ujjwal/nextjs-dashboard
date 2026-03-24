'use client'
import { AlertTicker } from '@/components/common/AlertTicker'

export default function LiveFeedSection() {
  return (
    <section className="rounded-xl overflow-hidden border border-bg-border bg-white shadow-sm">
      <AlertTicker />
    </section>
  )
}
