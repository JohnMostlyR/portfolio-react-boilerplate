import { createSelector } from 'reselect';
import { Map } from 'immutable';

import { initialState } from './reducer';

/**
 * Direct selector to the contactPage state domain
 */
const selectContactPageDomain = state => state.get('contactPage', initialState);

/**
 * Other specific selectors
 */
const makeSelectField = () =>
  createSelector(
    selectContactPageDomain,
    substate => {
      const field = substate.get('field');

      if (Map.isMap(field)) {
        return field.toJS();
      }

      return field;
    },
  );

const makeSelectSendStatus = () =>
  createSelector(
    selectContactPageDomain,
    substate => substate.get('sendStatus'),
  );
const makeSelectError = () =>
  createSelector(
    selectContactPageDomain,
    substate => {
      const error = substate.get('error');

      if (Map.isMap(error)) {
        return error.toJS();
      }

      return error;
    },
  );

export {
  selectContactPageDomain,
  makeSelectField,
  makeSelectSendStatus,
  makeSelectError,
};
