import EChartsLinePlugin from './line';
import EChartsPiePlugin from './pie';

/**
 * 初始化图表插件
 *
 */
export default function initEChartPlugin() {
  new EChartsLinePlugin().configure('line');
  new EChartsPiePlugin().configure('pie');
}
