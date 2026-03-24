'use client'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { Globe, BarChart2, Network, FileText, ChevronRight } from 'lucide-react'
import { CARD_BORDER_RADIUS_SX } from '@/core/theme/card-styles'

interface DeepDiveStat {
  label: string
  value: string
  valueColor: string
}

interface DeepDiveCardData {
  id: string
  title: string
  subtitle: string
  icon: string
  accentColor: string
  stats: DeepDiveStat[]
  progressValue: number
  cta: string
}

interface DeepDiveCardProps {
  card: DeepDiveCardData
  index: number
}

const iconMap: Record<string, React.ElementType> = {
  globe: Globe,
  'bar-chart': BarChart2,
  network: Network,
  file: FileText,
}

export function DeepDiveCard({ card, index }: DeepDiveCardProps) {
  const Icon = iconMap[card.icon] ?? Globe

  return (
    <Box
      className="animate-slide-in-up"
      sx={{
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'custom.border',
        borderRadius: CARD_BORDER_RADIUS_SX,
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        animationDelay: `${index * 100}ms`,
        boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
        background: `linear-gradient(135deg, ${card.accentColor}14 0%, transparent 40%), #ffffff`,
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          boxShadow: 3,
          transform: 'translateY(-2px)',
        },
      }}
    >
      <Box sx={{ p: 2.5, display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 1 }}>
          <Box sx={{ minWidth: 0, flex: 1 }}>
            <Typography sx={{ fontSize: '0.875rem', fontWeight: 700, color: 'text.primary', lineHeight: 1.25 }}>{card.title}</Typography>
            <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', mt: 0.5 }}>{card.subtitle}</Typography>
          </Box>
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: CARD_BORDER_RADIUS_SX,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              bgcolor: `${card.accentColor}33`,
              color: card.accentColor,
            }}
          >
            <Icon size={18} />
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {card.stats.map((stat) => (
            <Box key={stat.label} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.875rem' }}>
              <Typography sx={{ color: 'text.secondary' }}>{stat.label}</Typography>
              <Typography sx={{ fontWeight: 700, color: stat.valueColor }}>{stat.value}</Typography>
            </Box>
          ))}
        </Box>

        <Box sx={{ height: 6, bgcolor: 'custom.border', borderRadius: 9999, overflow: 'hidden' }}>
          <Box
            sx={{
              height: '100%',
              borderRadius: 9999,
              transition: 'width 0.3s',
              width: `${card.progressValue}%`,
              bgcolor: card.accentColor,
            }}
          />
        </Box>

        <Link
          href="#"
          underline="hover"
          sx={{
            mt: 'auto',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.25,
            fontSize: '0.875rem',
            fontWeight: 500,
            color: 'primary.main',
          }}
        >
          {card.cta}
          <ChevronRight size={14} />
        </Link>
      </Box>
    </Box>
  )
}
