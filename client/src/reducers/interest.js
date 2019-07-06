import {SET_INTEREST} from '../actions/types';

export default (state=[], action) => {
  switch (action.type) {
    case SET_INTEREST:
      return action.payload;
    default:
      return state;
  }
};
