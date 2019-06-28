import skills from './skills';
import {SET_SKILLS} from '../actions/types';


it('should return empty state if action do not match', function () {
  expect(skills(undefined, {})).toMatchObject([]);
});

it('should return payload if action passed', function () {
  const action = {type: SET_SKILLS, payload: [1,2,3]};
  expect(skills(undefined, action)).toMatchObject(action.payload)
});

it('should return state if state passed', function () {
  const state = [1,2,3,4,5];
  expect(skills(state, {})).toMatchObject(state)
});

it('should update state if payload passed', function () {
  const state = [1,2,3,4,5];
  const action = {type: SET_SKILLS, payload: [1,2,3]};
  expect(skills(state, action)).toMatchObject(action.payload);
});