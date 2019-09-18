import React, { memo, useState, useEffect } from 'react';
import { moment } from '@/utils/util';
import SvgIcon from '@/components/SvgIcon';
import styles from './index.scss';

SvgIcon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_624956_br6r8nb9msp.js',
});

const FORMAT = 'YYYY/MM/DD HH:mm:SS';

const Header = memo(() => {
  const [time, setTime] = useState(+new Date());

  useEffect(() => {
    const t = setInterval(() => {
      setTime(+new Date());
    }, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.time}>
        <SvgIcon icon="icon-time" className={styles.timeIcon} />
        {moment(time).format(FORMAT)}
      </div>
      <div className={styles.title}>BI平台实时数据看板</div>
      <div className={styles.desc}>
        <SvgIcon icon="icon-shezhi" className={styles.setIcon} />
        统计维度：昨天
      </div>
    </div>
  );
});

export default Header;
