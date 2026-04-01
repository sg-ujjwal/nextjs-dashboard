"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CARD_BORDER_RADIUS_SX } from "@/core/theme/card-styles";
import { color, m } from "framer-motion";

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
    <Typography sx={{ fontSize: "0.75rem", color: "text.primary" }}>
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
          width: size,
          height: size,
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
        fontSize: "0.75rem",
        color: "text.primary",
      }}
    >
      {label}
    </Typography>
  </Box>
);

const panelSx = {
  bgcolor: "#F4F6F9",
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
  letterSpacing: "0.06em",
  mb: 1,
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
      <Typography sx={sectionTitleSx}>Status Layer</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.75 }}>
        <LegendDot color="#027A48" label="Deployed solution" />
        <LegendDot color="#EF6C00" label="Deployment in progress" />
        <LegendDot color="#0288D1" label="Pending proposal" />
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "1px",
          bgcolor: "#00000014",
          marginBlock: "10px",
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
