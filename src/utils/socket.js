import io from 'socket.io-client';

const socket = {
  wsConn: null,
  config: {
    wsHost: '/', // wesocket host
    autoReconnectNum: 0, // auto reconnect times

    // ~~~~~ Callback ~~~~~
    onConn() {},
    onDisconn() {},
    onError() {},
    onReceiveMsg() {},
  },

  /** init */
  init(opt) {
    socket.config = { ...socket.config, ...opt };
  },

  getWs() {
    if (socket.wsConn) {
      return socket.wsConn;
    } else {
      // TODO: reconnect
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
  global.socket = socket; // eslint-disable-line no-param-reassign
})(window);

export { socket };
