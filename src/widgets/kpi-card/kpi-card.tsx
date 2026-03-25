"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Box from "@mui/material/Box";
import type { KPIMetric, Period } from "@/shared/types";
import { useCountUp } from "@/shared/hooks/use-count-up";
import { KpiPrimaryCardView } from "./kpi-primary-card-view";
import { KpiSecondaryCardView } from "./kpi-secondary-card-view";
import { resolveTrendColor } from "./resolve-trend-color";

const SparklineChart = dynamic(() => import("@/widgets/sparkline-chart"), {
  ssr: false,
});

const CHART_HEIGHT_PRIMARY = 56;
const CHART_HEIGHT_SECONDARY = 50;

export type KPICardProps = {
  metric: KPIMetric;
  index: number;
  period: Period;
};

export const KPICard = (props: KPICardProps) => {
  const { metric, index } = props;
  const [cardPeriod, setCardPeriod] = useState<Period>("7d");
  const count = useCountUp({
    end: metric.value,
    duration: 1500,
    delay: index * 100,
    decimals: metric.value % 1 !== 0 ? 1 : 0,
  });

  const isPrimary = metric.isPrimary ?? false;
  const hasDarkBg = (metric.hasDarkBackground ?? true) && isPrimary;
  const trendColor = resolveTrendColor(metric, hasDarkBg);
  const chartColor = metric.chartColor ?? metric.color;

  const chartBlockPrimary = (
    <Box
      sx={{
        flex: "1 1 38%",
        minWidth: { xs: 72, sm: 120 },
        maxWidth: "48%",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        overflow: "hidden",
        height: CHART_HEIGHT_PRIMARY,
      }}
    >
      <SparklineChart
        data={metric.sparklineData}
        color={chartColor}
        height={CHART_HEIGHT_PRIMARY}
        variant="sparkline"
      />
    </Box>
  );

  const chartBlockSecondary = (
    <Box
      sx={{
        flex: "1 1 0",
        minWidth: { xs: 100, sm: 112 },
        maxWidth: { xs: "50%", sm: "48%" },
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        overflow: "hidden",
        minHeight: 70,
      }}
    >
      <SparklineChart
        data={metric.sparklineData}
        color={chartColor}
        height={CHART_HEIGHT_SECONDARY}
        variant="labeledBars"
        columnWidth="80%"
        barBorderRadius={2}
      />
    </Box>
  );

  if (isPrimary) {
    return (
      <KpiPrimaryCardView
        metric={metric}
        index={index}
        count={count}
        hasDarkBg={hasDarkBg}
        trendColor={trendColor}
        chartSlot={chartBlockPrimary}
      />
    );
  }

  const iconAccent = metric.chartColor ?? metric.color;

  return (
    <KpiSecondaryCardView
      metric={metric}
      index={index}
      count={count}
      trendColor={trendColor}
      iconAccent={iconAccent}
      cardPeriod={cardPeriod}
      onCardPeriodChange={setCardPeriod}
      chartSlot={chartBlockSecondary}
    />
  );
};
