export default {
  backgroundColor: 'transparent',
  tooltip: {
    trigger: 'axis',
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
    // formatter: (params) => {
    //   return `
    //     <p style="text-align:left;font-size:12px;line-height:18px">${params[0].name}</p>
    //     ${params.map(({ color, seriesName, value }) => {
    //       return value !== '-'
    //         ? `
    //             <p style="text-align:left;line-height:18px">
    //             <i class="chart-circle" style="${styles}background-color:${color}"></i>
    //               ${seriesName}：${value}
    //             </p>
    //           `
    //           : null;
    //       })
    //       .join('')}
    //   `;
    // },
  },
  grid: {
    top: '50px',
    left: '0',
    right: '0',
    bottom: '0',
    containLabel: true,
  },
  xAxis: {
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      textStyle: {
        fontSize: 10,
        color: '#666',
      },
    },
    type: 'category',
    boundaryGap: true,
  },
  yAxis: {
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      textStyle: {
        fontSize: 10,
        color: '#666',
      },
    },
    splitLine: {
      lineStyle: {
        color: '#f1f1f1',
      },
    },
    type: 'value',
    // boundaryGap: [0, '10%'],
  },
};
