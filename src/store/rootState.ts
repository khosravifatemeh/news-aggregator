import { combineReducers } from 'redux';
import errorReducer from './reducers/error';
import feedReducer from './reducers/feed';

const rootReducer = combineReducers({
  feed: feedReducer,
  error: errorReducer,
  
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer