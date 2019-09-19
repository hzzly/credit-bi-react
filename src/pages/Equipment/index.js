import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Card from '@/components/Card';
import Labels from '@/components/Labels';
import Pie from '@/components/Charts/Pie';
import { genEquipment } from '@/utils/genChartData';
import styles from './index.scss';

const legends = {
  PC: {
    key: 'PC',
    label: 'PC',
    type: 'circle',
    backgroundColor: '#FF8700',
  },
  Android: {
    key: 'Android',
    label: 'Android',
    type: 'circle',
    backgroundColor: '#ffc300',
  },
  Iphone: {
    key: 'Iphone',
    label: 'Iphone',
    type: 'circle',
    backgroundColor: '#00e473',
  },
  其它: {
    key: '其它',
    label: '其它',
    type: 'circle',
    backgroundColor: '#009DFF',
  },
};

@connect(({ loan }) => ({
  loan,
}))
export default class index extends PureComponent {
  render() {
    const { loan } = this.props;
    const { equipment, channel } = loan;

    const equipmentData = genEquipment(equipment, legends);
    const channelData = calculate(channel);

    return (
      <Card title="设备渠道" legends={<Labels data={Object.values(legends)} />}>
        <Pie data={equipmentData} style={{ height: 240 }} />
        <div className={styles.channel}>
          <div className={styles.title}>渠道排行</div>
          {channelData.map(({ name, percent }) => (
            <div className={styles.column} key={name}>
              <div className={styles.label}>{name}</div>
              <div className={styles.bars}>
                <div className={styles.inner} />
                <div className={styles.outer} style={{ width: percent }} />
              </div>
              <div className={styles.num}>{percent}</div>
            </div>
          ))}
        </div>
      </Card>
    );
  }
}

function calculate(data = [], max) {
  let mmax = max;
  if (!mmax) {
    mmax = data.reduce((prev, cur) => cur.value + prev, 0);
  }
  return data.map(e => ({ ...e, percent: `${parseInt((e.value * 100) / mmax, 10)}%` }));
}
