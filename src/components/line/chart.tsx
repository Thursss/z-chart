import React, { FC, useEffect, ReactNode } from 'react';
import styled from 'styled-components';
import { EChartsOption } from 'echarts';

import EChartCore from '../chart';
import { LineTransformedProps } from './type';

const ChartLine: FC<LineTransformedProps> = (props) => {
  const { width, height, key, value, formData } = props;
  // TODO
  const echartOptions: EChartsOption = {
    xAxis: {
      type: 'category',
      show: false,
      boundaryGap: false,
      data: formData.map((item) => item[key]),
    },
    yAxis: {
      type: 'value',
      show: false,
    },
    grid: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      width: '100%',
      containLabel: false,
    },
    series: [
      {
        type: 'line',
        itemStyle: {
          opacity: 0,
        },
        lineStyle: {
          opacity: 0,
        },
        smooth: true,
        data: formData.map((item) => item[value]),
        areaStyle: {
          color: '#a64ca6',
        },
      },
    ],
  };
  return (
    <EChartCore
      width={width}
      height={height}
      echartOptions={echartOptions}
    ></EChartCore>
  );
};

ChartLine.defaultProps = {
  key: 'key',
  value: 'value',
};

export default ChartLine;
