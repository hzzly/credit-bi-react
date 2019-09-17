import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Card from '@/components/Card';
import Bar from '@/components/Charts/Bar';
import Line from '@/components/Charts/Line';
import Labels from '@/components/Labels';
import SvgIcon from '@/components/SvgIcon';
import { genLoanStatistical, genAgeStatistical, genAgeAverage } from '@/utils/genChartData';

import styles from './index.scss';

SvgIcon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_624956_exv4sjmfz1b.js',
});

const labels = {
  loan: {
    balance: '老客户贷款',
    prebalance: '预计老客户贷款',
    new: '新客户贷款',
    prenew: '预计新客户贷款',
    today: '今天',
  },
};

const loanLabel = [
  {
    key: 'balance',
    label: labels.loan.balance,
    type: 'circle',
    backgroundColor: '#5399EF',
    border: '',
  },
  {
    key: 'prebalance',
    label: labels.loan.prebalance,
    type: 'circle',
    backgroundColor: 'rgba(83,153,239,0.50)',
    border: '1px dashed #5282EF',
  },
  {
    key: 'new',
    label: labels.loan.new,
    type: 'circle',
    backgroundColor: '#75AC54',
    border: '',
  },
  {
    key: 'prenew',
    label: labels.loan.prenew,
    type: 'circle',
    backgroundColor: 'rgba(117,172,84,0.50)',
    border: '1px dashed #417505',
  },
];

@connect(({ loan }) => ({
  loan,
}))
export default class index extends PureComponent {
  render() {
    const { loan } = this.props;
    const { overview, loanStatistical, ageStatistical, ageAverage } = loan;
    const loanStatisticalData = genLoanStatistical(loanStatistical, labels);
    const ageStatisticalData = genAgeStatistical(ageStatistical);
    const ageAverageData = genAgeAverage(ageAverage);

    return (
      <div className={styles.topRight}>
        <Card title="数据总览">
          <ul className={styles.row}>
            <li>
              <div className={styles.title}>
                <span>客户数量</span>
                <span className={styles.percent}>
                  {' '}
                  [
                  <SvgIcon icon="icon-icon-caret-up" className={styles.caretUpIcon} />
                  {`${overview.custCountComp}%`}]
                </span>
              </div>
              <div className={styles.content}>{overview.custCount}</div>
            </li>
            <li>
              <div className={styles.title}>
                <span>贷款笔数</span>
                <span className={styles.percent}>
                  {' '}
                  [
                  <SvgIcon icon="icon-icon-caret-up" className={styles.caretUpIcon} />
                  {`${overview.loanCountComp}%`}]
                </span>
              </div>
              <div className={styles.content}>{overview.loanCount}</div>
            </li>
            <li>
              <div className={styles.title}>
                <span>逾期金额</span>
                <span className={styles.percent}>
                  {' '}
                  [
                  <SvgIcon icon="icon-caret-down" className={styles.caretDownIcon} />
                  {`${overview.overdueAmtComp}%`}]
                </span>
              </div>
              <div className={styles.content}>{overview.overdueAmt}</div>
            </li>
          </ul>
        </Card>
        <Card title="贷款金额分布">
          <Labels data={loanLabel} style={{ position: 'absolute', top: 60, left: 36 }} />
          <Bar data={loanStatisticalData} style={{ height: 220 }} />
          <div style={{ position: 'relative', bottom: 0, height: 200, display: 'flex' }}>
            <Bar data={ageAverageData} style={{ height: 200, flex: 1 }} />
            <Line data={ageStatisticalData} style={{ height: 200, flex: 1 }} />
          </div>
        </Card>
      </div>
    );
  }
}
