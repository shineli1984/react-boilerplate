/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import HomePageReducer from './containers/HomePage/HomePage.reducer';
import { combineReducers } from './rx-redux';

const rootReducer = combineReducers({
  data: HomePageReducer
});

export default rootReducer;
