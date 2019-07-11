import {combineReducers} from 'redux';
import config from './config';
import skills from './skills';
import certificates from './certificates';
import works from './works';
import contact from './contact';
import benefits from './benefits';
import interest from './interest';
import topSkills from './topSkills';
import categories from './categories';


export default combineReducers({
  config,
  skills,
  certificates,
  works,
  contact,
  benefits,
  interest,
  topSkills,
  categories
});