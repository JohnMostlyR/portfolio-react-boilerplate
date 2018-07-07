import { changeLanguage } from '../actions';

import { CHANGE_LANGUAGE } from '../constants';

describe('LanguageProvider actions', () => {
  describe('Change Local Action', () => {
    it('has a type of CHANGE_LANGUAGE', () => {
      const expected = {
        type: CHANGE_LANGUAGE,
        locale: 'nl',
      };
      expect(changeLanguage('nl')).toEqual(expected);
    });
  });
});
