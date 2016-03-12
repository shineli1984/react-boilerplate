import {
  createStore
} from './rx-redux';

import rootReducer from './rootReducer';

// store instance
const store = createStore(rootReducer);

store.connect();

export default store;
