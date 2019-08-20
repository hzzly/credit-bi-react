import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import ReactParticleLine from 'react-particle-line';
import ChinaMap from '@/components/Charts/ChinaMap';
import { genOverviewMap } from '@/utils/genMapData';

import styles from './index.scss';

@connect(({ map }) => ({
  map,
}))
export default class index extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    const socket = io.connect('/');
    socket.on('message', data => {
      console.log(data);
      dispatch({ type: 'saveMap', payload: data });
    });
  }

  render() {
    const { map } = this.props;
    const { mapData, message } = map;
    const chinaMapData = genOverviewMap(mapData, message);
    return (
      <ReactParticleLine>
        <div className={styles.homeBox}>
          <div className={styles.topLeft} />
          <div className={styles.topCenter}>
            {mapData.length > 0 && <ChinaMap data={chinaMapData} style={{ height: '80%' }} />}
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
