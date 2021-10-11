import { EChartsLinePluginProps } from './type';
import ChartLine from './chart';

const defaultProps: EChartsLinePluginProps = {
  description: 'EChart pie test',
  chart: (transformProps) => ChartLine(transformProps),
};

export default defaultProps;
