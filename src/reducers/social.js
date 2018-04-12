export default function social(state = [], action) {
  if (action.type === 'GET_SOCIAL') {
    return action.payload;
  }
  return state;
}