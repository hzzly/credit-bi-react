import React, { PureComponent } from 'react';
import ReactParticleLine from 'react-particle-line';
import styles from './index.scss';

export default class index extends PureComponent {
  render() {
    return (
      <ReactParticleLine>
        <div className={styles.homeBox}>
          <div className={styles.topLeft}></div>
          <div className={styles.topCenter}></div>
          <div className={styles.topRight}></div>
          <div className={styles.bottomLeft}></div>
          <div className={styles.bottomRight}></div>
        </div>
      </ReactParticleLine>
    );
  }
}
