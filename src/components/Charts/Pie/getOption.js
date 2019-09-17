export default function(option, data) {
  const { tooltip, ...rest } = data;

  return {
    ...option,
    tooltip: {
      ...option.tooltip,
      ...tooltip,
    },
    ...rest,
  };
}
