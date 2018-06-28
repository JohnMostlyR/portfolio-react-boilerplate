/*
 *
 * LanguageProvider reducer
 *
 */

import { fromJS } from 'immutable';

import { CHANGE_LANGUAGE } from './constants';
import { config } from '../../config'; // eslint-disable-line

const { appLocales, defaultLocale } = config;
const {
  navigator: { language },
} = window;
let locale = language.substr(0, 2).toLowerCase();

if (!appLocales.indexOf(locale)) {
  locale = defaultLocale;
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
