import {SET_WORK} from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case SET_WORK:
      return action.payload;
    default:
      return state;
  }
};
