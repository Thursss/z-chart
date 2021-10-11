import React, { FC, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { init, ECharts } from 'echarts';

import { EChartsProps, EChartsStylesProps } from '../type';

const Styles = styled.div<EChartsStylesProps>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;

const EChartCore: FC<EChartsProps> = ({ width, height, echartOptions }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<ECharts>();
  useEffect(() => {
    if (!divRef.current) return;
    if (!chartRef.current) chartRef.current = init(divRef.current);
    chartRef.current.setOption(echartOptions, true);
  }, [echartOptions]);
  useEffect(() => {
    if (chartRef.current) chartRef.current.resize({ width, height });
  }, [width, height]);
  return <Styles ref={divRef} width={width} height={height}></Styles>;
};

export default EChartCore;
