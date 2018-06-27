/*
 *
 * LanguageProvider reducer
 *
 */

import { fromJS } from 'immutable';

import { CHANGE_LANGUAGE } from './constants';
import { DEFAULT_LOCALE } from '../App/constants'; // eslint-disable-line

let locale = DEFAULT_LOCALE;

if (window.navigator.language === 'nl') {
  locale = 'nl';
}

export const initialState = fromJS({
  locale,
});

function languageProviderReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return state.set('locale', action.locale);
    default:
      return state;
  }
}

export default languageProviderReducer;
