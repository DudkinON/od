export default function mobile(state = false, action) {
  if (action.type === 'IS_MOBILE') {
    return action.payload;
  }
  return state;
}