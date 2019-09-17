export default function(option, data) {
  const { ...rest } = data;

  return {
    ...option,
    ...rest,
  };
}
