export const colors = {
  brand: {
    50:  '#e6f4ff',
    100: '#bae0ff',
    200: '#91caff',
    300: '#69b1ff',
    400: '#4096ff',
    500: '#1677ff',
    600: '#0958d9',
    700: '#003eb3',
    800: '#002c8c',
    900: '#001d66',
  },
  bg: {
    /** Main content + layout shell (matches sidebar in app chrome) */
    primary:   '#F4F6F9',
    secondary: '#ffffff',
    card:      '#ffffff',
    elevated:  '#f8fafc',
    border:    '#e2e8f0',
  },
  sidebar: {
    /** Same as `bg.primary` — single app-chrome background */
    bg:     '#F4F6F9',
    hover:  'rgba(46, 67, 98, 0.08)',
    active: '#2e4362',
    border: '#dde3eb',
    text:   '#4b5563',
    textActive: '#ffffff',
  },
  text: {
    primary:   '#1e293b',
    secondary: '#64748b',
    muted:     '#94a3b8',
    inverse:   '#ffffff',
  },
  status: {
    success: { DEFAULT: '#22c55e', muted: '#f0fdf4' },
    warning: { DEFAULT: '#f59e0b', muted: '#fffbeb' },
    danger:  { DEFAULT: '#ef4444', muted: '#fef2f2' },
    info:    { DEFAULT: '#3b82f6', muted: '#eff6ff' },
  },
  accent: {
    aqua:   '#00d4ff',
    purple: '#a855f7',
    teal:   '#14b8a6',
    coral:  '#f97316',
  },
  risk: {
    low:      '#22c55e',
    medium:   '#f59e0b',
    high:     '#ef4444',
    critical: '#dc2626',
  },
} as const

export type ColorKey = keyof typeof colors
