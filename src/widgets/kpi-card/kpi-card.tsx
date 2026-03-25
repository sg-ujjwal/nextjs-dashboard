"use client";

import { useEffect, useMemo, useState } from "react";
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

const CHART_HEIGHT_PRIMARY = 110;
const CHART_HEIGHT_SECONDARY = 80;

const PERIOD_TO_POINT_COUNT: Record<Period, number> = {
  "7d": 7,
  "30d": 12,
  "90d": 18,
  "1y": 12,
};

const resampleSeries = (data: number[], targetLength: number): number[] => {
  if (targetLength <= 0) return [];
  if (data.length === 0) return Array.from({ length: targetLength }, () => 0);
  if (data.length === 1) return Array.from({ length: targetLength }, () => data[0]!);

  const lastIndex: number = data.length - 1;
  return Array.from({ length: targetLength }, (_, targetIndex: number) => {
    const t: number = targetLength === 1 ? 0 : targetIndex / (targetLength - 1);
    const sourceIndex: number = t * lastIndex;
    const leftIndex: number = Math.floor(sourceIndex);
    const rightIndex: number = Math.ceil(sourceIndex);
    const leftValue: number = Number.isFinite(data[leftIndex]!) ? data[leftIndex]! : 0;
    const rightValue: number = Number.isFinite(data[rightIndex]!) ? data[rightIndex]! : 0;
    if (leftIndex === rightIndex) return leftValue;
    const weight: number = sourceIndex - leftIndex;
    return leftValue * (1 - weight) + rightValue * weight;
  });
};

export type KPICardProps = {
  metric: KPIMetric;
  index: number;
  period: Period;
};

export const KPICard = (props: KPICardProps) => {
  const { metric, index } = props;
  const isPrimary = metric.isPrimary ?? false;
  const [cardPeriod, setCardPeriod] = useState<Period>(() => props.period);
  useEffect(() => {
    setCardPeriod(props.period);
  }, [props.period]);

  const effectivePeriod: Period = isPrimary ? props.period : cardPeriod;
  const resampledSparklineData: number[] = useMemo(
    () => resampleSeries(metric.sparklineData, PERIOD_TO_POINT_COUNT[effectivePeriod]),
    [metric.sparklineData, effectivePeriod],
  );
  const shouldShowXAxisLabels: boolean = effectivePeriod === "1y";
  const decimals: number = Math.abs(metric.value - Math.round(metric.value)) > 1e-9 ? 1 : 0;

  const count = useCountUp({
    end: metric.value,
    duration: 1500,
    delay: index * 100,
    decimals,
  });

  const hasDarkBg = (metric.hasDarkBackground ?? true) && isPrimary;
  const trendColor = resolveTrendColor(metric, hasDarkBg);
  const chartColor = metric.chartColor ?? metric.color;

  const chartBlockPrimary = (
    <Box
      sx={{
        flex: "1 1 38%",
        minWidth: { xs: 72, sm: 120 },
        maxWidth: { xs: 120, sm: 180, md: 240 },
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        // Allow ApexCharts tooltip to render outside the bar container.
        overflow: "visible",
        height: CHART_HEIGHT_PRIMARY,
      }}
    >
      <SparklineChart
        data={resampledSparklineData}
        color={chartColor}
        height={CHART_HEIGHT_PRIMARY}
        variant="sparkline"
      />
    </Box>
  );

  const chartBlockSecondary = (
    <Box
      className="secondary-chart"
      sx={{
        flex: "1 1 0",
        minWidth: { xs: 72, sm: 120 },
        maxWidth: { xs: 120, sm: 140 },
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        overflow: "hidden",
        height: CHART_HEIGHT_SECONDARY,
      }}
    >
      <SparklineChart
        data={resampledSparklineData}
        color={chartColor}
        height={CHART_HEIGHT_SECONDARY}
        variant="labeledBars"
        columnWidth="80%"
        barBorderRadius={2}
        showXAxisLabels={shouldShowXAxisLabels}
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
