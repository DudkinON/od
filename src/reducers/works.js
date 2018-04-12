export default function works(state = [], action) {
  if (action.type === 'GET_WORKS') {
    return action.payload;
  }
  return state;
}