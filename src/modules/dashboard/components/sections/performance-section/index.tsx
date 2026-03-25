"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Trophy, CircleAlert, TrendingUp, TrendingDown } from "lucide-react";
import { PERFORMANCE_CARDS } from "@/modules/dashboard/services/dashboard-data";
import { CARD_BORDER_RADIUS_SX } from "@/core/theme/card-styles";

export default function PerformanceSection() {
  return (
    <Box component="section">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { md: "repeat(2, 1fr)" },
          gap: 2,
        }}
      >
        {PERFORMANCE_CARDS.map((card) => {
          const isBest = card.type === "best";
          return (
            <Box
              key={card.id}
              sx={{
                borderRadius: CARD_BORDER_RADIUS_SX,
                p: 2,
                borderLeft: "4px solid",
                borderLeftColor: isBest ? "#16a34a" : "#dc2626",
                transition: "transform 0.3s, box-shadow 0.3s",
                bgcolor: "background.paper",
                display: "flex",
                alignItems: "center",
                gap: 2,
                cursor: "pointer",
                "&:hover": {
                  transform: "translateY(-4px) !important",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.15), 0 4px 6px rgba(0,0,0,0.1)",
                },
                minHeight: "84px",
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: CARD_BORDER_RADIUS_SX,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  bgcolor: isBest ? "#027A48" : "#ef4444",
                }}
              >
                {isBest ? (
                  <Trophy size={20} color="#fff" />
                ) : (
                  <CircleAlert size={20} color="#fff" />
                )}
              </Box>
              <Box sx={{ minWidth: 0, flex: 1 }}>
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "text.secondary",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    mb: 0.25,
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    color: "text.primary",
                  }}
                >
                  {card.deployment}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 9999,
                  fontSize: "14px",
                  fontWeight: 500,
                  flexShrink: 0,
                  bgcolor: isBest ? "#EDF7ED" : "#FFF4F4",
                  color: isBest ? "#16a34a" : "#dc2626",
                }}
              >
                {card.trend === "up" ? "+" : "-"}
                {card.change}%
                {card.trend === "up" ? (
                  <TrendingUp size={16} />
                ) : (
                  <TrendingDown size={16} />
                )}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
