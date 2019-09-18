let i = 0;
const effectScatterSeries = effectScatter();

export function genOverviewMap(cmap, message) {
  const sortData = cmap.sort((a, b) => b.value - a.value);
  const max = (sortData[0] && sortData[0].value.toFixed(2)) || 100;
  const min =
    (sortData[sortData.length - 1] && sortData[sortData.length - 1].value.toFixed(0)) || 0;
  effectScatterSeries[i] = {
    ...effectScatterSeries[i],
    data: [
      {
        ...message,
        visualMap: false,
      },
    ],
  };
  i += 1;
  if (i > 2) {
    i = 0;
  }
  return {
    visualMap: {
      type: 'continuous',
      min: Number(min),
      max: Number(max),
      left: 'center',
      bottom: '30',
      orient: 'horizontal',
      itemWidth: 15,
      itemHeight: 200,
      text: [max, min],
      inRange: {
        color: ['#345f7b', '#081523'], // 蓝绿
      },
      textStyle: {
        color: '#999',
      },
    },
    series: [
      ...effectScatterSeries,
      // {
      //   name: '贷款金额',
      //   type: "bar3D",
      //   coordinateSystem: 'geo3D',
      //   barSize: 0.8, //柱子粗细
      //   shading: 'lambert',
      //   opacity: 1,
      //   bevelSize: 0.3,
      //   itemStyle: {
      //     color: '#23ffb5',
      //     opacity: 0.6
      //   },
      //   label: {
      //     show: false,
      //     formatter: '{b}'
      //   },
      //   data: convertData(cmap),
      // },
      {
        name: '贷款金额',
        type: 'map',
        mapType: 'china',
        roam: false,
        label: {
          normal: {
            formatter: '{b}',
            position: 'right',
            show: false,
            textStyle: {
              color: '#fff',
            },
          },
          emphasis: {
            show: false,
          },
        },
        itemStyle: {
          normal: {
            // color: '#fff',
            // areaColor: '#023677',
            borderColor: '#0692a4',
          },
          emphasis: {
            areaColor: '#4499d0',
          },
        },
        data: cmap.map(t => ({ name: t.name, value: t.value })),
      },
    ],
  };
}

export function genOverviewBar(cmap) {
  const sortData = cmap.sort((a, b) => b.value - a.value);
  const sum = cmap.reduce((prev, cur) => cur.value + prev, 0);
  const top10 = sortData
    .filter((f, index) => index < 10)
    .map(item => {
      return {
        ...item,
        // value: (item.value / sum).toFixed(2) * 100,
        value: item.value.toFixed(2),
      };
    });
  return {
    sum: sum.toFixed(2),
    tooltip: {
      formatter: params => {
        return `${params.name}：${params.data.value}`;
      },
    },
    xAxis: {
      show: false,
    },
    yAxis: {
      name: 'Top 10排行（万元）',
      nameLocation: 'start',
      nameTextStyle: {
        color: '#ffffff',
        fontSize: '14',
        align: 'left',
      },
    },
    grid: {
      right: 50,
      width: '50%',
    },
    yCategory: top10.map((item, index) => `${index}${item.name}`),
    series: [
      {
        name: '贷款金额',
        roam: false,
        visualMap: false,
        z: 2,
        barMaxWidth: 10,
        barGap: 0,
        itemStyle: {
          normal: {
            color(params) {
              // build a color map as your need.
              const colorList = [
                {
                  colorStops: [
                    {
                      offset: 0,
                      color: '#FFD119', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#FFAC4C', // 100% 处的颜色
                    },
                  ],
                },
                {
                  colorStops: [
                    {
                      offset: 0,
                      color: '#00C0FA', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#2F95FA', // 100% 处的颜色
                    },
                  ],
                },
              ];
              if (params.dataIndex < 3) {
                return colorList[0];
              } else {
                return colorList[1];
              }
            },
            barBorderRadius: 15,
          },
        },
        label: {
          normal: {
            show: true,
            position: 'right',
            distance: 10,
            textStyle: {
              color: '#eee',
              fontSize: '12',
            },
            formatter: '{c}',
          },
        },
        data: top10,
      },
    ],
  };
}

function effectScatter() {
  const effectScatterArr = [
    {
      labelBackgroundColor: 'rgba(254,174,33,.8)',
      itemStyleColor: '#feae21',
    },
    {
      labelBackgroundColor: 'rgba(233,63,66,.9)',
      itemStyleColor: '#e93f42',
    },
    {
      labelBackgroundColor: 'rgba(8,186,236,.8)',
      itemStyleColor: '#08baec',
    },
  ];

  return effectScatterArr.map((item, index) => {
    return {
      name: '贷款金额',
      type: 'effectScatter',
      coordinateSystem: 'geo',
      z: 10 + index,
      data: [],
      symbolSize: 6,
      label: {
        normal: {
          show: true,
          formatter(params) {
            return `{fline|客户：${params.data.username}  ${params.data.telphone}}\n{tline|在 ${params.data.address} 发起贷款${params.data.money}万元}`;
          },
          position: 'top',
          backgroundColor: item.labelBackgroundColor,
          padding: [0, 0],
          borderRadius: 3,
          lineHeight: 32,
          color: '#fff',
          rich: {
            fline: {
              padding: [0, 10, 10, 10],
              color: '#fff',
            },
            tline: {
              padding: [10, 10, 0, 10],
              color: '#fff',
            },
          },
        },
        emphasis: {
          show: true,
        },
      },
      itemStyle: {
        color: item.itemStyleColor,
      },
    };
  });
}
