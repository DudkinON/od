import {combineReducers} from 'redux';
import config from './config';
import skills from './skills';

export default combineReducers({
  config,
  skills
});