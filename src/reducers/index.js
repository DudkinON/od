import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import skills from './skills';
import provider from './provider';
import experience from './experience';
import education from './education';
import certificates from './certificates';
import works from './works';
import info from './info';
import social from './social';
import mobile from './mobile';


export default combineReducers(
  {
    routing: routerReducer,
    mobile,
    provider,
    info,
    experience,
    education,
    skills,
    certificates,
    works,
    social
  }
);