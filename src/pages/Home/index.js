import React, { PureComponent } from 'react';
import ReactParticleLine from 'react-particle-line';
import animate from 'animate.css';
import Header from '@/pages/Header';
import Equipment from '@/pages/Equipment';
import Map from '@/pages/Map';
import Loan from '@/pages/Loan';
import Customer from '@/pages/Customer';
import Product from '@/pages/Product';
import Trading from '@/pages/Trading';

import styles from './index.scss';

export default class index extends PureComponent {
  render() {
    return (
      <ReactParticleLine>
        <div className={styles.homeBox}>
          <div className={styles.header}>
            <Header />
          </div>
          <div className={styles.topLeft}>
            <Equipment />
          </div>
          <div className={`${styles.topCenter} ${animate.animated} ${animate.zoomIn}`}>
            <Map />
          </div>
          <div className={styles.topRight}>
            <Loan />
          </div>
          <div className={styles.bottomLeft}>
            <Customer />
          </div>
          <div className={styles.bottomCenter}>
            <Product />
          </div>
          <div className={styles.bottomRight}>
            <Trading />
          </div>
        </div>
      </ReactParticleLine>
    );
  }
}
