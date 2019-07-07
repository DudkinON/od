import {combineReducers} from 'redux';
import config from './config';
import skills from './skills';
import certificates from './certificates';
import works from './works';
import contact from './contact';
import benefits from './benefits';
import interest from './interest';


export default combineReducers({
  config,
  skills,
  certificates,
  works,
  contact,
  benefits,
  interest
});