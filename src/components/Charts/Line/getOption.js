function seriesCreator(series) {
  return series.map(e => ({
    type: 'line',
    symbol: 'circle',
    smooth: true,
    lineStyle: {
      normal: {
        width: 3,
      },
    },
    ...e,
  }));
}

export default function(option, data) {
  const { tooltip, xAxis, yAxis, yCategory, series = [], ...rest } = data;

  return {
    ...option,
    xAxis: {
      ...option.xAxis,
      ...xAxis,
    },
    tooltip: {
      ...option.tooltip,
      ...tooltip,
    },
    yAxis: {
      ...option.yAxis,
      ...yAxis,
      data: yCategory || [],
    },
    series: seriesCreator(series),
    ...rest,
  };
  // const { color, grid, category, series = [] } = data;

  // return {
  //   ...option,
  //   // color: color && Array.isArray(color) ? color : option.color,
  //   // grid: grid && grid.top ? grid : option.grid,
  //   // xAxis: {
  //   //   ...option.xAxis,
  //   //   data: category || [],
  //   // },
  //   series: [
  //     ...option.series,
  //     // seriesCreator(series)
  //   ],
  // };
}
