import $ from 'jquery'

export const getSkills = (url) => dispatch => {
  $.ajax({
    url: url,
    type: 'GET',
  }).done(function( data ) {
    dispatch({type: 'GET_SKILLS', payload: data});
  });
};