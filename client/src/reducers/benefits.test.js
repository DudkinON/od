import benefits from './benefits';
import {SET_BENEFITS} from '../actions/types';


it('should return empty state if action do not match', function () {
  expect(benefits(undefined, {})).toMatchObject([]);
});

it('should return state if it passed', function () {
  const state = [1, 2, 3];
  expect(benefits(state, {})).toMatchObject(state);
});

it('should return action payload if action passed', function () {

  const state = [1, 2, 3];

  const action = {
    type: SET_BENEFITS,
    payload: [1, 2, 3, 4, 5]
  };

  expect(benefits(state, action)).toMatchObject(action.payload);
});