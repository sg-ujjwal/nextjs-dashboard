"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  KPI_PRIMARY,
  KPI_SECONDARY,
} from "@/modules/dashboard/services/kpi-data";
import { KPICard } from "@/widgets/kpi-card";
import { usePeriodSelector } from "@/modules/dashboard/hooks/use-period-selector";
import { CARD_BORDER_RADIUS_SX } from "@/core/theme/card-styles";

export default function KPISection() {
  const { period } = usePeriodSelector();

  return (
    <>
      <Box
        sx={{
          px: { xs: "20px", md: "40px" },
          pt: 2,
          pb: 2,
          bgcolor: "background.paper",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: 1920,
            mx: "auto",
            gap: 2,
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "auto" } }}>
            <Typography
              sx={{
                fontSize: "1.25rem",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                color: "text.primary",
              }}
            >
              Executive Control Room
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "text.secondary",
                display: "inline-block",
              }}
            >
              Strategic Overview & Impact Posture
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: { xs: "space-between", sm: "flex-end" },
              gap: 1.5,
              flexShrink: 0,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                gap: 1,
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  color: "text.secondary",
                }}
              >
                System Status
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  borderRadius: CARD_BORDER_RADIUS_SX,
                  px: 1.5,
                  py: 0.5,
                  bgcolor: "rgba(34, 197, 94, 0.1)",
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    bgcolor: "#027A48",
                    animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                    borderRadius: "50%",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    color: "#027A48",
                  }}
                >
                  Live Monitoring
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          py: 3,
          px: { xs: "20px", md: "40px" },
        }}
      >
        <Box
          component="section"
          sx={{
            width: "100%",
            minWidth: 0,
            maxWidth: 1920,
            mx: "auto",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "minmax(0, 1fr)",
                md: "repeat(2, minmax(0, 1fr))",
              },
              gap: 2,
              mb: 2,
              width: "100%",
            }}
          >
            {KPI_PRIMARY.map((metric, i) => (
              <Box key={metric.id} sx={{ minWidth: 0, maxWidth: "100%" }}>
                <KPICard
                  metric={{ ...metric, isPrimary: true }}
                  index={i}
                  period={period}
                />
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "minmax(0, 1fr)",
                sm: "repeat(2, minmax(0, 1fr))",
                md: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
              },
              gap: 2,
              width: "100%",
            }}
          >
            {KPI_SECONDARY.map((metric, i) => (
              <Box key={metric.id} sx={{ minWidth: 0, maxWidth: "100%" }}>
                <KPICard metric={metric} index={i + 2} period={period} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
