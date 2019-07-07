import interest from './interest';
import {SET_INTEREST} from '../actions/types';


it('should return empty state if action do not match', function () {
  expect(interest(undefined, {})).toMatchObject([]);
});

it('should return payload if action passed', function () {
  const action = {type: SET_INTEREST, payload: [1, 2, 3]};
  expect(interest(undefined, action)).toMatchObject(action.payload)
});

it('should return state if state passed', function () {
  const state = [1, 2, 3, 4, 5];
  expect(interest(state, {})).toMatchObject(state)
});

it('should update state if payload passed', function () {
  const state = [1, 2, 3, 4, 5];
  const action = {type: SET_INTEREST, payload: [1, 2, 3]};
  expect(interest(state, action)).toMatchObject(action.payload);
});