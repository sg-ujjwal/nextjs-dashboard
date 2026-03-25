"use client";

import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";
import { Activity } from "lucide-react";
import { KPI_SECONDARY_ICONS } from "./constants";

export type SecondaryIconBadgeProps = {
  metricId: string;
  accentColor: string;
};

export const SecondaryIconBadge = ({
  metricId,
  accentColor,
}: SecondaryIconBadgeProps) => {
  const Icon = KPI_SECONDARY_ICONS[metricId] ?? Activity;
  return (
    <Box
      sx={{
        width: 40,
        height: 40,
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        bgcolor: "#F4F6F9",
        color: accentColor,
      }}
    >
      <Icon size={20} strokeWidth={2} aria-hidden />
    </Box>
  );
};
