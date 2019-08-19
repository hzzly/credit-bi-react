import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import './global.scss';

function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('root')
  );
}

/* 初始化 */
render(Router);

/* 热更新 */
if (module.hot) {
  module.hot.accept('./router/index.js', () => {
    render(Router);
  });
}

// 判断该浏览器支不支持 serviceWorker
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker
//       .register('/service-worker.js')
//       .then(registration => console.log(`service-worker registed' ${registration}`))
//       .catch(error => console.log(`service-worker registed error' ${error}`));
//   });
// }
