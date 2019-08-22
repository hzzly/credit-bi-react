function seriesCreator(series) {
  return series.map(e => ({
    type: 'bar',
    ...e,
  }));
}

export default function(option, data) {
  const { xAxis, yAxis, yCategory, series = [], ...rest } = data;

  return {
    ...option,
    xAxis,
    yAxis: {
      ...option.yAxis,
      ...yAxis,
      data: yCategory || [],
    },
    series: seriesCreator(series),
    ...rest,
  };
}
