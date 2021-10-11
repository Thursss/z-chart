import { ReactNode } from 'react';

import pluginFactory from '../singleton';
import Register from '../singleton/Register';
import defaultProps from './defaultProps';
import { EChartsLinePluginProps, LineTransformedProps } from './type';
import { EchartTypes } from '../type';

class EChartsLinePlugin {
  description: string;
  chart: (transformProps: LineTransformedProps) => any;
  constructor(props?: EChartsLinePluginProps) {
    props = { ...defaultProps, ...(props ?? {}) } as EChartsLinePluginProps;
    this.description = props.description;
    this.chart = props.chart;
  }

  configure(key: EchartTypes) {
    pluginFactory().register<EChartsLinePluginProps>(key, {
      description: this.description,
      chart: this.chart,
    });
  }
}

export default EChartsLinePlugin;
