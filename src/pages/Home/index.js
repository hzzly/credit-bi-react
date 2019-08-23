import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ReactParticleLine from 'react-particle-line';
import TopCenter from '@/pages/TopCenter';

import styles from './index.scss';

@connect(({ app }) => ({
  app,
}))
export default class index extends PureComponent {
  componentWillUnmount() {
    const {
      dispatch,
      app: { socket },
    } = this.props;
    if (socket) {
      socket.disconnect();
      dispatch({ type: 'setScoket', payload: { socket: null } });
    }
  }

  render() {
    return (
      <ReactParticleLine>
        <div className={styles.homeBox}>
          <div className={styles.topLeft}>{/* <Pie data={pieData} /> */}</div>
          <div className={styles.topCenter}>
            <TopCenter />
          </div>
          <div className={styles.topRight}>{/* <Line data={{}} /> */}</div>
          <div className={styles.bottomLeft} />
          <div className={styles.bottomRight} />
        </div>
      </ReactParticleLine>
    );
  }
}

// const pieData = {
//   series: [
//     { value: 335, legendname: '种类01', name: "种类01  335", itemStyle: { color: "#8d7fec" } },
//     { value: 310, legendname: '种类02', name: "种类02  310", itemStyle: { color: "#5085f2" } },
//     { value: 234, legendname: '种类03', name: "种类03  234", itemStyle: { color: "#e75fc3" } },
//     { value: 154, legendname: '种类04', name: "种类04  154", itemStyle: { color: "#f87be2" } },
//     { value: 335, legendname: '种类05', name: "种类05  335", itemStyle: { color: "#f2719a" } },
//     { value: 335, legendname: '种类06', name: "种类06  335", itemStyle: { color: "#fca4bb" } },
//     { value: 335, legendname: '种类07', name: "种类07  335", itemStyle: { color: "#f59a8f" } },
//     { value: 335, legendname: '种类08', name: "种类08  335", itemStyle: { color: "#fdb301" } },
//     { value: 335, legendname: '种类09', name: "种类09  335", itemStyle: { color: "#57e7ec" } },
//     { value: 335, legendname: '种类10', name: "种类10  335", itemStyle: { color: "#cf9ef1" } },
//     { value: 335, legendname: '种类09', name: "种类11  335", itemStyle: { color: "#57e7ec" } },
//     { value: 335, legendname: '种类10', name: "种类12  335", itemStyle: { color: "#cf9ef1" } },
//   ]
// }
