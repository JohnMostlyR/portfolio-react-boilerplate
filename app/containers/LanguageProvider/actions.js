/*
 *
 * LanguageProvider actions
 *
 */

import {
  CHANGE_LANGUAGE,
} from './constants';

export function changeLanguage(languageLocale) {
  return {
    type: CHANGE_LANGUAGE,
    locale: languageLocale,
  };
}
