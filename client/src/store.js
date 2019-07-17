import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import reducers from './reducers'


export const store = configureStore({
  middleware: [thunk],
  reducer: reducers
});

export default store;