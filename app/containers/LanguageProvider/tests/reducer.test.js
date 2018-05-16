import { fromJS } from 'immutable';

import languageProviderReducer from '../reducer';
import {
  CHANGE_LANGUAGE,
} from '../constants';

describe('languageProviderReducer', () => {
  it('returns the initial state', () => {
    expect(languageProviderReducer(undefined, {})).toEqual(fromJS({
      locale: 'en',
    }));
  });

  it('changes the locale', () => {
    expect(languageProviderReducer(undefined, { type: CHANGE_LANGUAGE, locale: 'nl' }).toJS()).toEqual({
      locale: 'nl',
    });
  });
});
