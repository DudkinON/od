import {SET_TOP_SKILLS} from '../actions/types';

export default (state=[], action) => {
  switch (action.type) {
    case SET_TOP_SKILLS:
      return action.payload;
    default:
      return state;
  }
};
