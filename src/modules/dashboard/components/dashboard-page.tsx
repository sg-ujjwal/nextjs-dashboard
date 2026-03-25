"use client";

import dynamic from "next/dynamic";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import KPISection from "./sections/kpi-section";
import PerformanceSection from "./sections/performance-section";
import { CARD_BORDER_RADIUS_SX } from "@/core/theme/card-styles";

const skeletonCardSx = {
  bgcolor: "background.paper",
  borderRadius: CARD_BORDER_RADIUS_SX,
  border: "1px solid",
  borderColor: "custom.border",
};

const MapSection = dynamic(() => import("./sections/map-section"), {
  ssr: false,
  loading: () => (
    <Skeleton
      variant="rounded"
      height={560}
      sx={skeletonCardSx}
      animation="pulse"
    />
  ),
});

const AIBriefPanel = dynamic(() => import("./sections/ai-brief-panel"), {
  ssr: false,
  loading: () => (
    <Skeleton
      variant="rounded"
      height={560}
      sx={skeletonCardSx}
      animation="pulse"
    />
  ),
});

const LiveFeedSection = dynamic(() => import("./sections/live-feed-section"), {
  ssr: false,
  loading: () => (
    <Skeleton
      variant="rounded"
      height={64}
      sx={skeletonCardSx}
      animation="pulse"
    />
  ),
});

const DeepDiveSection = dynamic(() => import("./sections/deep-dive-section"), {
  ssr: false,
  loading: () => (
    <Skeleton
      variant="rounded"
      height={320}
      sx={skeletonCardSx}
      animation="pulse"
    />
  ),
});

export default function DashboardPage() {
  return (
    <Box
      sx={{
        p: 0,
        width: "100%",
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      <KPISection />
      <Box
        sx={{
          width: "100%",
          py: 3,
          px: { xs: "20px", md: "40px" },
        }}
      >
        <Box
          sx={{
            maxWidth: 1920,
            mx: "auto",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "100%",
                md: "50% 50%",
                lg: "60% 40%",
                xl: "70% 30%",
              },
              gap: 3,
              minHeight: 560,
            }}
          >
            <MapSection />
            <AIBriefPanel />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              mt: 3,
            }}
          >
            <PerformanceSection />
            <LiveFeedSection />
            <DeepDiveSection />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
