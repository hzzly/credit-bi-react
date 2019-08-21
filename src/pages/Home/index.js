import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import ReactParticleLine from 'react-particle-line';
import ChinaMap from '@/components/Charts/ChinaMap';
// import Pie from '@/components/Charts/Pie';
// import Line from '@/components/Charts/Line';
import Bar from '@/components/Charts/Bar';
import { genOverviewMap, genOverviewBar } from '@/utils/genMapData';

import styles from './index.scss';

@connect(({ map }) => ({
  map,
}))
export default class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      socket: null,
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const socket = io.connect('/');
    socket.emit('message');
    socket.on('message', data => {
      dispatch({ type: 'saveMap', payload: data });
    });
    this.setState({ socket });
  }

  componentWillUnmount() {
    const { socket } = this.state;
    if (socket) {
      socket.disconnect();
      this.setState({ socket: null });
    }
  }

  render() {
    const { map } = this.props;
    const { mapData, message } = map;
    const chinaMapData = genOverviewMap(mapData, message);
    const mapBarData = genOverviewBar(mapData);
    console.log(mapBarData);
    // 'e8bb3f'
    return (
      <ReactParticleLine>
        <div className={styles.homeBox}>
          <div className={styles.topLeft}>{/* <Pie data={pieData} /> */}</div>
          <div className={styles.topCenter}>
            {mapData.length > 0 && (
              <Fragment>
                <ChinaMap
                  data={chinaMapData}
                  style={{ height: '80%', width: '80%', top: '20%', left: '-5%' }}
                />
                <Bar
                  data={mapBarData}
                  style={{
                    position: 'absolute',
                    height: '80%',
                    top: '20%',
                    right: '2%',
                    width: '30%',
                  }}
                />
              </Fragment>
            )}
            {/* { && (<ChinaMap data={chinaMapData} style={{ height: '80%', top: '20%' }} />)} */}
            {/* {mapData.length > 0 && <Bar data={mapBarData} />} */}
            {/* <div className={styles.num} /> */}
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
