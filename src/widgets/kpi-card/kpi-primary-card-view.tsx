"use client";

import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import type { KPIMetric } from "@/shared/types";
import { CARD_BORDER_RADIUS_SX } from "@/core/theme/card-styles";
import { BENEFICIARIES_ICON } from "@/core/theme/tokens/svg.Contant";

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
  const isBeneficiariesCard = metric.id === "total-beneficiaries";

  return (
    <Box
      className="animate-slide-in-up"
      sx={(theme) => ({
        borderRadius: CARD_BORDER_RADIUS_SX,
        p: 2.5,
        display: "flex",
        justifyContent: "space-between",
        gap: 1.5,
        cursor: "pointer",
        transition: "box-shadow 0.2s",
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
        "&:hover": { boxShadow: 3 },
      })}
    >
      <Box
        sx={{
          display: "flex",
          flex: 1,
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexDirection: "column",
          gap: 1,
          minWidth: 0,
        }}
      >
        <Box>
          <BENEFICIARIES_ICON size={19} />
        </Box>
        <Typography
          sx={{
            fontSize: "0.875rem",
            fontWeight: 500,
            lineHeight: 1.25,
            color: hasDarkBg ? "rgba(255,255,255,0.9)" : "text.secondary",
            minWidth: 0,
            flex: "1 1 auto",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {metric.label}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "1.35rem", sm: "1.75rem" },
            fontWeight: 700,
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
            fontSize: "0.75rem",
            fontWeight: 600,
            flexShrink: 0,
            color: trendColor,
          }}
        >
          {metric.change > 0 ? "+" : ""}
          {metric.change}%
          {metric.trend === "up" ? (
            <TrendingUp size={12} aria-hidden />
          ) : metric.trend === "down" ? (
            <TrendingDown size={12} aria-hidden />
          ) : (
            <Minus size={12} aria-hidden />
          )}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 1.5,
          minHeight: 56,
          minWidth: 0,
          width: "fit-content",
        }}
      >
        {chartSlot}
      </Box>
    </Box>
  );
};
