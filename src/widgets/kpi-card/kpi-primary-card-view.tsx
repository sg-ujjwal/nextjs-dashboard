"use client";

import type { ElementType, ReactNode } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import type { KPIMetric } from "@/shared/types";
import { CARD_BORDER_RADIUS_SX } from "@/core/theme/card-styles";
import {
  BENEFICIARIES_ICON,
  WALET_ICON,
} from "@/core/theme/tokens/svg.Contant";

const KPI_ICON_MAP: Record<string, ElementType> = {
  beneficiaries: BENEFICIARIES_ICON,
  wallet: WALET_ICON,
};

export type KpiPrimaryCardViewProps = {
  metric: KPIMetric;
  index: number;
  count: number;
  hasDarkBg: boolean;
  trendColor: string;
  chartSlot: ReactNode;
};

export const KpiPrimaryCardView = ({
  metric,
  index,
  count,
  hasDarkBg,
  trendColor,
  chartSlot,
}: KpiPrimaryCardViewProps) => {
  const Icon = KPI_ICON_MAP[metric.icon ?? "beneficiaries"] ?? BENEFICIARIES_ICON;

  return (
    <Box
      sx={(theme) => ({
        borderRadius: CARD_BORDER_RADIUS_SX,
        p: 2,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
        alignItems: "center",
        gap: 1.5,
        cursor: "pointer",
        transition: "transform 0.3s, box-shadow 0.3s",
        animationDelay: `${index * 80}ms`,
        border: "1px solid",
        minWidth: 0,
        width: "100%",
        maxWidth: "100%",
        boxSizing: "border-box",
        borderColor: hasDarkBg
          ? "rgba(47, 68, 106, 0.3)"
          : theme.palette.custom.border,
        ...(hasDarkBg
          ? { background: theme.palette.custom.kpiPrimaryGradient }
          : {
              bgcolor:
                "radial-gradient(152.14% 265.63% at 50% 50%, #466192 0%, #2F446A 100%)",
              boxShadow: "0px 5px 6px -3px #00000003",
            }),
        "&:hover": {
          transform: "translateY(-4px) !important",
          boxShadow: "0 10px 20px rgba(0,0,0,0.15), 0 4px 6px rgba(0,0,0,0.1)",
        },
      })}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexDirection: "column",
          gap: 0.5,
          minWidth: 0,
        }}
      >
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: "8px",
            bgcolor: "#F4F6F9",
            color: "#2F446A",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon size={24} />
        </Box>
        <Typography
          sx={{
            fontSize: "0.875rem",
            fontWeight: 400,
            lineHeight: 1.25,
            color: hasDarkBg ? "rgba(255,255,255,0.9)" : "text.secondary",
            minWidth: 0,
            flex: "1 1 auto",
            overflow: "hidden",
            textOverflow: "ellipsis",
            mt: 1.5,
          }}
        >
          {metric.label}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            gap: 1,
            flexWrap: "wrap",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "1.35rem", sm: "40px" },
              fontWeight: 400,
              lineHeight: 1,
              flex: "0 1 auto",
              minWidth: 0,
              color: hasDarkBg ? "#fff" : metric.color,
            }}
          >
            {metric.prefix ?? ""}
            {count}
            {metric.unit ?? ""}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.25,
              fontSize: "16px",
              fontWeight: 400,
              flexShrink: 0,
              color: trendColor,
            }}
          >
            {metric.change > 0 ? "+" : ""}
            {metric.change}%
            {metric.trend === "up" ? (
              <TrendingUp size={16} aria-hidden />
            ) : metric.trend === "down" ? (
              <TrendingDown size={16} aria-hidden />
            ) : (
              <Minus size={16} aria-hidden />
            )}
          </Box>
        </Box>
      </Box>
      {chartSlot}
    </Box>
  );
};
