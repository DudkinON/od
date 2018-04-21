import Provider from '../components/Provider';

export default function provider(state = Provider, action) {
  if (action.type === 'GET_INIT') {
    return action.payload;
  }
  return state;
}