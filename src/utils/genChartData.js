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
      boundaryGap: [0, '10%'],
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
    // legend: Object.keys(trend),
    // yAxis: {
    //   name: 'Top 10排行',
    //   nameLocation: 'start',
    //   nameTextStyle: {
    //     color: '#ffffff',
    //     fontSize: '14',
    //     align: 'left',
    //   },
    // },
    // grid: {
    //   right: 30,
    //   width: '50%',
    // },
    // yCategory: top10.map((item, index) => `${index}${item.name}`),
    // series: [
    //   {
    //     name: '贷款金额',
    //     roam: false,
    //     visualMap: false,
    //     z: 2,
    //     barMaxWidth: 10,
    //     barGap: 0,
    //     itemStyle: {
    //       normal: {
    //         color(params) {
    //           // build a color map as your need.
    //           const colorList = [
    //             {
    //               colorStops: [
    //                 {
    //                   offset: 0,
    //                   color: '#FFD119', // 0% 处的颜色
    //                 },
    //                 {
    //                   offset: 1,
    //                   color: '#FFAC4C', // 100% 处的颜色
    //                 },
    //               ],
    //             },
    //             {
    //               colorStops: [
    //                 {
    //                   offset: 0,
    //                   color: '#00C0FA', // 0% 处的颜色
    //                 },
    //                 {
    //                   offset: 1,
    //                   color: '#2F95FA', // 100% 处的颜色
    //                 },
    //               ],
    //             },
    //           ];
    //           if (params.dataIndex < 3) {
    //             return colorList[0];
    //           } else {
    //             return colorList[1];
    //           }
    //         },
    //         barBorderRadius: 15,
    //       },
    //     },
    //     label: {
    //       normal: {
    //         show: true,
    //         position: 'right',
    //         distance: 10,
    //         textStyle: {
    //           color: '#eee',
    //           fontSize: '12',
    //         },
    //         formatter: '{c}%',
    //       },
    //     },
    //     data: top10,
    //   },
    // ],
  };
}
