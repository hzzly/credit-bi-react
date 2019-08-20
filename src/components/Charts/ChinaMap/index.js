import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import 'echarts/map/js/china';
// import 'echarts-gl';
import BaseChart from '../lib/BaseChart';
import optionConfig from './option';
import getOptionFun from './getOption';

export default class ChinaMap extends PureComponent {
  static defaultProps = {
    option: optionConfig,
    getOption: getOptionFun,
  };

  runCallback = chart => {
    const { option, data, getOption, message } = this.props;
    const finalOption = getOption(option, data);
    const index = Math.floor(Math.random() * 3);
    finalOption.series[index].data = [
      {
        ...message,
        visualMap: false,
      },
    ];
    console.log(finalOption);
    chart.setOption(finalOption);
  };

  render() {
    return <BaseChart {...this.props} runCallback={this.runCallback} />;
  }
}
