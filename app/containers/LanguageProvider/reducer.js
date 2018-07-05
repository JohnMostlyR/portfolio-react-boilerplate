/*
 *
 * LanguageProvider reducer
 *
 */

import { fromJS } from 'immutable';

import { CHANGE_LANGUAGE } from './constants';
import { config } from '../../config'; // eslint-disable-line

const { appLocales, defaultLocale } = config;
const { navigator: { language = '' } = {} } = window;
let locale = defaultLocale;

/**
 * In case language is not set it's most likely an indexer
 * and in that case we want to push 'nl'
 */
if (language) {
  if (appLocales.indexOf(language) !== -1) {
    locale = language.substr(0, 2).toLowerCase();
  }
} else {
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
