'use client'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

interface SparklineChartProps {
  data: number[]
  color: string
  height?: number
}

export default function SparklineChart({ data, color, height = 48 }: SparklineChartProps) {
  const options = {
    chart: {
      type: 'bar' as const,
      sparkline: { enabled: true },
      animations: { enabled: true, speed: 800 },
      offsetX: 0,
      offsetY: 0,
    },
    grid: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      show: false,
    },
    plotOptions: { bar: { columnWidth: '70%', borderRadius: 1 } },
    colors: [color],
    tooltip: {
      x: { show: false },
      y: { formatter: (v: number) => v.toString() },
      theme: 'light',
    },
    states: { hover: { filter: { type: 'lighten' as const, value: 0.15 } } },
  }

  return <Chart type="bar" series={[{ data }]} options={options} height={height} width="100%" />
}
