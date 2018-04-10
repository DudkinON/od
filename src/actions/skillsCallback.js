export const skillsCallback = () => {


  let elements = document.getElementsByClassName('progress-bar');
  [].forEach.call(elements, function(e) {
    const percent = e.getAttribute('aria-valuenow');
    e.style.width = percent + '%';
  });
};