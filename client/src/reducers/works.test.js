import works from './works';
import {SET_WORKS} from '../actions/types';


it('should return empty state if action do not match', function () {
  expect(works(undefined, {})).toMatchObject([]);
});

it('should return payload if action passed', function () {
  const action = {type: SET_WORKS, payload: [1,2,3]};
  expect(works(undefined, action)).toMatchObject(action.payload)
});

it('should return state if state passed', function () {
  const state = [1,2,3,4,5];
  expect(works(state, {})).toMatchObject(state)
});

it('should update state if payload passed', function () {
  const state = [1,2,3,4,5];
  const action = {type: SET_WORKS, payload: [1,2,3]};
  expect(works(state, action)).toMatchObject(action.payload);
});