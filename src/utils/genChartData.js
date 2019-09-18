import echarts from 'echarts';

const styles = 'display:inline-block;width:8px;height:8px;border-radius:4px;margin-right:6px;';

export function genLoanStatistical(loan, labels) {
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
                  <i class="chart-circle" style="${styles}background-color:${color.colorStops[0].color}"></i>
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
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: k.indexOf('balance') === -1 ? '#8bd46e' : '#248ff7',
            },
            {
              offset: 1,
              color: k.indexOf('balance') === -1 ? '#09bcb7' : '#6851f1',
            },
          ]),
          barBorderRadius: 10,
          borderType: k.indexOf('pre') > -1 ? 'dashed' : 'solid',
          // borderColor: k.indexOf('pre') === -1 && '#4F97F2',
          opacity: k.indexOf('pre') > -1 ? '0.2' : '1',
        },
      },
      // itemStyle: {
      //   normal: {
      //     color:
      //       k.indexOf('balance') === -1
      //         ? k.indexOf('pre') === -1
      //           ? '#4F97F2'
      //           : 'rgba(79,151,242,0.50)'
      //         : k.indexOf('pre') === -1
      //           ? '#76AB59'
      //           : 'rgba(118,171,89,0.50)',
      //     borderType: k.indexOf('pre') > -1 ? 'dashed' : 'solid',
      //     borderColor: k.indexOf('balance') === -1 ? '#4F97F2' : '#76AB59',
      //   },
      // },
    })),
  };
}

