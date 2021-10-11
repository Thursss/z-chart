import { ReactNode, FC } from 'react';
import { EChartsOption } from 'echarts';

export type EChartsStylesProps = {
  height?: number;
  width?: number;
};

export interface EChartsProps {
  height?: number;
  width?: number;
  echartOptions: EChartsOption;
}

export interface Base {
  description: string;
}

export interface EChartsPiePluginProps extends Base {
  chart?: any;
}

export type EchartTypes = 'line' | 'bar' | 'pie';
