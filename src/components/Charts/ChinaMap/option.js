export default {
  tooltip: {
    trigger: 'item',
    backgroundColor: 'rgba(255,255,255,0.80)',
    borderColor: '#F1F1F1',
    borderWidth: 1,
    padding: [8, 16],
    textStyle: {
      color: '#666',
      fontSize: 10,
    },
    extraCssText: 'box-shadow:0 1px 4px 0 rgba(0,0,0,0.20);border-radius:4px;',
    formatter: params => {
      return `
        <p style="text-align:left;font-size:14px;line-height:20px">${params.name}</p>
        <p style="text-align:left;line-height:18px">
          ${params.seriesName}：<span>${
        Array.isArray(params.value) ? params.value[2].toFixed(2) : params.value.toFixed(2)
      }万元</span>
        </p>
      `;
    },
  },
  visualMap: {},
  // geo3D: {
  //   map: 'china',
  //   roam: true,
  //   regionHeight: 1.4, //3d地图的厚度
  //   itemStyle: {
  //     color: '#05657b',
  //     opacity: 1,
  //     borderWidth: 0.8,
  //     borderColor: '#47c2d7'
  //   },
  //   tooltip: {
  //     show: false,
  //   },
  //   viewControl: {
  //     beta: 4,
  //   },
  //   label: {
  //     show: false,
  //     textStyle: {
  //       color: '#fff', //地图初始化区域字体颜色
  //       fontSize: 12,
  //       opacity: 0.8,
  //       backgroundColor: 'rgba(0,0,0,0)'
  //       //backgroundColor: 'rgba(53,171,199,0)'
  //     },
  //   },
  //   emphasis: { //当鼠标放上去  地区区域是否显示名称
  //     label: {
  //       textStyle: {
  //         color: '#fff',
  //         fontSize: 12,
  //         opacity: 0.8,
  //         backgroundColor: 'rgba(0,0,0,0)'
  //       }
  //     }
  //   },
  //   light: { //光照阴影
  //     main: {
  //       color: '#fff', //光照颜色
  //       intensity: 1.2, //光照强度
  //       shadowQuality: 'high', //阴影亮度
  //       shadow: false, //是否显示阴影
  //       alpha: 55,
  //       beta: 10

  //     },
  //     ambient: {
  //       intensity: 0.3
  //     }
  //   },
  //   // realisticMaterial: {
  //   //     detailTexture: 'asset/leather/leather_albedo.jpg'
  //   // }
  // },
  geo: {
    map: 'china',
    roam: false,
    label: {
      normal: {
        show: false,
      },
      emphasis: {
        show: false,
      },
    },
    itemStyle: {
      // normal: {
      //   areaColor: '#023677',
      //   borderColor: '#1180c7',
      // },
      // emphasis: {
      //   areaColor: '#4499d0',
      // }
      areaColor: '#323c48',
      borderColor: '#00ffea',
      // borderColor: "#a7e4e6", //省市边界线
      // shadowColor: 'rgba(166, 230, 236, 0.3)',
      // shadowOffsetX: 0,
      // shadowOffsetY: 0,
      // shadowBlur: 120,
      // borderWidth: 2,
      // shadowColor: '#00ffea',
      // shadowBlur: 5
    },
    // emphasis: {
    //   itemStyle: {
    //     areaColor: '#2a333d',
    //   },
    // },
  },
  series: [],
};
