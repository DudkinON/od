import {SET_BENEFITS} from '../actions/types';

export default (state=[], action) => {
  switch (action.type) {
    case SET_BENEFITS:
      return action.payload;
    default:
      return state;
  }
}