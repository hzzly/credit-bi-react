function seriesCreator(series) {
  return series.map(e => ({
    type: 'bar',
    ...e,
  }));
}

export default function(option, data) {
  const { tooltip, xAxis, yAxis, yCategory, series = [], ...rest } = data;

  return {
    ...option,
    xAxis,
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
}
