### Setup
``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8586
yarn start
```

## 数据大屏与数据可视化

现如今大数据已无所不在，并且正被越来越广泛的被应用到历史、政治、科学、经济、商业甚至渗透到我们生活的方方面面中，获取的渠道也越来越便利。

今天我们就来聊一聊“大屏应用”，说到大屏就一定要聊到数据可视化，现如今，数据可视化由于数据分析的火热也变得火热起来，不过数据可视化并不是一个新技术，可视化数据就是用可视化的方式展现的数据。而数据大屏作为大数据展示媒介的一种，广泛运用于各种展示厅、会展、发布会及各种狂欢节中，其中不乏一些通用的处理方案：阿里的DataV、百度的Suger、腾讯RayData等等。

随着物联网、5G等各种跟连接有关的技术的出现与发展，每个人手中掌握的数据量都呈指数级增长，光看这些数是看不过来也看不懂的，“数据可视化”就是一种简化，让艰难的数据理解过程，变成——看颜色，辨长短，分高低。从而大大缩短理解数据所需的时间。

因公司的自研产品涉及到BI模块，因此数据大屏展示的需求孕育而生（数据大屏需求已经完成）。

下面是本人针对这个数据大屏需求前期做的一些探索实践，数据也是mock的。

![bi](https://hzzlyxx.oss-cn-beijing.aliyuncs.com/blog/bi/img2.gif)


## 技术选型

- React 全家桶（React-Router、React-Redux、React Hooks）
- Webpack 编译打包
- Echarts 图表组件
- Socket.IO 即时通讯、通知与消息推送
- Grid 网格布局

## 系统搭建

### 图表选择

六种基本图表涵盖了大部分图表使用场景，也是做数据可视化最常用的图表类型：

- **柱状图** 用来反映分类项目之间的比较；
- **饼图** 用来反映构成，即部分占总体的比例；
- **折线图** 用来反映随时间变化的趋势；
- **条形图** 用来反映分类项目之间的比较；
- **散点图** 用来反映相关性或分布关系；
- **地图** 用来反映区域之间的分类比较。

基本图表类型都有通用的样式，不过多的展开讲解。我们更多的考虑如何选择常用图表来呈现数据，达到数据可视化的目标。基本方法：**明确目标** —> **选择图形** —> **梳理维度** —> **突出关键信息**。

### 数据请求推送

当信息一旦准备就绪，我们就需要从服务器获取它们。这里我们需要一种基于推送的方法，例如 WebSocket 协议、轮询、服务器推送事件（SSE）以及最近的 HTTP2 服务器推送。这里我们简单比较一下 WebSocket 与轮询。

轮询需要客户端定时向服务器发送ajax请求，服务器接到请求后返回响应信息。这就需要大量的占据服务器资源。同时在HTTP1.x协议中也存在一些比如线头阻塞、头部冗余等问题。所以这种方案直接pass了。

再来说说 WebSocket，建立在 TCP 协议之上，数据格式比较轻量，性能开销小，通信高效，可以发送文本，也可以发送二进制数据。同时它还没有同源限制，客户端可以与任意服务器通信。还有一点 WebSocket 通常不使用 XMLHttpRequest，因此，当我们每次需要从服务器获取更多的信息时，无需发送头部数据。反过来说，这又减少了数据发送到服务器时需要付出的高昂的数据负载代价。对于数据大屏需要实时获取数据，这无疑是最高效的。

### 布局

数据大屏的核心就是数据的拼接，具体到展示层可以归纳成数据块的拼接。这里我们采用通用的尺寸1920*108(16:9)。尺寸确立后，接下来要对展示层进行布局和页面的划分。这里的划分，主要根据我们之前定好的业务指标进行，核心业务指标安排在中间位置、占较大面积；其余的指标按优先级依次在核心指标周围展开。一般把有关联的指标让其相邻或靠近，把图表类型相近的指标放一起，这样能减少观者认知上的负担并提高信息传递的效率。

对于这种块状(网格)布局，我们就可以使用我们强大的 CSS 布局方案 -- **Grid**。它将网页划分成一个个网格，可以任意组合不同的网格，做出各种各样的布局。

安利一个grid 布局可视化设计工具 -- [CSS Grid Generator](https://cssgrid-generator.netlify.com/)。可以使用它生成对应的代码，帮助咱们快速布局。

![grid](https://hzzlyxx.oss-cn-beijing.aliyuncs.com/blog/bi/img2.png)

### 项目结构

聊完这些通用知识我们就可以上手开发了。

我这里使用了我自己开发的脚手架（hzzly-cli）来生成react项目环境。

> 有兴趣了解脚手架开发的可以看我这篇文章[动手开发一个自己的项目脚手架](http://hjingren.cn/2019/07/19/%E5%8A%A8%E6%89%8B%E5%BC%80%E5%8F%91%E4%B8%80%E4%B8%AA%E8%87%AA%E5%B7%B1%E7%9A%84%E9%A1%B9%E7%9B%AE%E8%84%9A%E6%89%8B%E6%9E%B6/)

项目结构如下：

```tree
├── src
│   ├── assets // 资源目录
│   ├── components // 公共组件目录
│   │   ├── Card // Card组件
│   │   ├── Charts // 图表组件目录
│   │   │   ├── Bar // 柱状图
│   │   │   ├── ChinaMap // 中国地图
│   │   │   ├── Funnel // 漏斗图
│   │   │   ├── Line // 折线图
│   │   │   ├── Pie // 饼图
│   │   │   └── lib // 基础图表组件
│   │   ├── ScrollNumber // 滚动数字组件
│   │   └── SvgIcon // Icon组件
│   ├── global.scss
│   ├── index.js
│   ├── pages // 分块结构目录
│   ├── router // 路由
│   ├── store
│   │   ├── actions
│   │   ├── index.js
│   │   ├── reducers
│   │   ├── sagas
│   │   └── types.js
│   └── utils
│       ├── genChartData.js
│       ├── genMapData.js
│       ├── socket.js
│       └── util.js
```

## 知识点

### Chart基础组件封装

这里对`echarts-for-react`进一步封装，其它图表组件可以直接继承使用。

```js
// Charts/lib/BaseChart.js
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
  return Object.assign({ position: 'relative' },
    style
  );
}
```

使用：

```js
// line.js
import BaseChart from '../lib/BaseChart';
import option from './option';
import getOption from './getOption';

