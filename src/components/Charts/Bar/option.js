// import echarts from 'echarts';

export default {
  // color: '#928aff',
  // title: {
  //   text: '',
  //   textStyle: {
  //     color: '#00ffc6',
  //     fontSize: 12,
  //     fontWeight: 'normal',
  //     // textBorderColor: '#ffffff',
  //     // textBorderWidth: 1,
  //   },
  //   padding: 0,
  //   left: 10,
  //   top: 0,
  // },
  // tooltip: {
  //   trigger: 'axis',
  //   backgroundColor: 'rgba(0,0,0,0.5)',
  //   borderColor: '#00ffc6',
  //   borderWidth: 1,
  //   textStyle: {
  //     color: '#00ffc6',
  //     fontSize: 12,
  //   },
  //   formatter: "",
  // },
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
    formatter(params) {
      return `${params.name}：${params.data.value}%`;
    },
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
  // grid: {
  //   show: true,
  //   borderColor: 'transparent',
  //   backgroundColor: 'transparent',
  //   left: '50',
  //   right: '10',
  //   top: '0',
  //   bottom: '0',
  // },
  // label: {
  //   show: true,
  //   position: 'top',
  //   distance: 10,
  //   formatter: '{b}',
  //   fontSize: 12,
  //   color: '#00b0ff',
  //   textBorderWidth: '0',
  // },
  // xAxis: {
  //   data: ['上海','广州','杭州','重庆','哈尔滨','北京','武汉','乌鲁木齐','西安','香港'],
  //   boundaryGap: true,
  //   axisLine: {
  //     lineStyle: { color: '#00b0ff' },
  //   },
  //   axisLabel: {
  //     show: false,
  //     textStyle: { fontSize: 10 },
  //   },
  //   axisTick: {
  //     inside: true,
  //   },
  //   splitLine: {
  //     show: true,
  //     lineStyle: {
  //       color: 'rgba(255,255,255,0.1)',
  //       width: 1,
  //     },
  //   }
  // },
  // yAxis: {
  //   position: 'left',
  //   type: 'value',
  //   // max: 'dataMax',
  //   axisLine: {
  //     lineStyle: { color: '#00b0ff' },
  //   },
  //   axisLabel: {
  //     textStyle: { fontSize: 10 },
  //     showMinLabel: false,
  //     showMaxLabel: false,
  //     // inside: true,
  //   },
  //   axisTick: {
  //     inside: true,
  //   },
  //   splitLine: {
  //     lineStyle: {
  //       color: 'rgba(255,255,255,0.1)',
  //       width: 1,
  //     },
  //   }
  // },
  // series: [{
  //   name: '',
  //   type: 'bar',
  //   barWidth: '60%',
  //   itemStyle: {
  //     normal: {
  //       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
  //         { offset: 0, color: '#00ffc6' },
  //         { offset: 1, color: 'rgba(0,176,255,0)' }
  //       ]),
  //       borderColor: '#00b0ff',
  //       borderWidth: 1,
  //     },
  //   },
  //   lineStyle: {
  //     normal: { width: '1', }
  //   },
  //   animation: true,
  //   data: [295486, 289569, 257862, 195869, 166856, 144636, 98593, 68958, 65868, 57626],
  // }]
};
