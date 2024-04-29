
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import errorReducer from './reducers/error';
import feedReducer from './reducers/feed';
import { RootState } from './rootState';



const store = configureStore({
  reducer: {
    feed: feedReducer,
    error: errorReducer,
    devTools: composeWithDevTools()
  },
});

export default store;
export type { RootState };



