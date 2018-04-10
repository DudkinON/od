import $ from 'jquery';

export const worksCallback = () => {
  let elements = document.getElementsByClassName('work-item');
  [].forEach.call(elements, function(e) {
    $(e).removeClass('invisible').addClass('visible zoomIn');
  });
};