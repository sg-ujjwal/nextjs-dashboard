'use client'
import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/utils/cn'

interface DropdownOption<T extends string> {
  label: string
  value: T
}

interface DropdownProps<T extends string> {
  options: DropdownOption<T>[]
  value: T
  onChange: (value: T) => void
  className?: string
  label?: string
}

export function Dropdown<T extends string>({ options, value, onChange, className, label }: DropdownProps<T>) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const current = options.find(o => o.value === value)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className={cn('relative', className)}>
      {label && <span className="text-xs text-text-muted mb-1 block">{label}</span>}
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-2 bg-white border border-bg-border rounded-lg px-3 py-1.5 text-sm text-text-primary hover:border-slate-400 transition-colors"
      >
        <span>{current?.label}</span>
        <ChevronDown size={14} className={cn('transition-transform', open && 'rotate-180')} />
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 z-50 min-w-[140px] bg-white border border-bg-border rounded-lg shadow-card-lg overflow-hidden animate-fade-in">
          {options.map(opt => (
            <button
              key={opt.value}
              onClick={() => { onChange(opt.value); setOpen(false) }}
              className={cn(
                'w-full text-left px-3 py-2 text-sm transition-colors hover:bg-bg-elevated',
                opt.value === value ? 'font-medium text-[#2F446A]' : 'text-[#64748b]'
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
