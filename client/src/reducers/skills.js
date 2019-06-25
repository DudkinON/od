import {SET_SKILLS} from '../actions/types';

export default (state=[], action) => {
  switch (action.type) {
    case SET_SKILLS:
      return action.payload;
    default:
      return state;
  }
};
