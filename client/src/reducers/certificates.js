import {SET_CERTIFICATES} from '../actions/types';

export default (state=[], action) => {
  switch (action.type) {
    case SET_CERTIFICATES:
      return action.payload;
    default:
      return state;
  }
}