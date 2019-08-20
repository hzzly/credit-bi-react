// import { call, put } from 'redux-saga/effects';
// import { getMusicList } from '../api/music';
// import { saveMusicList } from '../types';

export function* getMapData({ payload }) {
  try {
    console.log(payload);
    // const data = yield call(getMusicList, payload);
    // yield put({ type: saveMusicList, payload: data });
  } catch (error) {
    console.log(error);
  }
}
