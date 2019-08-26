export default {
  tooltip: {
    backgroundColor: 'rgba(255,255,255,0.80)',
    borderColor: '#F1F1F1',
    borderWidth: 1,
    padding: [8, 16],
    textStyle: {
      color: '#666',
      fontSize: 10,
    },
    extraCssText: 'box-shadow:0 1px 4px 0 rgba(0,0,0,0.20);border-radius:4px;',
    formatter: '',
  },
  yAxis: {
    type: 'category',
    inverse: true,
    nameGap: 16,
    axisLine: {
      show: false,
      lineStyle: {
        color: '#ddd',
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: '#ddd',
      },
    },
    axisLabel: {
      interval: 0,
      margin: 65,
      textStyle: {
        color: '#eee',
        align: 'left',
        fontSize: 12,
      },
      rich: {
        a: {
          color: '#fff',
          backgroundColor: '#FAAA39',
          width: 20,
          height: 20,
          fontSize: 12,
          align: 'center',
          borderRadius: 10,
        },
        b: {
          color: '#fff',
          backgroundColor: '#4197FD',
          width: 20,
          height: 20,
          fontSize: 12,
          align: 'center',
          borderRadius: 10,
        },
      },
      formatter(params) {
        if (parseInt(params.slice(0, 1), 10) < 3) {
          return [` {a|${parseInt(params.slice(0, 1), 10) + 1}}  ${params.slice(1)}`].join('\n');
        } else {
          return [` {b|${parseInt(params.slice(0, 1), 10) + 1}}  ${params.slice(1)}`].join('\n');
        }
      },
    },
  },
};
