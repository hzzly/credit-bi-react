export default function(option, data) {
  const { tooltip, visualMap, grid, series = [] } = data;

  return {
    ...option,
    grid,
    tooltip: {
      ...option.tooltip,
      ...tooltip,
    },
    visualMap: {
      ...option.visualMap,
      ...visualMap,
    },
    series: [...option.series, ...series],
  };
}
