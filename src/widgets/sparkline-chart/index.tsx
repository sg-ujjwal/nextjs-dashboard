'use client'

import dynamic from 'next/dynamic'
import { useMemo } from 'react'
import { FONT_FAMILY_STACK } from '@/core/theme/tokens/font-family'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

export type SparklineChartVariant = 'sparkline' | 'labeledBars'

export interface SparklineChartProps {
  data: number[]
  color: string
  height?: number
  variant?: SparklineChartVariant
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
  columnWidth,
  barBorderRadius,
}: SparklineChartProps) {
  const isSparkline = variant === 'sparkline'
  // Primary KPI "spikes" look closer to the reference with slightly narrower bars.
  const colW = columnWidth ?? (isSparkline ? '65%' : '80%')
  const radius = barBorderRadius ?? (isSparkline ? 1 : 2)
  const labelReserve = isSparkline ? 0 : 18
  const chartHeight = height + labelReserve

  const dataMax = useMemo(() => {
    const m = Math.max(...data.map((n) => (Number.isFinite(n) ? n : 0)), 0)
    return m > 0 ? m : 1
  }, [data])
  const yMax = dataMax * 1.06

  const categories = useMemo(() => data.map(() => '\u00a0'), [data])

  const options = useMemo(() => {
    if (isSparkline) {
      return {
        chart: {
          type: 'bar' as const,
          sparkline: { enabled: true },
          animations: { enabled: true, speed: 800 },
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
          tooltip: { enabled: false },
        },
        yaxis: { show: false, min: 0, max: yMax },
        tooltip: { enabled: false },
        states: { hover: { filter: { type: 'lighten' as const, value: 0.15 } } },
      }
    }
    return {
      chart: {
        type: 'bar' as const,
        sparkline: { enabled: false },
        animations: { enabled: true, speed: 700, easing: 'easeinout' as const },
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
          show: true,
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
        tooltip: { enabled: false },
      },
      yaxis: { show: false, min: 0, max: yMax },
      tooltip: {
        enabled: true,
        x: { show: false },
        y: { formatter: (v: number) => (typeof v === 'number' ? v.toLocaleString() : String(v)) },
        theme: 'light',
      },
      states: { hover: { filter: { type: 'lighten' as const, value: 0.12 } } },
    }
  }, [categories, color, colW, isSparkline, radius, yMax])

  return <Chart type="bar" series={[{ name: 'value', data }]} options={options} height={chartHeight} width="100%" />
}
