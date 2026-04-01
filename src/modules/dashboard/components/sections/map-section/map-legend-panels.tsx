"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CARD_BORDER_RADIUS_SX } from "@/core/theme/card-styles";
import { color, m } from "framer-motion";
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

const RiskRing = ({
  size,
  label,
  bgColor,
}: {
  size: number;
  label: string;
  bgColor: string;
}) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
    <Box
      sx={{
        width: 8,
        height: 8,
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
          borderColor: bgColor,
          boxShadow: "0 0 0 1px rgba(255,255,255,0.8)",
          bgcolor: "rgba(148, 163, 184, 0.2)",
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
      {label}
    </Typography>
  </Box>
);

const panelSx = {
  bgcolor: "rgba(255, 255, 255, 0.96)",
  borderRadius: CARD_BORDER_RADIUS_SX,
  boxShadow: 0,
  minWidth: 204,
  p: 1.5,
} as const;

const sectionTitleSx = {
  fontSize: "12px",
  fontWeight: 400,
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
      <Typography sx={sectionTitleSx}>Risk Status</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
        <RiskRing size={8} label="Low" bgColor="#2E7D3226" />
        <RiskRing size={8} label="Medium" bgColor="#EF6C0026" />
        <RiskRing size={8} label="High" bgColor="#D32F2F26" />
      </Box>
    </Box>
  </Box>
);
