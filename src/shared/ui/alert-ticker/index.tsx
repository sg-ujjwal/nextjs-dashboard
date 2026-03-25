"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ALERT_TICKER } from "@/modules/dashboard/services/dashboard-data";
import { AlertTriangle, Info, Zap } from "lucide-react";

const SEVERITY_COLOR: Record<string, string> = {
  critical: "#dc2626",
  high: "#dc2626",
  medium: "#b91c1c",
  low: "#64748b",
};

const SeverityIcon = ({ s, color }: { s: string; color?: string }) => {
  if (s === "critical" || s === "high")
    return <AlertTriangle size={12} color={color} />;
  if (s === "medium") return <Zap size={12} color={color} />;
  return <Info size={12} color={color} />;
};

export function AlertTicker() {
  const items = [...ALERT_TICKER, ...ALERT_TICKER];

  return (
    <Box sx={{ width: "100%", overflow: "hidden", position: "relative" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            flexShrink: 0,
            px: 2,
            py: 1,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Box
            sx={{
              width: 8,
              height: 8,
              bgcolor: "error.main",
              borderRadius: "50%",
              animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            }}
          />
          <Typography
            sx={{
              fontSize: "0.75rem",
              fontWeight: 400,
              color: "rgba(0, 0, 0, 0.87)",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}
          >
            Live Feed
          </Typography>
        </Box>
        <Box sx={{ overflow: "hidden", flex: 1 }}>
          <Box
            className="animate-ticker"
            sx={{
              display: "flex",
              alignItems: "center",
              whiteSpace: "nowrap",
              gap: 0,
              py: 1,
              px: 2,
            }}
          >
            {items.map((item, idx) => (
              <Box
                key={`${item.id}-${idx}`}
                component="span"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  fontSize: "0.75rem",
                  color: "rgba(0, 0, 0, 0.87)",
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    bgcolor: "error.main",
                    borderRadius: "50%",
                    animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                  }}
                />
                <Typography
                  component="span"
                  sx={{ fontSize: "inherit", color: "rgba(0, 0, 0, 0.50)" }}
                >
                  [{item.region}]
                </Typography>
                {item.message}
                <Typography
                  component="span"
                  sx={{
                    fontSize: "inherit",
                    color: "rgba(0, 0, 0, 0.50)",
                    backgroundColor: "#E9EDF4",
                    px: 1,
                    borderRadius: "20px",
                    border: "1px solid",
                    borderColor: "custom.border",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  — {item.timestamp}
                </Typography>
                <Typography
                  component="span"
                  sx={{ fontSize: "inherit", color: "custom.border", px: 2 }}
                >
                  |
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
