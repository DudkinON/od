import axios from 'axios';
import {SET_SKILLS} from "./types";

export const getSkills = url => dispatch => {
  return axios.get(url).then(res => {
      if (res && res.data) return dispatch({type: SET_SKILLS, payload: res.data});
    });
};