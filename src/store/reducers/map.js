import { SAVE_MAP } from '../types';

const defaultState = {
  mapData: [],
  message: {},
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SAVE_MAP:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
