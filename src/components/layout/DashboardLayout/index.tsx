'use client'
import { Sidebar } from '@/components/layout/Sidebar'
import { Header } from '@/components/layout/Header'
import { AlertTicker } from '@/components/common/AlertTicker'
import { Sparkles } from 'lucide-react'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-[#f0f2f5] overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <Header />
        <main className="flex-1 overflow-y-auto bg-[#f0f2f5]">
          {children}
        </main>
        {/* Floating Action Button */}
        <button
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 z-50 hover:opacity-90"
          style={{ backgroundColor: '#2F446A' }}
          aria-label="Add or quick action"
        >
          <Sparkles size={22} />
        </button>
      </div>
    </div>
  )
}
