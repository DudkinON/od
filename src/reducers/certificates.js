
export default function certificates(state = [], action) {
  if (action.type === 'GET_CERTIFICATES') {
    return action.payload;
  }
  return state;
}