import categories from './categories';
import {SET_CATEGORIES} from '../actions/types';


it('should return empty state if action do not match', function () {
  expect(categories(undefined, {})).toMatchObject([]);
});

it('should return payload if action passed', function () {
  const action = {type: SET_CATEGORIES, payload: [1,2,3]};
  expect(categories(undefined, action)).toMatchObject(action.payload)
});

it('should return state if state passed', function () {
  const state = [1,2,3,4,5];
  expect(categories(state, {})).toMatchObject(state)
});

it('should update state if payload passed', function () {
  const state = [1,2,3,4,5];
  const action = {type: SET_CATEGORIES, payload: [1,2,3]};
  expect(categories(state, action)).toMatchObject(action.payload);
});