import $ from 'jquery'

export const getInfo = (url) => dispatch => {
  $.ajax({
    url: url,
    type: 'GET',
  }).done(function( data ) {
    dispatch({type: 'GET_INFO', payload: data[0]});
  });
};