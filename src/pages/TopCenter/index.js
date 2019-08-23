import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import ChinaMap from '@/components/Charts/ChinaMap';
import Bar from '@/components/Charts/Bar';
import ScrollNumber from '@/components/ScrollNumber';
import { genOverviewMap, genOverviewBar } from '@/utils/genMapData';

import styles from './index.scss';

@connect(({ map, app }) => ({
  map,
  socket: app.socket,
}))
export default class index extends PureComponent {
  componentDidMount() {
    const { dispatch, socket } = this.props;
    socket.emit('message');
    socket.on('message', data => {
      dispatch({ type: 'saveMap', payload: data });
    });
  }

  render() {
    const { map } = this.props;
    const { mapData, message } = map;
    const chinaMapData = genOverviewMap(mapData, message);
    const { sum, ...mapBarData } = genOverviewBar(mapData);

    return (
      <Fragment>
        {mapData.length > 0 && (
          <>
            <div className={styles.numBox}>
              <div className={styles.title}>当前累计贷款金额</div>
              <ScrollNumber numbers={sum * 1000} style={{ color: '#e8bb3f', fontSize: 40 }} />
            </div>
            <ChinaMap
              data={chinaMapData}
              style={{ height: '90%', width: '80%', top: '10%', left: '-5%' }}
            />
            <Bar
              data={mapBarData}
              style={{
                position: 'absolute',
                height: '95%',
                top: '5%',
                right: '2%',
                width: '30%',
              }}
            />
          </>
        )}
      </Fragment>
    );
  }
}
