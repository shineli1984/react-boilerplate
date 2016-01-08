var Rx = require('rxjs');

import R from 'ramda';

const dispatcher = new Rx.ReplaySubject(1);

const combineReducers = reducers => (stateSoFar, action) => {
  const keys = R.keys(reducers);
  const values = keys.map(prop =>
    reducers[prop](stateSoFar[prop], action)
  );

  return R.zipObj(
    keys,
    values
  );
};

const createStore = reducer => dispatcher.scan(reducer, {});

export {
  dispatcher,
  combineReducers,
  createStore
};

