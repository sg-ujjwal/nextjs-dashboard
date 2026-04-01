"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Rocket, Wallet, AlertTriangle, Globe } from "lucide-react";
import { CARD_BORDER_RADIUS_SX } from "@/core/theme/card-styles";
import { MAP_CHROME_BG } from "./map-section-constants";

export type MapFooterStatsProps = {
  activeDeployment: number;
  capitalDeployed: number;
  highAlerts: number;
  diversification: number;
};

export const MapFooterStats = ({
  activeDeployment,
  capitalDeployed,
  highAlerts,
  diversification,
}: MapFooterStatsProps) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      color: "#fff",
      borderBottomLeftRadius: CARD_BORDER_RADIUS_SX,
      borderBottomRightRadius: CARD_BORDER_RADIUS_SX,
      background: MAP_CHROME_BG,
    }}
  >
    <Box
      sx={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        px: 2,
        py: 1.5,
        minWidth: 0,
      }}
    >
      <Rocket
        size={16}
        color="rgba(255,255,255,0.9)"
        style={{ flexShrink: 0 }}
      />
      <Typography
        sx={{
          fontSize: "0.75rem",
          fontWeight: 500,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        Active Deployment
      </Typography>
      <Typography sx={{ fontSize: "0.875rem", fontWeight: 700, flexShrink: 0 }}>
        {activeDeployment}
      </Typography>
    </Box>
    <Box
      sx={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        px: 2,
        py: 1.5,
        minWidth: 0,
        borderLeft: "1px solid rgba(147, 197, 253, 0.45)",
      }}
    >
      <Wallet
        size={16}
        color="rgba(255,255,255,0.9)"
        style={{ flexShrink: 0 }}
      />
      <Typography
        sx={{
          fontSize: "0.75rem",
          fontWeight: 500,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        Capital Deployment
      </Typography>
      <Typography sx={{ fontSize: "0.875rem", fontWeight: 700, flexShrink: 0 }}>
        ${capitalDeployed.toFixed(1)}M
      </Typography>
    </Box>
    <Box
      sx={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        px: 2,
        py: 1.5,
        minWidth: 0,
        borderLeft: "1px solid rgba(147, 197, 253, 0.45)",
      }}
    >
      <AlertTriangle
        size={16}
        color="rgba(255,255,255,0.9)"
        style={{ flexShrink: 0 }}
      />
      <Typography
        sx={{
          fontSize: "0.75rem",
          fontWeight: 500,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        High Alerts
      </Typography>
      <Typography sx={{ fontSize: "0.875rem", fontWeight: 700, flexShrink: 0 }}>
        {highAlerts}
      </Typography>
    </Box>
    <Box
      sx={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        px: 2,
        py: 1.5,
        minWidth: 0,
        borderLeft: "1px solid rgba(147, 197, 253, 0.45)",
      }}
    >
      <Globe
        size={16}
        color="rgba(255,255,255,0.9)"
        style={{ flexShrink: 0 }}
      />
      <Typography
        sx={{
          fontSize: "0.75rem",
          fontWeight: 500,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        Diversification
      </Typography>
      <Typography sx={{ fontSize: "0.875rem", fontWeight: 700, flexShrink: 0 }}>
        {diversification}/100
      </Typography>
      <Box
        sx={{
          width: 64,
          height: 6,
          bgcolor: "rgba(6, 78, 59, 0.85)",
          borderRadius: 9999,
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <Box
          sx={{
            height: "100%",
            bgcolor: "#4ADE80",
            borderRadius: 9999,
            transition: "width 0.3s",
            width: `${diversification}%`,
          }}
        />
      </Box>
    </Box>
  </Box>
);
