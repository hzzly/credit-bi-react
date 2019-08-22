import BaseChart from '../lib/BaseChart';
import option from './option';
import getOption from './getOption';

export default class Bar extends BaseChart {
  static defaultProps = {
    option,
    getOption,
  };
}
