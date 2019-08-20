// import { convertData } from './util';

export function genOverviewMap(cmap) {
  const max = cmap.sort((a, b) => b.value - a.value);
  // console.log(max[0])
  return {
    visualMap: {
      type: 'continuous',
      min: 0,
      max: max[0].value,
      left: 'center',
      bottom: '10',
      orient: 'horizontal',
      itemWidth: 15,
      itemHeight: 300,
      color: ['#374e90', '#598ebf'],
    },
    series: [
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
            show: true,
            textStyle: {
              color: '#333',
            },
          },
          emphasis: {
            show: true,
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
