export default function education(state = {}, action) {
  if (action.type === 'GET_EDUCATION') {
    return action.payload;
  }
  return state;
}