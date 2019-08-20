// import { convertData } from './util';
const effectScatter = [
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

const effectScatterSeries = effectScatter.map((item, index) => {
  return {
    type: 'effectScatter',
    coordinateSystem: 'geo',
    z: 10 + index,
    data: [],
    symbolSize: 10,
    label: {
      normal: {
        show: true,
        formatter(params) {
          return `{fline|客户：${params.data.username}  ${params.data.telphone}}\n{tline|在 ${params.data.address} 发起贷款${params.data.money}元}`;
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
let i = 0;

export function genOverviewMap(cmap, message) {
  const max = cmap.sort((a, b) => b.value - a.value);
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
      min: 0,
      max: max[0] && max[0].value,
      left: 'center',
      bottom: '10',
      orient: 'horizontal',
      itemWidth: 15,
      itemHeight: 300,
      color: ['#374e90', '#598ebf'],
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
            show: false,
            textStyle: {
              color: '#333',
            },
          },
          emphasis: {
            show: false,
          },
        },
        itemStyle: {
          normal: {
            borderColor: '#111',
          },
          emphasis: {
            areaColor: '#253b69',
          },
        },
        data: cmap.map(t => ({ name: t.name, value: t.value })),
      },
    ],
  };
}
