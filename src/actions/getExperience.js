import $ from 'jquery'

export const getExperience = (url) => dispatch => {
  $.ajax({
    url: url,
    type: 'GET',
  }).done(function( data ) {
    dispatch({type: 'GET_EXPERIENCE', payload: data});
  });
};