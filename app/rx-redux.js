import Rx from 'rxjs';
import R from 'ramda';

const dispatcher = new Rx.Subject();

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

const createStore = reducer => dispatcher.scan(reducer, {}).publish();

export {
  dispatcher,
  combineReducers,
  createStore
};
