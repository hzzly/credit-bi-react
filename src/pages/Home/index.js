import React, { PureComponent } from 'react';
import ReactParticleLine from 'react-particle-line';
import ChinaMap from '@/components/Charts/ChinaMap';
import { genOverviewMap } from '@/utils/genChartData';

import styles from './index.scss';

export default class index extends PureComponent {
  render() {
    const chinaMapData = genOverviewMap(mapData);
    return (
      <ReactParticleLine>
        <div className={styles.homeBox}>
          <div className={styles.topLeft} />
          <div className={styles.topCenter}>
            <ChinaMap data={chinaMapData} mapData={mapData} style={{ height: '80%' }} />
            <div className={styles.num} />
          </div>
          <div className={styles.topRight} />
          <div className={styles.bottomLeft} />
          <div className={styles.bottomRight} />
        </div>
      </ReactParticleLine>
    );
  }
}

const mapData = [
  {
    name: '北京',
    value: 9000,
  },
  {
    name: '天津',
    value: 8000,
  },
  {
    name: '上海',
    value: 10000,
  },
  {
    name: '重庆',
    value: 7000,
  },
  {
    name: '河北',
    value: 5000,
  },
  {
    name: '河南',
    value: 5000,
  },
  {
    name: '云南',
    value: 2000,
  },
  {
    name: '辽宁',
    value: 6000,
  },
  {
    name: '黑龙江',
    value: 4000,
  },
  {
    name: '湖南',
    value: 6000,
  },
  {
    name: '安徽',
    value: 3000,
  },
  {
    name: '山东',
    value: 6000,
  },
  {
    name: '新疆',
    value: 1000,
  },
  {
    name: '江苏',
    value: 8000,
  },
  {
    name: '浙江',
    value: 9000,
  },
  {
    name: '江西',
    value: 5000,
  },
  {
    name: '湖北',
    value: 7000,
  },
  {
    name: '广西',
    value: 3000,
  },
  {
    name: '甘肃',
    value: 3000,
  },
  {
    name: '山西',
    value: 5000,
  },
  {
    name: '内蒙古',
    value: 2000,
  },
  {
    name: '陕西',
    value: 4000,
  },
  {
    name: '吉林',
    value: 5000,
  },
  {
    name: '福建',
    value: 6000,
  },
  {
    name: '贵州',
    value: 3000,
  },
  {
    name: '广东',
    value: 8000,
  },
  {
    name: '青海',
    value: 2000,
  },
  {
    name: '西藏',
    value: 1000,
  },
  {
    name: '四川',
    value: 7000,
  },
  {
    name: '宁夏',
    value: 2000,
  },
  {
    name: '海南',
    value: 2000,
  },
  {
    name: '台湾',
    value: 1000,
  },
  {
    name: '香港',
    value: 1000,
  },
  {
    name: '澳门',
    value: 1000,
  },
  {
    name: '南海诸岛',
    value: 100,
  },
];