export default class Line extends BaseChart {
  static defaultProps = {
    option,
    getOption,
  };
}

// option.js 基础配置
export default {
  // ...
};

// getOption.js 计算配置文件
function seriesCreator(series) {
  return series.map(e => ({
    type: 'line',
    symbol: 'circle',
    smooth: true,
    lineStyle: {
      normal: {
        width: 3,
      },
    },
    ...e,
  }));
}

export default function(option, data) {
  const { tooltip, xAxis, yAxis, yCategory, series = [], ...rest } = data;

  return {
    ...option,
    xAxis: {
      ...option.xAxis,
      ...xAxis,
    },
    tooltip: {
      ...option.tooltip,
      ...tooltip,
    },
    yAxis: {
      ...option.yAxis,
      ...yAxis,
      data: yCategory || [],
    },
    series: seriesCreator(series),
    ...rest,
  };
}
```

### Socket封装SDK

这里对`socket.io-client`封装成SDK，方便使用。

```js
import io from 'socket.io-client';

const socket = {
  wsConn: null,
  config: {
    wsHost: '/', // wesocket host

    onConn() {},
    onDisconn() {},
    onError() {},
    onReceiveMsg() {},
  },

  init(opt) {
    socket.config = { ...socket.config, ...opt };
  },

  getWs() {
    if (socket.wsConn) {
      return socket.wsConn;
    } else {
      socket.initWs();
    }
  },

  getWsStatus() {
    return socket.wsConn ? socket.wsConn.connected : false;
  },

  initWs() {
    if (socket.getWsStatus()) {
      return socket.wsConn;
    }

    const wsUrl = socket.config.wsHost;

    socket.wsConn = io.connect(wsUrl);
    socket.wsConn.on('connect', () => {
      socket.config.onConn(socket.wsConn);
    });

    socket.wsConn.on('message', (...param) => {
      socket.config.onReceiveMsg(...param);
    });

    socket.wsConn.on('disconnect', () => {
      socket.config.onDisconn();
    });
    return socket.wsConn;
  },

  reconnect() {
    if (socket.wsConn) {
      if (socket.wsConn.disconnected) {
        // reconnect ws
      } else {
        // do nothing
      }
    } else {
      socket.initWs();
    }
  },

  disconnect() {
    if (socket.wsConn) {
      if (socket.wsConn.connected) {
        socket.wsConn.disconnect();
      }
    }
  },

  wsEmit(params) {
    if (socket.wsConn) {
      socket.wsConn.emit(params.name, params.data);
    }
  },
};

(function(global) {
  global.socket = socket;
})(window);

export { socket };
```

### 动态数字展示

该数据通过socket推送实时更新。

数字过渡的动态效果为对应数位的新数字从下至上替换旧数字，如果该位数的数字没有发生变化，则没有过渡效果。

`1、对数据进行完善并格式化`

针对数字少于9位数进行前位补零并进行千分位格式化

```js
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
```

`2、过渡动画`

利用样式控制过渡动画，在第一步中我们对数字进行了格式化，然后我们针对每一位数字进行比较，当数字不相等的时候添加`active`类，最后对`active`类添加动画。

```js
// 循环渲染每一位数字
<li className={`${oldNumber[i] !== newNumber[i] ? 'active' : ''}`}>
  <span className="num">{oldNumber[i]}</span>
  <span className="num">{newNumber[i]}</span>
</li>
```

```css
.active {
  .num {
    animation: move 1.5s;
    animation-fill-mode: forwards; // 让动画结束后保持最后一帧
  }
}

@keyframes move {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
}
```

### 背景线性粒子

这里我使用了我自己封装的组件，可以对应框架来安装引用：

- [vue-particle-line](https://github.com/hzzly/vue-particle-line)
- [react-particle-line](https://github.com/hzzly/react-particle-line)

## 说明

1、项目框架目录结构采用笔者自己搭建的webpack环境：[webpack-template](https://github.com/hzzly/webpack-template)

2、关于适配和兼容性暂时还未完善，如果后期有时间会慢慢去完善

3、此项目为笔者调研时的实践，因为时间有限，一些功能还不善，设计和布局都是自己的一些想象与参考

4、此项目作为开源学习使用，谢绝用于商业应用

## 参考

- [超全面设计指南：如何做大屏数据可视化设计？](http://www.woshipm.com/pd/1782868.html)
- [五个方面，聊聊大数据可视化的初体验](http://www.woshipm.com/data-analysis/2279512.html)
- [一个炫酷大屏展示页的打造过程](https://juejin.im/post/5a20fe96f265da431120025b)