'use client'

import dynamic from 'next/dynamic'
import { useMemo } from 'react'
import { FONT_FAMILY_STACK } from '@/core/theme/tokens/font-family'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

export type SparklineChartVariant = 'sparkline' | 'labeledBars'

const MONTH_LABELS: readonly string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const formatTooltipValue = (value: number): string => {
  if (!Number.isFinite(value)) return "0";
  const isInteger = Math.abs(value - Math.round(value)) < 1e-9;
  if (isInteger) return String(Math.round(value));
  return value.toLocaleString(undefined, { maximumFractionDigits: 2 });
};

export interface SparklineChartProps {
  data: number[]
  color: string
  height?: number
  variant?: SparklineChartVariant
  xAxisLabels?: string[]
  showXAxisLabels?: boolean
  /** Bar width as % of category slot; tight bars for KPI row ≈ 80% */
  columnWidth?: string
  /** Top-only rounding on vertical bars */
  barBorderRadius?: number
}

export default function SparklineChart({
  data,
  color,
  height = 48,
  variant = 'sparkline',
  xAxisLabels,
  showXAxisLabels = true,
  columnWidth,
  barBorderRadius,
}: SparklineChartProps) {
  const isSparkline = variant === 'sparkline'
  // Primary KPI "spikes" look closer to the reference with slightly narrower bars.
  const colW = columnWidth ?? (isSparkline ? '65%' : '80%')
  const radius = barBorderRadius ?? (isSparkline ? 1 : 2)
  const labelReserve = isSparkline ? 0 : showXAxisLabels ? 18 : 0
  const chartHeight = height + labelReserve

  const dataMax = useMemo(() => {
    const m = Math.max(...data.map((n) => (Number.isFinite(n) ? n : 0)), 0)
    return m > 0 ? m : 1
  }, [data])
  const yMax = dataMax * 1.06

  const categories = useMemo(() => {
    if (isSparkline) return data.map(() => '\u00a0')
    if (!showXAxisLabels) return data.map(() => '\u00a0')
    const labels = xAxisLabels && xAxisLabels.length > 0 ? xAxisLabels : MONTH_LABELS
    return data.map((_, index) => labels[index % labels.length] ?? '\u00a0')
  }, [data, isSparkline, showXAxisLabels, xAxisLabels])

  const options = useMemo(() => {
    if (isSparkline) {
      return {
        chart: {
          type: 'bar' as const,
          sparkline: { enabled: true },
          animations: { enabled: true, speed: 800, easing: 'easeinout' as const, animateGradually: { enabled: true, delay: 0 } },
          offsetX: 0,
          offsetY: 0,
        },
        grid: { padding: { top: 0, right: 0, bottom: 0, left: 0 }, show: false },
        plotOptions: { bar: { columnWidth: colW, borderRadius: radius, borderRadiusApplication: 'end' as const } },
        colors: [color],
        xaxis: {
          categories,
          labels: { show: false },
          axisBorder: { show: false },
          axisTicks: { show: false },
        },
        yaxis: { show: false, min: 0, max: yMax },
        tooltip: {
          enabled: true,
          followCursor: true,
          shared: false,
          intersect: false,
          x: { show: false },
          y: { formatter: (v: number) => formatTooltipValue(v) },
          cssClass: "kpi-apex-tooltip",
          theme: 'dark',
          marker: { show: false },
        },
        states: { hover: { filter: { type: 'lighten' as const, value: 0.15 } } },
      }
    }
    return {
      chart: {
        type: 'bar' as const,
        sparkline: { enabled: false },
          animations: { enabled: true, speed: 700, easing: 'easeinout' as const, animateGradually: { enabled: true, delay: 0 } },
        toolbar: { show: false },
        zoom: { enabled: false },
        fontFamily: FONT_FAMILY_STACK,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: colW,
          borderRadius: radius,
          borderRadiusApplication: 'end' as const,
        },
      },
      colors: [color],
      fill: { opacity: 1 },
      stroke: { show: false },
      dataLabels: { enabled: false },
      grid: {
        show: false,
        padding: { top: 4, right: 0, bottom: 0, left: 0 },
      },
      xaxis: {
        categories,
        labels: {
          show: showXAxisLabels,
          style: {
            fontSize: '6px',
            fontWeight: 400,
            colors: '#d1d5db',
          },
          offsetY: 0,
        },
        axisBorder: { show: false },
        axisTicks: { show: false },
        crosshairs: { show: false },
      },
      yaxis: { show: false, min: 0, max: yMax },
      tooltip: {
        enabled: true,
        followCursor: true,
        cssClass: "kpi-apex-tooltip",
        x: { show: false },
        intersect: false,
        y: { formatter: (v: number) => formatTooltipValue(v) },
        theme: 'light',
        marker: { show: false },
      },
      states: { hover: { filter: { type: 'lighten' as const, value: 0.12 } } },
    }
  }, [categories, color, colW, isSparkline, radius, showXAxisLabels, yMax])

  return <Chart type="bar" series={[{ name: 'value', data }]} options={options} height={chartHeight} width="100%" />
}
