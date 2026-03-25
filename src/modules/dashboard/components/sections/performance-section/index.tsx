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
                border: "1px solid",
                borderColor: "custom.border",
                borderLeft: "4px solid",
                borderLeftColor: isBest ? "#16a34a" : "#dc2626",
                transition: "box-shadow 0.2s",
                bgcolor: "background.paper",
                display: "flex",
                alignItems: "center",
                gap: 2,
                cursor: "pointer",
                "&:hover": { boxShadow: 2 },
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
                  bgcolor: isBest ? "#22c55e" : "#ef4444",
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
                  py: 0.75,
                  borderRadius: 9999,
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  flexShrink: 0,
                  bgcolor: isBest ? "#dcfce7" : "#fee2e2",
                  color: isBest ? "#16a34a" : "#dc2626",
                }}
              >
                {card.trend === "up" ? (
                  <TrendingUp size={16} />
                ) : (
                  <TrendingDown size={16} />
                )}
                {card.trend === "up" ? "+" : "-"}
                {card.change}%
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
