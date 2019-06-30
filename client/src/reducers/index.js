import {combineReducers} from 'redux';
import config from './config';
import skills from './skills';
import certificates from './certificates';
import works from './works';
import contact from './contact';


export default combineReducers({
  config,
  skills,
  certificates,
  works,
  contact
});