export function genAgeStatistical(ages) {
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
          // 区域填充样式
          normal: {
            // 线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
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
            shadowColor: 'rgba(53,142,215, 0.9)', // 阴影颜色
            shadowBlur: 20, // shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
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
            color(params) {
              const colorList = [
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

export function genLoanProduct(data) {
  const sortArr = data.sort((a, b) => b.loanCount - a.loanCount);
  const remainSum = sortArr.slice(5, sortArr.length).reduce((prev, cur) => cur.loanCount + prev, 0);
  const sum = sortArr.slice(0, 5).reduce((prev, cur) => cur.loanCount + prev, remainSum);
  const newData = [
    ...sortArr.slice(0, 5),
    {
      name: '其它',
      value: remainSum,
    },
  ];
  return {
    title: {
      text: sum,
      subtext: '贷款笔数',
      left: 'center',
      top: '30%',
      padding: [10, 0],
      textStyle: {
        color: '#ffc72b',
        fontSize: 26,
        align: 'center',
      },
      subtextStyle: {
        color: '#fff',
        fontSize: 12,
        align: 'center',
      },
    },
    tooltip: {
      formatter: params => {
        return `
          <p style="text-align:left;line-height:18px">
            <i class="chart-circle" style="${styles}background-color:${params.color}"></i>
            ${params.name}
          </p>
          <p style="text-align:left;line-height:18px">
            数量：${params.data.value}
          </p>
          <p style="text-align:left;line-height:18px">
            占比：${params.percent}%
          </p>
        `;
      },
    },
    legend: {
      bottom: 0,
      textStyle: {
        color: '#fff',
      },
    },
    series: [
      {
        name: '标题',
        type: 'pie',
        center: ['50%', '40%'],
        radius: ['40%', '60%'],
        minAngle: 10,
        // clockwise: false, //饼图的扇区是否是顺时针排布
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: true,
            position: 'outter',
            formatter(parms) {
              return parms.data.legendname;
            },
          },
        },
        labelLine: {
          normal: {
            length: 5,
            length2: 8,
            smooth: true,
          },
        },
        data: newData.map(k => ({
          name: k.product || k.coopCust || k.name,
          value: k.loanCount || k.value,
        })),
      },
    ],
  };
}

export function genUserConver(data, legends) {
  let sum = 0;
  const newData = Object.keys(data).map(item => {
    const sumItem = data[item].reduce(
      (prev, cur) => (cur.value !== '-' ? cur.value + prev : prev),
      0
    );
    if (item === 'regist') {
      sum = sumItem;
    }
    return {
      name: legends[item].label,
      value: sumItem,
    };
  });
  // 富文本配置
  const rich = {
    yellow: {
      color: '#ffc72b',
      fontSize: 18,
    },
    white: {
      color: '#fff',
      fontSize: 12,
    },
  };
  return {
    calculable: true,
    color: ['#8874a5', '#64609b', '#465192'],
    series: [
      {
        name: '用户转化',
        type: 'funnel',
        left: 'center',
        top: '10%',
        bottom: '5%',
        width: '70%',
        minSize: '50%',
        gap: 14,
        label: {
          normal: {
            show: true,
            position: 'center',
            formatter: params => {
              let percent = 0;
              newData.forEach(value => {
                if (params.name === value.name) {
                  percent = (value.value / sum).toFixed(2) * 100;
                }
              });
              return `{yellow| ${percent}}{white|%}\n{circle|}{white| ${params.name} }`;
            },
            rich,
          },
        },
        itemStyle: {
          normal: {
            borderColor: '#fff',
            borderWidth: 0,
          },
        },
        data: [
          {
            value: 20,
            name: newData[2].name,
          },
          {
            value: 40,
            name: newData[1].name,
          },
          {
            value: 60,
            name: newData[0].name,
          },
        ],
      },
    ],
  };
}

export function genUserConverLine(data, legends) {
  return {
    color: ['#8874a5', '#64609b', '#465192'],
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
      top: '20px',
      left: '0',
      right: '0',
      bottom: '0',
      containLabel: true,
    },
    xAxis: {
      data: data.regist && data.regist.map(t => `${t.date}月`),
    },
    yAxis: {
      splitLine: {
        lineStyle: {
          color: 'rgba(168, 178, 185, .1)',
        },
      },
    },
    // legend: {
    //   icon: 'rect',
    //   itemWidth: 14,
    //   itemHeight: 5,
    //   itemGap: 13,
    //   data: ['男性', '女性'],
    //   right: '4%',
    //   top: 25,
    //   textStyle: {
    //     fontSize: 12,
    //     color: '#ccc',
    //   },
    // },
    series: Object.keys(data).map(k => ({
      name: legends[k].label,
      data: data[k].map(t => t.value),
      smooth: false,
    })),
  };
}

export function genEquipment(data) {
  const yCategory = [];
  const series = [];
  const sum = data.reduce((prev, cur) => cur.value + prev, 0);
  data.forEach((item, i) => {
    series.push({
      name: '设置分布',
      type: 'pie',
      clockWise: false, // 顺时加载
      hoverAnimation: false, // 鼠标移入变大
      radius: [`${75 - i * 15}%`, `${66 - i * 15}%`],
      center: ['35%', '55%'],
      label: {
        show: false,
      },
      itemStyle: {
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        borderWidth: 5,
      },
      data: [
        {
          value: item.value,
          name: item.name,
        },
        {
          value: (sum * 4) / 3 - item.value,
          name: '',
          itemStyle: {
            color: 'rgba(0,0,0,0)',
            borderWidth: 0,
          },
          tooltip: {
            show: false,
          },
          hoverAnimation: false,
        },
      ],
    });
    series.push({
      name: '',
      type: 'pie',
      silent: true,
      z: 1,
      clockWise: false, // 顺时加载
      hoverAnimation: false, // 鼠标移入变大
      radius: [`${75 - i * 15}%`, `${66 - i * 15}%`],
      center: ['35%', '55%'],
      label: {
        show: false,
      },
      itemStyle: {
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        borderWidth: 5,
      },
      data: [
        {
          value: 7.5,
          itemStyle: {
            color: 'rgba(151, 136, 136, .4)',
            borderWidth: 0,
          },
          tooltip: {
            show: false,
          },
          hoverAnimation: false,
        },
        {
          value: 2.5,
          name: '',
          itemStyle: {
            color: 'rgba(0,0,0,0)',
            borderWidth: 0,
          },
          tooltip: {
            show: false,
          },
          hoverAnimation: false,
        },
      ],
    });
    yCategory.push(`${((item.value / sum) * 100).toFixed(2)}%`);
  });
  return {
    color: ['#FF8700', '#ffc300', '#00e473', '#009DFF'],
    tooltip: {
      formatter: params => {
        return `
          <p style="text-align:left;line-height:18px">
            <i class="chart-circle" style="${styles}background-color:${params.color}"></i>
            ${params.name}
          </p>
          <p style="text-align:left;line-height:18px">
            数量：${params.data.value}
          </p>
          <p style="text-align:left;line-height:18px">
            占比：${params.percent}%
          </p>
        `;
      },
    },
    grid: {
      top: '15%',
      bottom: '53%',
      left: '35%',
      containLabel: false,
    },
    legend: {
      show: true,
      top: '20%',
      left: '65%',
      data: data.map(k => k.name),
      itemWidth: 22,
      itemHeight: 12,
      itemGap: 10,
      formatter: name => {
        const item = data.find(k => k.name === name);
        return `{title| ${name}}\n{value| ${item.value} 人}`;
      },
      textStyle: {
        rich: {
          title: {
            fontSize: 10,
            lineHeight: 10,
            color: '#ccc',
            // color: "rgba(0,0,0,.45)"
          },
          value: {
            fontSize: 14,
            lineHeight: 18,
            color: '#fff',
            // color: "rgba(0,0,0,.85)"
          },
        },
      },
    },
    yAxis: [
      {
        type: 'category',
        inverse: true,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          interval: 0,
          inside: true,
          textStyle: {
            color: '#eee',
            fontSize: 10,
          },
          show: true,
        },
        data: yCategory,
      },
    ],
    xAxis: [
      {
        show: false,
      },
    ],
    series,
  };
}
