'use client'

import dynamic from 'next/dynamic'
import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'
import KPISection from './KPISection'
import PerformanceSection from './PerformanceSection'
import { CARD_BORDER_RADIUS_SX } from '@/theme/cardStyles'

const skeletonCardSx = {
  bgcolor: 'background.paper',
  borderRadius: CARD_BORDER_RADIUS_SX,
  border: '1px solid',
  borderColor: 'custom.border',
}

const MapSection = dynamic(() => import('./MapSection'), {
  ssr: false,
  loading: () => <Skeleton variant="rounded" height={560} sx={skeletonCardSx} animation="pulse" />,
})

const AIBriefPanel = dynamic(() => import('./AIBriefPanel'), {
  ssr: false,
  loading: () => <Skeleton variant="rounded" height={560} sx={skeletonCardSx} animation="pulse" />,
})

const LiveFeedSection = dynamic(() => import('./LiveFeedSection'), {
  ssr: false,
  loading: () => <Skeleton variant="rounded" height={64} sx={skeletonCardSx} animation="pulse" />,
})

const DeepDiveSection = dynamic(() => import('./DeepDiveSection'), {
  ssr: false,
  loading: () => <Skeleton variant="rounded" height={320} sx={skeletonCardSx} animation="pulse" />,
})

export default function DashboardPage() {
  return (
    <Box
      sx={{
        p: 3,
        maxWidth: 1920,
        mx: 'auto',
        width: '100%',
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        boxSizing: 'border-box',
      }}
    >
      <KPISection />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '1fr 380px' },
          gap: 3,
          minHeight: 560,
        }}
      >
        <MapSection />
        <AIBriefPanel />
      </Box>
      <PerformanceSection />
      <LiveFeedSection />
      <DeepDiveSection />
    </Box>
  )
}
