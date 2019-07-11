import topSkills from './topSkills';
import {SET_TOP_SKILLS} from '../actions/types';


it('should return empty state if action do not match', function () {
  expect(topSkills(undefined, {})).toMatchObject([]);
});

it('should return payload if action passed', function () {
  const action = {type: SET_TOP_SKILLS, payload: ['1','2','3']};
  expect(topSkills(undefined, action)).toMatchObject(action.payload)
});

it('should return state if state passed', function () {
  const state = [1,2,3,4,5];
  expect(topSkills(state, {})).toMatchObject(state)
});

it('should update state if payload passed', function () {
  const state = [1,2,3,4,5];
  const action = {type: SET_TOP_SKILLS, payload: [1,2,3]};
  expect(topSkills(state, action)).toMatchObject(action.payload);
});