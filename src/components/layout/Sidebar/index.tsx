'use client'
import { useState } from 'react'
import { cn } from '@/utils/cn'
import {
  LayoutDashboard, Map, Shield, TrendingUp, Cloud,
  Settings, User, ChevronLeft,
} from 'lucide-react'

interface NavItem {
  id: string
  label: string
  icon: React.ElementType
  badge?: number
  section: string
}

const NAV_ITEMS: NavItem[] = [
  { id: 'dashboard', label: 'Control Room', icon: LayoutDashboard, section: 'STRATEGIC' },
  { id: 'countries', label: 'Countries', icon: Map, section: 'STRATEGIC' },
  { id: 'deployment', label: 'Deployment', icon: Shield, section: 'ASSESSMENT' },
  { id: 'proposals', label: 'Proposals', icon: TrendingUp, section: 'ASSESSMENT' },
  { id: 'intelligence', label: 'Intelligence', icon: Cloud, section: 'ASSESSMENT' },
]

const SECTIONS = ['STRATEGIC', 'ASSESSMENT']

export function Sidebar() {
  const [active, setActive] = useState('dashboard')
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={cn(
        'flex flex-col transition-all duration-300 h-screen sticky top-0 shrink-0',
        'bg-[#e5e7eb]',
        collapsed ? 'w-16' : 'w-[260px]',
      )}
    >
      {/* Logo */}
      <div className="flex items-center justify-between px-4 h-16 border-b border-[#d1d5db] shrink-0">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: 'linear-gradient(98.66deg, #2F446A -14.67%, #6486C4 83.98%)' }}
            >
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1e293b] leading-tight">Aqua Intel</p>
              <p className="text-xs text-[#64748b] leading-tight">Control Room</p>
            </div>
          </div>
        )}
        {collapsed && (
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center mx-auto"
            style={{ background: 'linear-gradient(98.66deg, #2F446A -14.67%, #6486C4 83.98%)' }}
          >
            <span className="text-white font-bold text-sm">AI</span>
          </div>
        )}
        <button
          onClick={() => setCollapsed(c => !c)}
          className={cn(
            'p-1 rounded hover:bg-[#d1d5db] text-[#64748b] hover:text-[#1e293b] transition-colors',
            collapsed && 'mx-auto mt-0',
          )}
        >
          <ChevronLeft size={16} className={cn('transition-transform duration-300', collapsed && 'rotate-180')} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 no-scrollbar">
        {SECTIONS.map(section => {
          const items = NAV_ITEMS.filter(n => n.section === section)
          return (
            <div key={section} className="mb-4">
              {!collapsed && (
                <p className="text-xs text-[#64748b] font-semibold px-4 mb-1 tracking-wider uppercase">{section}</p>
              )}
              {items.map(item => (
                <button
                  key={item.id}
                  onClick={() => setActive(item.id)}
                  title={collapsed ? item.label : undefined}
                  className={cn(
                    'w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-all duration-200 relative group',
                    active === item.id
                      ? 'text-white border-r-2 border-[#6486C4]'
                      : 'text-[#4b5563] hover:bg-[#d1d5db] hover:text-[#1e293b]',
                  )}
                  style={active === item.id ? { backgroundColor: '#2F446A' } : undefined}
                >
                  <item.icon size={18} className="shrink-0" />
                  {!collapsed && (
                    <>
                      <span className="flex-1 text-left">{item.label}</span>
                      {item.badge && (
                        <span className="bg-[#ef4444] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center shrink-0">
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                  {collapsed && item.badge && (
                    <span className="absolute top-1 right-1 w-2 h-2 bg-[#ef4444] rounded-full" />
                  )}
                </button>
              ))}
            </div>
          )
        })}
      </nav>
    </aside>
  )
}
