import work from './work';
import {SET_WORK} from '../actions/types';


it('should return empty state if action do not match', function () {
  expect(work(undefined, {})).toMatchObject({});
});

it('should return payload if action passed', function () {
  const action = {type: SET_WORK, payload: {id: "1"}};
  expect(work(undefined, action)).toMatchObject(action.payload)
});

it('should return state if state passed', function () {
  const state = {id: "5"};
  expect(work(state, {})).toMatchObject(state)
});

it('should update state if payload passed', function () {
  const state = {id: "5"};
  const action = {type: SET_WORK, payload: {id: "1"}};
  expect(work(state, action)).toMatchObject(action.payload);
});