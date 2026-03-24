export interface ChartDataPoint {
  x: string | number
  y: number
}

export interface ChartSeries {
  name: string
  data: (number | ChartDataPoint)[]
  color?: string
}

export interface SparklineConfig {
  data: number[]
  color: string
  height?: number
}

export interface AreaChartConfig {
  series: ChartSeries[]
  categories: string[]
  colors: string[]
  height?: number
}

export interface BarChartConfig {
  series: ChartSeries[]
  categories: string[]
  colors: string[]
  height?: number
  horizontal?: boolean
}
