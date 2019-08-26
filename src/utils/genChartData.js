import echarts from 'echarts';

export function genLoanStatistical(loan, labels) {
  const styles = 'display:inline-block;width:8px;height:8px;border-radius:4px;margin-right:6px;';
  return {
    title: {
      text: '2019年贷款金额分布（万元）',
      textStyle: {
        color: '#eee',
        fontSize: 14,
      },
      top: 0,
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
      formatter: params => {
        return `
          <p style="text-align:left;font-size:12px;line-height:18px">${params[0].name}</p>
          ${params
            .map(({ color, seriesName, value }) => {
              return value !== '-'
                ? `
                <p style="text-align:left;line-height:18px">
                  <i class="chart-circle" style="${styles}background-color:${color}"></i>
                  ${seriesName}：${value}
                </p>
              `
                : null;
            })
            .join('')}
        `;
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
      data: loan.balance && loan.balance.map(t => `${t.date}月`),
    },
    yAxis: {
      inverse: false,
      splitNumber: 5,
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
          color: 'rgba(168, 178, 185, .1)',
        },
      },
      type: 'value',
    },
    legend: {
      show: false,
    },
    grid: {
      top: '50px',
      left: '0',
      right: '0',
      bottom: '20px',
      containLabel: true,
    },
    series: Object.keys(loan).map(k => ({
      name: labels.loan[k],
      barWidth: '10px',
      stack: k.indexOf('balance') === -1 ? 'one' : 'two',
      data: loan[k].map(t => t.value),
      itemStyle: {
        normal: {
          color:
            k.indexOf('balance') === -1
              ? k.indexOf('pre') === -1
                ? '#4F97F2'
                : 'rgba(79,151,242,0.50)'
              : k.indexOf('pre') === -1
              ? '#76AB59'
              : 'rgba(118,171,89,0.50)',
          borderType: k.indexOf('pre') > -1 ? 'dashed' : 'solid',
          borderColor: k.indexOf('balance') === -1 ? '#4F97F2' : '#76AB59',
        },
      },
    })),
  };
}

export function genAgeStatistical(ages) {
  const styles = 'display:inline-block;width:8px;height:8px;border-radius:4px;margin-right:6px;';
  return {
    title: {
      text: '贷款金额性别比例（万元）',
      textStyle: {
        color: '#eee',
        fontSize: 14,
      },
      top: 0,
      left: 'center',
    },
    tooltip: {
      formatter: params => {
        return `
          <p style="text-align:left;font-size:12px;line-height:18px">${params[0].name}</p>
          ${params
            .map(({ color, seriesName, value }) => {
              return value !== '-'
                ? `
                <p style="text-align:left;line-height:18px">
                  <i class="chart-circle" style="${styles}background-color:${color}"></i>
                  ${seriesName}：${value}
                </p>
              `
                : null;
            })
            .join('')}
        `;
      },
    },
    grid: {
      top: '50px',
      left: '20px',
      right: '0',
      bottom: '0',
      containLabel: true,
    },
    xAxis: {
      data: ages.man && ages.man.map(t => `${t.date}后`),
    },
    yAxis: {
      splitLine: {
        lineStyle: {
          color: 'rgba(168, 178, 185, .1)',
        },
      },
    },
    legend: {
      icon: 'rect',
      itemWidth: 14,
      itemHeight: 5,
      itemGap: 13,
      data: ['男性', '女性'],
      right: '4%',
      top: 25,
      textStyle: {
        fontSize: 12,
        color: '#ccc',
      },
    },
    series: Object.keys(ages).map(k => ({
      name: k === 'man' ? '男性' : '女性',
      data: ages[k].map(t => t.value),
      showSymbol: false,
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: k === 'man' ? 'rgba(16,97,204, 0.4)' : 'rgba(205,52,42, 0.5)',
              },
              {
                offset: 0.8,
                color: k === 'man' ? 'rgba(17,235,210, 0)' : 'rgba(235,235,21, 0)',
              },
            ],
            false
          ),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 10,
          lineStyle: {
            // 系列级个性化折线样式
            width: 1.5,
          },
        },
      },
      itemStyle: {
        normal: {
          color: k === 'man' ? '#5597e6' : '#77fbe3',
        },
      },
    })),
  };
}

export function genAgeAverage(data) {
  return {
    title: {
      text: '年龄与人均贷款金额（元）',
      textStyle: {
        color: '#eee',
        fontSize: 14,
      },
      top: 0,
      left: 'center',
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
      data: data.age && data.age.map(t => `${t.date}后`),
    },
    yAxis: {
      inverse: false,
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
          color: 'rgba(168, 178, 185, .1)',
        },
      },
      type: 'value',
    },
    series: [
      {
        name: '人均贷款金额',
        type: 'line',
        // smooth: true, //是否平滑曲线显示
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 6,
        lineStyle: {
          normal: {
            color: '#28ffb3', // 线条颜色
          },
          borderColor: '#f0f',
        },
        label: {
          show: true,
          position: 'top',
          textStyle: {
            color: '#fff',
          },
        },
        itemStyle: {
          normal: {
            color: '#28ffb3',
          },
        },
        tooltip: {
          show: false,
        },
        areaStyle: {
          //区域填充样式
          normal: {
            //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: 'rgba(0,154,120,1)',
                },
                {
                  offset: 1,
                  color: 'rgba(0,0,0, 0)',
                },
              ],
              false
            ),
            shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
            shadowBlur: 20, //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
          },
        },
        data: data.average && data.average.map(t => t.value),
      },
      {
        name: '人数',
        type: 'bar',
        barWidth: 20,
        // tooltip: {
        //   show: false
        // },
        // label: {
        //   show: true,
        //   position: 'top',
        //   textStyle: {
        //     color: '#fff',
        //   }
        // },
        itemStyle: {
          normal: {
            color: function(params) {
              var colorList = [
                '#0ec1ff',
                '#10cdff',
                '#12daff',
                '#15ebff',
                '#17f8ff',
                '#1cfffb',
                '#1dfff1',
              ];
              return colorList[params.dataIndex];
            },
          },
        },
        data: data.age && data.age.map(t => t.value),
      },
    ],
  };
}
