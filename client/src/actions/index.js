import axios from 'axios';
import * as types from "./types";

export const getSkills = url => dispatch => {
  return axios.get(url).then(res => {
      if (res && res.data)
        return dispatch({type: types.SET_SKILLS, payload: res.data});
    });
};

export const getCertificates = url => dispatch => {
  return axios.get(url).then(res => {
    if (res && res.data)
      return dispatch({type: types.SET_CERTIFICATES, payload: res.data});
  })
};

export const getWorks = url => dispatch => {
  return axios.get(url).then(res => {
    if (res && res.data)
      return dispatch({type: types.SET_WORKS, payload: res.data});
  })
};

export const getContact = url => dispatch => {
  return axios.get(url).then(res => {
    if (res && res.data)
      return dispatch({type: types.SET_CONTACT, payload: res.data});
  })
};

export const getBenefits = url => dispatch => {
  return axios.get(url).then(res => {
    if (res && res.data)
      return dispatch({type: types.SET_BENEFITS, payload: res.data});
  })
};