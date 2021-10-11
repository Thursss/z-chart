import React from 'react';

import pluginFactory, { EChartsLinePluginProps, initEChartPlugin } from '../components';

// 初始化eachrt插件
initEChartPlugin()

function App() {
  const lineChart = pluginFactory().get<EChartsLinePluginProps>('line');
  return (
    <div className="App">
      <section>{
        lineChart.chart({
          height: 50,
          key: 'Day',
          value: 'SUM(AIR_TIME)',
          formData: [
            { Day: 'Friday', 'SUM(AIR_TIME)': 1943661 },
            { Day: 'Saturday', 'SUM(AIR_TIME)': 1798845 },
            { Day: 'Monday', 'SUM(AIR_TIME)': 1048653 },
            { Day: 'Thursday', 'SUM(AIR_TIME)': 1626157 },
            { Day: 'Sunday', 'SUM(AIR_TIME)': 1048653 },
            { Day: 'Sunday', 'SUM(AIR_TIME)': 1048653 },
            { Day: 'Saturday', 'SUM(AIR_TIME)': 1798845 },
            { Day: 'Monday', 'SUM(AIR_TIME)': 1048653 },
            { Day: 'Thursday', 'SUM(AIR_TIME)': 1626157 },
            { Day: 'Sunday', 'SUM(AIR_TIME)': 1048653 },
            { Day: 'Saturday', 'SUM(AIR_TIME)': 179845 },
            { Day: 'Monday', 'SUM(AIR_TIME)': 1048653 },
            { Day: 'Thursday', 'SUM(AIR_TIME)': 1626157 },
            { Day: 'Sunday', 'SUM(AIR_TIME)': 1048653 },
          ],
        })
      }</section>
    </div>
  );
}

export default App;