import $ from 'jquery'

export const getCertificate = (url) => dispatch => {
  $.ajax({
    url: url,
    type: 'GET',
  }).done(function( data ) {
    dispatch({type: 'GET_CERTIFICATES', payload: data});
  });
};