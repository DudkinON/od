import contact from './contact';
import {SET_CONTACT} from '../actions/types';


it('should return empty state if action do not match', function () {
  expect(contact(undefined, {})).toMatchObject([]);
});

it('should return payload if action passed', function () {
  const action = {type: SET_CONTACT, payload: [1, 2, 3]};
  expect(contact(undefined, action)).toMatchObject(action.payload)
});

it('should return state if state passed', function () {
  const state = [1, 2, 3, 4, 5];
  expect(contact(state, {})).toMatchObject(state)
});

it('should update state if payload passed', function () {
  const state = [1, 2, 3, 4, 5];
  const action = {type: SET_CONTACT, payload: [1, 2, 3]};
  expect(contact(state, action)).toMatchObject(action.payload);
});