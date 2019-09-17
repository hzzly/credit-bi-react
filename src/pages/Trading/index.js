import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import animate from 'animate.css';
import Card from '@/components/Card';
import { moment, formatMoney } from '@/utils/util';

import styles from './index.scss';

const columns = [
  {
    title: '用户名',
    dataIndex: 'userName',
    width: 100,
  },
  {
    title: '时间',
    dataIndex: 'time',
    width: 150,
  },
  {
    title: '操作',
    dataIndex: 'operate',
    width: 80,
  },
  {
    title: '金额',
    dataIndex: 'amt',
    width: 120,
  },
  {
    title: '产品',
    dataIndex: 'productName',
    width: 160,
  },
];

@connect(({ map }) => ({
  map,
}))
export default class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      business: [],
    };
  }

  static getDerivedStateFromProps(props, state) {
    const {
      map: { message },
    } = props;
    let { business } = state;
    if (Object.keys(message).length !== 0) {
      if (business.length > 7) {
        business = business.slice(0, 7);
      }
      return {
        business: [
          {
            ...message,
            time: +new Date(),
            operate: '贷款',
            productName: '',
          },
          ...business,
        ],
      };
    }
    return null;
  }

  render() {
    const { business } = this.state;
    return (
      <Card title="实时交易情况">
        <table className={styles.tableBox}>
          <thead className={styles.tableHead}>
            <tr>
              {columns.map(c => (
                <th key={c.dataIndex} style={{ width: c.width }}>
                  {c.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            {business.slice(0, 6).map((e, i) => (
              <tr
                key={e.telphone + Math.random()}
                className={`${animate.animated} ${
                  i === 0 ? animate.fadeInRight : animate.slideInDown
                }`}
              >
                <td>{e.username}</td>
                <td>{moment(e.time).format()}</td>
                <td>{e.operate}</td>
                <td>￥{formatMoney(e.money * 10000)}</td>
                <td>测试产品签约</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    );
  }
}
