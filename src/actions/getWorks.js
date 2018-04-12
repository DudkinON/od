import $ from 'jquery'

export const getWorks = (url) => dispatch => {
  $.ajax({
    url: url,
    type: 'GET',
  }).done(function( data ) {
    dispatch({type: 'GET_WORKS', payload: data});
  });
};