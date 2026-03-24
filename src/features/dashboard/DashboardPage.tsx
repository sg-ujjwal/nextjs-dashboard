'use client'
import dynamic from 'next/dynamic'
import KPISection from './KPISection'
import PerformanceSection from './PerformanceSection'

const MapSection = dynamic(() => import('./MapSection'), {
  ssr: false,
  loading: () => (
    <div className="h-[560px] bg-white rounded-xl border border-bg-border animate-pulse" />
  ),
})

const AIBriefPanel = dynamic(() => import('./AIBriefPanel'), {
  ssr: false,
  loading: () => (
    <div className="h-[560px] bg-white rounded-xl border border-bg-border animate-pulse" />
  ),
})

const LiveFeedSection = dynamic(() => import('./LiveFeedSection'), {
  ssr: false,
  loading: () => (
    <div className="h-16 bg-white rounded-xl border border-bg-border animate-pulse" />
  ),
})

const DeepDiveSection = dynamic(() => import('./DeepDiveSection'), {
  ssr: false,
  loading: () => (
    <div className="h-80 bg-white rounded-xl border border-bg-border animate-pulse" />
  ),
})

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6 max-w-[1920px] mx-auto">
      <KPISection />
      <div className="grid lg:grid-cols-[1fr_380px] gap-6 min-h-[560px]">
        <MapSection />
        <AIBriefPanel />
      </div>
      <PerformanceSection />
      <LiveFeedSection />
      <DeepDiveSection />
    </div>
  )
}
