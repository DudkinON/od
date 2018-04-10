import $ from "jquery";

export const runAnimation = (id, animateClass, callback, offset = 200) => {
  return $(id).viewportChecker({
    classToRemove: 'invisible',
    classToAdd: 'visible ' + animateClass,
    callbackFunction: callback,
    offset: offset});
};