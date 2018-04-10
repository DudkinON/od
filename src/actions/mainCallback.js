import $ from 'jquery';

export const mainCallback = (elementClass, classToAdd) => {
  return () =>
  {
    let elements = document.getElementsByClassName(elementClass);
    [].forEach.call(elements, function(e) {
      $(e).removeClass('invisible').addClass('visible ' + classToAdd);
    });
  }

};