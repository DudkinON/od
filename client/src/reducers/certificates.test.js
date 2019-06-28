import certificates from './certificates';
import {SET_CERTIFICATES} from '../actions/types';


it('should return empty state if action do not match', function () {
  expect(certificates(undefined, {})).toMatchObject([]);
});

it('should return state if it passed', function () {
  const state = [1, 2, 3];
  expect(certificates(state, {})).toMatchObject(state);
});

it('should return action payload if action passed', function () {

  const state = [1, 2, 3];

  const action = {
    type: SET_CERTIFICATES,
    payload: [1, 2, 3, 4, 5]
  };

  expect(certificates(state, action)).toMatchObject(action.payload);
});