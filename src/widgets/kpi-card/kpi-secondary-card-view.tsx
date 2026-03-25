"use client";

import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import type { KPIMetric, Period } from "@/shared/types";
import { Dropdown } from "@/shared/ui/dropdown";
import { SecondaryIconBadge } from "./secondary-icon-badge";
import { CARD_PERIOD_OPTIONS } from "./constants";

export type KpiSecondaryCardViewProps = {
  metric: KPIMetric;
  index: number;
  count: number;
  trendColor: string;
  iconAccent: string;
  cardPeriod: Period;
  onCardPeriodChange: (period: Period) => void;
  chartSlot: ReactNode;
};

export const KpiSecondaryCardView = ({
  metric,
  index,
  count,
  trendColor,
  iconAccent,
  cardPeriod,
  onCardPeriodChange,
  chartSlot,
}: KpiSecondaryCardViewProps) => (
  <Box
    className="animate-slide-in-up"
    role="group"
    aria-label={`${metric.label} KPI`}
    sx={{
      border: "1px solid",
      borderColor: "custom.border",
      borderRadius: "16px",
      bgcolor: "background.paper",
      boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
      p: 2,
      display: "flex",
      flexDirection: "row",
      gap: 1.25,
      cursor: "pointer",
      minWidth: 0,
      width: "100%",
      maxWidth: "100%",
      boxSizing: "border-box",
      transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
      animationDelay: `${index * 80}ms`,
      "&:hover": {
        transform: "translateY(-4px)",
        boxShadow: "0 10px 20px rgba(0,0,0,0.15), 0 4px 6px rgba(0,0,0,0.1)",
        borderColor: "#cbd5e1",
      },
    }}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 1,
        minWidth: 0,
      }}
    >
      <SecondaryIconBadge metricId={metric.id} accentColor={iconAccent} />
      <Typography
        sx={{
          fontSize: "0.8125rem",
          color: "text.secondary",
          fontWeight: 500,
          lineHeight: 1.35,
          minWidth: 0,
        }}
      >
        {metric.label}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "baseline",
          gap: 1,
          columnGap: 1.25,
          minWidth: 0,
          flex: "0 1 auto",
        }}
      >
        <Typography
          component="span"
          sx={{
            fontSize: { xs: "1.25rem", sm: "1.5rem" },
            fontWeight: 700,
            lineHeight: 1.1,
            color: metric.color,
          }}
        >
          {metric.prefix ?? ""}
          {count}
          {metric.unit ?? ""}
        </Typography>
        <Box
          component="span"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 0.25,
            fontSize: "0.75rem",
            fontWeight: 600,
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
    </Box>
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-end",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 1.5,
        minWidth: 0,
        mt: "auto",
      }}
    >
      <Box sx={{ flexShrink: 0, minWidth: 0 }}>
        {metric.showPeriodDropdown ? (
          <Dropdown
            options={CARD_PERIOD_OPTIONS}
            value={cardPeriod}
            onChange={(v) => onCardPeriodChange(v as Period)}
          />
        ) : null}
      </Box>
      {chartSlot}
    </Box>
  </Box>
);
