// takeEvery 允许多个实例任务同时启动。在某个特定时刻，尽管之前还有一个或多个相同实例任务尚未结束，我们还是可以启动一个新的实例任务
// 在任何时刻 takeLatest 只允许一个实例任务在执行。并且这个任务是最后被启动的那个。如果已经有一个任务在执行的时候启动另一个实例任务 ，那之前的这个任务会被自动取消。
import { takeEvery } from 'redux-saga/effects';
// import { getMapData } from './map';
import { saveMap } from '../actions/map';
import { saveLoan } from '../actions/loan';

export default function* rootSaga() {
  // yield takeLatest('setSocket', setSocket);
  yield takeEvery('saveMap', saveMap);
  yield takeEvery('saveLoan', saveLoan);
}
