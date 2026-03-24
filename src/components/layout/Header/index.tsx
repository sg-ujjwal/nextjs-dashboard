'use client'
import { useState } from 'react'
import { Bell, Search, Moon } from 'lucide-react'
import { cn } from '@/utils/cn'

export function Header() {
  const [searching, setSearching] = useState(false)

  return (
    <header className="h-16 flex items-center justify-between px-6 shrink-0 border-b border-[#1e3a5f]" style={{ backgroundColor: '#2F446A' }}>
      <div className="flex items-center gap-6">
        <div
          className={cn(
            'hidden md:flex items-center gap-2 bg-white/10 border rounded-lg transition-all duration-300',
            searching ? 'border-[#00d4ff] w-64' : 'border-white/20 w-36',
          )}
        >
          <Search size={14} className="ml-3 text-white/60 shrink-0" />
          <input
            className="flex-1 bg-transparent text-sm text-white placeholder:text-white/50 outline-none py-1.5 pr-3"
            placeholder="Search..."
            onFocus={() => setSearching(true)}
            onBlur={() => setSearching(false)}
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          className="p-2 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors"
          aria-label="Toggle dark mode"
        >
          <Moon size={18} />
        </button>
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1677ff] to-[#a855f7] flex items-center justify-center shrink-0 ring-2 ring-white/20">
          <span className="text-white text-xs font-semibold">U</span>
        </div>
      </div>
    </header>
  )
}
