import { ReactNode } from 'react';

import { Base } from '../type';

export interface EChartsLinePluginProps extends Base {
  chart: (transformProps: LineTransformedProps) => any;
}

export interface LineTransformedProps {
  width?: number;
  height?: number;
  key: string;
  value: string;
  formData: any[];
}
