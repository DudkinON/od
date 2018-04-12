export default function info(state = {}, action) {
  if (action.type === 'GET_INFO') {
    return action.payload;
  }
  return state;
}