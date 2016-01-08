// Disable the no-use-before-define eslint rule for this file
// It makes more sense to have the asnyc actions before the non-async ones
/* eslint-disable no-use-before-define */

import { CHANGE_OWNER_NAME, CHANGE_PROJECT_NAME } from './HomePage.constants';
import { dispatcher } from '../../rx-redux';

const changeProjectName = name =>
  ({ type: CHANGE_PROJECT_NAME, name });

const changeOwnerName = name =>
  ({ type: CHANGE_OWNER_NAME, name });

const dispatchChangeProjectName = name =>
  dispatcher.next(
    changeProjectName(name)
  );

const dispatchChangeOwnerName = name =>
  dispatcher.next(
    changeOwnerName(name)
  );

export {
  dispatchChangeOwnerName,
  dispatchChangeProjectName
};