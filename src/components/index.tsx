import pluginFactory from './singleton';

export * from './type';
export * from './line/type';
export { default as EChartsLinePlugin } from './line';
export { default as EChartsPiePlugin } from './pie';
export { default as initEChartPlugin } from './initEChartPlugin';
export default pluginFactory;
