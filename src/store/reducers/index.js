import { combineReducers } from 'redux';
import app from './app';
import map from './map';
import loan from './loan';

export default combineReducers({
  app,
  map,
  loan,
});
