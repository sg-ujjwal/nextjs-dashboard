"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CARD_BORDER_RADIUS_SX } from "@/core/theme/card-styles";

const STATUS_DEPLOYED = "#027A48";
const STATUS_PROGRESS = "#EF6C00";
const STATUS_PENDING = "#0288D1";

const LegendDot = ({ color, label }: { color: string; label: string }) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
    <Box
      sx={{
        width: 10,
        height: 10,
        borderRadius: "50%",
        bgcolor: color,
        flexShrink: 0,
      }}
    />
    <Typography
      sx={{
        fontSize: "0.8125rem",
        fontWeight: 500,
        color: "text.primary",
        lineHeight: 1.3,
      }}
    >
      {label}
    </Typography>
  </Box>
);

const RISK_RING_COLORS = {
  low: "#86EFAC",
  medium: "#FB923C",
  high: "#F87171",
} as const;

const RiskRing = ({ level }: { level: keyof typeof RISK_RING_COLORS }) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
    <Box
      sx={{
        width: 18,
        height: 18,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <Box
        sx={{
          width: 12,
          height: 12,
          borderRadius: "50%",
          border: "2px solid",
          borderColor: RISK_RING_COLORS[level],
          bgcolor: "transparent",
          boxSizing: "border-box",
        }}
      />
    </Box>
    <Typography
      sx={{
        fontSize: "0.8125rem",
        fontWeight: 500,
        color: "text.primary",
        lineHeight: 1.3,
        textTransform: "capitalize",
      }}
    >
      {level}
    </Typography>
  </Box>
);

const panelSx = {
  bgcolor: "rgba(255, 255, 255, 0.96)",
  borderRadius: CARD_BORDER_RADIUS_SX,
  boxShadow: "0 2px 14px rgba(15, 23, 42, 0.12)",
  border: "1px solid rgba(148, 163, 184, 0.28)",
  backdropFilter: "blur(8px)",
  p: 1.75,
  minWidth: 200,
} as const;

const sectionTitleSx = {
  fontSize: "11px",
  fontWeight: 600,
  color: "text.secondary",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  mb: 1,
  opacity: 0.92,
} as const;

export const MapLegendPanels = () => (
  <Box
    sx={{
      position: "absolute",
      top: 16,
      right: 16,
      display: "flex",
      flexDirection: "column",
      zIndex: 1000,
    }}
  >
    <Box sx={panelSx}>
      <Typography sx={sectionTitleSx}>Status layer</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.85 }}>
        <LegendDot color={STATUS_DEPLOYED} label="Deployed solution" />
        <LegendDot color={STATUS_PROGRESS} label="Deployment in progress" />
        <LegendDot color={STATUS_PENDING} label="Pending proposal" />
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "1px",
          bgcolor: "rgba(148, 163, 184, 0.35)",
          my: 1.25,
        }}
      />
      <Typography sx={sectionTitleSx}>Risk status</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.65 }}>
        <RiskRing level="low" />
        <RiskRing level="medium" />
        <RiskRing level="high" />
      </Box>
    </Box>
  </Box>
);
