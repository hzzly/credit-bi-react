import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '@/pages/Home/index';

const Router = () => (
  <Switch>
    <Route path="/" exact component={Home} />
  </Switch>
);

export default Router;
