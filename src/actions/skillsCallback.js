export const skillsCallback = () => {
  /**
   * In the loop run each function
   * @return void:
   */
  let elements = document.getElementsByClassName('progress-bar');
  [].forEach.call(elements, function(e) {
    const percent = e.getAttribute('aria-valuenow');
    e.style.width = percent + '%';
  });
};