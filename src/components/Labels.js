import React, { memo } from 'react';

const styles = {
  root: {
    height: '30px',
    lineHeight: '30px',
  },
  label: {
    marginRight: '20px',
    fontSize: '10px',
    color: '#666',
  },
  circle: {
    display: 'inline-block',
    width: '12px',
    height: '12px',
    borderRadius: '6px',
    marginRight: '5px',
    position: 'relative',
    top: '2px',
  },
  line: {
    display: 'inline-block',
    width: '16px',
    height: 0,
    marginRight: '5px',
    borderBottom: 'none',
    verticalAlign: 'middle',
  },
};

const Labels = memo(props => {
  const { data, style } = props;
  return (
    <div style={{ ...styles.root, ...style }}>
      {data.map(t => {
        return (
          <span key={t.key} style={styles.label}>
            <i
              style={{ backgroundColor: t.backgroundColor, border: t.border, ...styles[t.type] }}
            />
            {t.label}
          </span>
        );
      })}
    </div>
  );
});

export default Labels;
