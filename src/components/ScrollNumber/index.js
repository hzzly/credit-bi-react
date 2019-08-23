import React, { PureComponent } from 'react';
import styles from './index.scss';

export default class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      numbers: '',
      newNumber: [],
      oldNumber: [],
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { numbers } = props;
    if (numbers !== state.numbers) {
      const newNumber = toThousands(numbers);
      const oldNumber = toThousands(state.numbers ? state.numbers : numbers);
      if (oldNumber.length > newNumber.length) {
        newNumber.length = oldNumber.length;
      } else {
        oldNumber.length = newNumber.length;
      }
      return {
        numbers,
        newNumber,
        oldNumber,
      };
    }
    return null;
  }

  render() {
    const { newNumber, oldNumber } = this.state;
    const { style } = this.props;
    return (
      <ul className={styles.numberBox} style={style}>
        {newNumber.map((item, i) => {
          return (
            <li
              className={`${styles.numberItem} ${isNaN(item) ? styles.comma : ''} ${
                oldNumber[i] !== newNumber[i] ? styles.active : ''
              }`}
              key={item + i} // eslint-disable-line
            >
              <span className={styles.num}>{oldNumber[i]}</span>
              <span className={styles.num}>{newNumber[i]}</span>
            </li>
          );
        })}
      </ul>
    );
  }
}

const MAX_LEN = 9;

function toThousands(val) {
  let num = (val || 0).toString();
  while (num.length < MAX_LEN) {
    num = `0${num}`;
  }
  let result = '';
  while (num.length > 3) {
    result = `,${num.slice(-3)}${result}`;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  return result.toString().split('');
}
