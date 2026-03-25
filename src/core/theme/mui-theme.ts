import { createTheme } from '@mui/material/styles'
import { colors } from '@/core/theme/tokens/colors'
import { FONT_FAMILY_STACK } from '@/core/theme/tokens/font-family'

declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      bgPrimary: string
      bgElevated: string
      border: string
      headerBar: string
      headerBorder: string
      sidebarBg: string
      sidebarBorder: string
      sidebarHover: string
      sidebarActive: string
      sidebarText: string
      sidebarTextActive: string
      sidebarSectionLabel: string
      fab: string
      textMuted: string
      brandGradient: string
      kpiPrimaryGradient: string
    }
  }
  interface PaletteOptions {
    custom?: Partial<Palette['custom']>
  }
}

const brand = {
  500: '#1677ff',
  600: '#0958d9',
} as const

const theme = createTheme({
  cssVariables: false,
  palette: {
    mode: 'light',
    primary: {
      main: brand[500],
      dark: brand[600],
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#a855f7',
    },
    success: {
      main: '#027A48',
      light: '#4ade80',
      dark: '#16a34a',
    },
    warning: {
      main: '#f59e0b',
      light: '#fcd34d',
      dark: '#d97706',
    },
    error: {
      main: '#ef4444',
      light: '#f87171',
      dark: '#dc2626',
    },
    info: {
      main: '#38bdf8',
      light: '#7dd3fc',
      dark: '#0284c7',
    },
    background: {
      default: colors.bg.primary,
      paper: '#ffffff',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'hsla(0, 0%, 0%, 0.50)',
      disabled: '#94a3b8',
    },
    divider: colors.bg.border,
    custom: {
      bgPrimary: colors.bg.primary,
      bgElevated: colors.bg.elevated,
      border: colors.bg.border,
      headerBar: '#2F446A',
      headerBorder: '#243750',
      sidebarBg: colors.sidebar.bg,
      sidebarBorder: '#dde3eb',
      sidebarHover: 'rgba(46, 67, 98, 0.08)',
      sidebarActive: '#2e4362',
      sidebarText: '#4b5563',
      sidebarTextActive: '#ffffff',
      sidebarSectionLabel: 'rgba(0, 0, 0, 0.5)',
      fab: '#2e4362',
      textMuted: '#94a3b8',
      brandGradient: 'linear-gradient(98.66deg, #2F446A -14.67%, #6486C4 83.98%)',
      kpiPrimaryGradient:
        'radial-gradient(152.14% 265.63% at 50% 50%, #466192 0%, #2F446A 100%)',
    },
  },
  typography: {
    fontFamily: FONT_FAMILY_STACK,
    h6: { fontSize: '1rem', fontWeight: 700, lineHeight: 1.25 },
    subtitle2: { fontSize: '0.75rem', fontWeight: 500 },
    caption: { fontSize: '0.625rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' as const },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: colors.bg.primary,
          color: '#1e293b',
          overflowX: 'hidden',
          fontFamily: FONT_FAMILY_STACK,
        },
        '*, *::before, *::after': { boxSizing: 'border-box' },
        html: {
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
        '::-webkit-scrollbar': { width: 6, height: 6 },
        '::-webkit-scrollbar-track': { background: '#f1f5f9' },
        '::-webkit-scrollbar-thumb': {
          background: '#cbd5e1',
          borderRadius: 3,
        },
        '::-webkit-scrollbar-thumb:hover': { background: '#94a3b8' },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none' },
      },
    },
  },
})

export default theme
