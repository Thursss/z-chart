import pluginFactory from './components/singleton';

export * from './components/type';
export * from './components/line/type';
export { default as EChartsLinePlugin } from './components/line';
export { default as EChartsPiePlugin } from './components/pie';
export { default as initEChartPlugin } from './components/initEChartPlugin';
export default pluginFactory;
