"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Sparkles,
  AlertTriangle,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import {
  PRIORITY_CARDS,
  DEPLOYMENT_ALERTS,
  STRATEGIC_FORECASTING,
} from "@/modules/dashboard/services/dashboard-data";
import { useReportGeneration } from "@/modules/dashboard/hooks/use-report-generation";
import { CARD_BORDER_RADIUS_SX } from "@/core/theme/card-styles";

const HEADER_GRADIENT =
  "linear-gradient(98.66deg, #2F446A -14.67%, #6486C4 83.98%)";

export default function AIBriefPanel() {
  const { isGenerating, isComplete, progress, generate } =
    useReportGeneration();

  return (
    <Box
      sx={{
        borderRadius: CARD_BORDER_RADIUS_SX,
        overflow: "hidden",
        border: "1px solid #93c5fd",
        boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
        bgcolor: "background.paper",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          px: 2.5,
          py: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: HEADER_GRADIENT,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Box>
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: 700,
                color: "#fff",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Sparkles size={18} color="#fff" />
              AI Executive Brief
            </Typography>
            <Typography
              sx={{
                fontSize: "0.75rem",
                color: "rgba(255,255,255,0.8)",
                mt: 0.25,
              }}
            >
              Updated: 3 minute ago
            </Typography>
          </Box>
        </Box>
        <Button
          onClick={generate}
          disabled={isGenerating}
          endIcon={<ChevronRight size={14} />}
          sx={{
            textTransform: "none",
            minHeight: "36px",
            borderRadius: 9999,
            px: 2,
            py: 0.5,
            fontSize: "0.875rem",
            fontWeight: 500,
            bgcolor: isComplete ? "#d1fae5" : "#fff",
            color: isComplete ? "#065f46" : "#2F446A",
            "&:hover": { bgcolor: isComplete ? "#a7f3d0" : "#f8fafc" },
            ...(isGenerating ? { opacity: 0.7, cursor: "wait" } : {}),
          }}
        >
          {isGenerating ? "Generate Full Report" : "View Full Report"}
        </Button>
      </Box>

      {isGenerating && (
        <Box sx={{ px: 2.5, py: 1, bgcolor: "#f8fafc" }}>
          <Box
            sx={{
              height: 6,
              bgcolor: "#e2e8f0",
              borderRadius: 9999,
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                height: "100%",
                borderRadius: 9999,
                transition: "width 0.3s",
                width: `${progress}%`,
                bgcolor: "#2F446A",
              }}
            />
          </Box>
        </Box>
      )}

      <Box
        sx={{
          p: 2.5,
          flex: 1,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 2.5,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "0.625rem",
              fontWeight: 600,
              color: "hsla(0, 0%, 0%, 0.50)",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              mb: 1.5,
            }}
          >
            Top 3 Priorities
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {PRIORITY_CARDS.map((item) => (
              <Box
                key={item.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  p: 1.5,
                  borderRadius: CARD_BORDER_RADIUS_SX,
                  bgcolor: "#f8fafc",
                  border: "1px solid transparent",
                  cursor: "pointer",
                  transition: "background-color 0.2s, border-color 0.2s",
                  "&:hover": { bgcolor: "#f1f5f9", borderColor: "#e2e8f0" },
                }}
              >
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "#fff",
                    flexShrink: 0,
                    bgcolor: "#2F446A",
                  }}
                >
                  {item.rank}
                </Box>
                <Box sx={{ minWidth: 0, flex: 1 }}>
                  <Typography
                    sx={{
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      color: "#1e293b",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{ fontSize: "0.75rem", color: "#64748b", mt: 0.25 }}
                  >
                    {item.description}
                  </Typography>
                </Box>
                <ArrowUpRight
                  size={16}
                  color="hsla(0, 0%, 0%, 0.50)"
                  style={{ flexShrink: 0 }}
                />
              </Box>
            ))}
          </Box>
        </Box>

        {DEPLOYMENT_ALERTS.map((alert) => (
          <Box
            key={alert.id}
            sx={{
              borderRadius: CARD_BORDER_RADIUS_SX,
              p: 2,
              border: "1px solid rgba(254, 215, 170, 0.5)",
              bgcolor: "#fff7ed",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
              <AlertTriangle
                size={20}
                style={{ flexShrink: 0, marginTop: 2, color: "#ea580c" }}
              />
              <Box>
                <Typography
                  sx={{
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    color: "#9a3412",
                  }}
                >
                  {alert.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    mt: 0.75,
                    lineHeight: 1.6,
                    color: "#9a3412",
                  }}
                >
                  {alert.message}
                </Typography>
                <Button
                  type="button"
                  sx={{
                    mt: 1,
                    p: 0,
                    minWidth: 0,
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "#9a3412",
                    textTransform: "none",
                    "&:hover": {
                      bgcolor: "transparent",
                      textDecoration: "underline",
                    },
                  }}
                >
                  View
                </Button>
              </Box>
            </Box>
          </Box>
        ))}

        <Box>
          <Typography
            sx={{
              fontSize: "0.625rem",
              fontWeight: 600,
              color: "hsla(0, 0%, 0%, 0.50)",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              mb: 1.5,
            }}
          >
            Strategic Forecasting
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {STRATEGIC_FORECASTING.map((item) => (
              <Box
                key={item.id}
                sx={{
                  borderRadius: CARD_BORDER_RADIUS_SX,
                  p: 1.5,
                  bgcolor: "#f8fafc",
                  borderLeft: "4px solid",
                  borderLeftColor: item.color,
                  pl: 1.5,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    color: "#1e293b",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{ fontSize: "0.75rem", color: "#64748b", mt: 0.5 }}
                >
                  {item.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
