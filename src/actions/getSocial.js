import $ from 'jquery'

export const getSocial = (url) => dispatch => {
  $.ajax({
    url: url,
    type: 'GET',
  }).done(function( data ) {
    dispatch({type: 'GET_SOCIAL', payload: data});
  });
};