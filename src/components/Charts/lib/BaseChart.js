import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Echarts from 'echarts-for-react';

export default class BaseChart extends PureComponent {
  static propTypes = {
    option: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    getOption: PropTypes.func.isRequired,
    style: PropTypes.object,
  };

  static defaultProps = {
    style: {},
  };

  componentDidMount() {
    const { runAction } = this.props;

    if (this.chartRef && runAction) {
      const chartIns = this.chartRef.getEchartsInstance();
      window.setTimeout(() => {
        runAction(chartIns);
      }, 300);
    }
  }

  render() {
    const { option, data, getOption, style } = this.props;

    const finalOption = getOption(option, data);
    const finalStyle = getStyle(style);

    return (
      <Echarts
        ref={ref => {
          this.chartRef = ref;
        }}
        style={finalStyle}
        option={finalOption}
        notMerge
        lazyUpdate
      />
    );
  }
}

function getStyle(style) {
  return Object.assign(
    {
      position: 'relative',
      // width: '100%',
      // height: '100%',
      // tranform: 'translate3d(0, 0, 0)',
    },
    style
  );
}
