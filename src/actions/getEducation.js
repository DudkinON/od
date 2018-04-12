import $ from 'jquery'

export const getEducation = (url) => dispatch => {
  $.ajax({
    url: url,
    type: 'GET',
  }).done(function( data ) {
    dispatch({type: 'GET_EDUCATION', payload: data[0]});
  });
};