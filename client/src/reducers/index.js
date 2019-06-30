import {combineReducers} from 'redux';
import config from './config';
import skills from './skills';
import certificates from './certificates';
import works from './works';


export default combineReducers({
  config,
  skills,
  certificates,
  works
});