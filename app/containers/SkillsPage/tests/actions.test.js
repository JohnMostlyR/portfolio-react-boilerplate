import {
  LOAD_CONTENT,
  LOAD_CONTENT_ERROR,
  LOAD_CONTENT_SUCCESS,
} from '../constants';

import { loadContent, contentLoadingError, contentLoaded } from '../actions';

describe('SkillsPage Actions', () => {
  describe('loadContent', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_CONTENT,
      };

      expect(loadContent()).toEqual(expectedResult);
    });
  });

  describe('contentLoaded', () => {
    it('should return the correct type and the passed repos', () => {
      const fixture = 'Test';
      const locale = 'en';
      const expectedResult = {
        type: LOAD_CONTENT_SUCCESS,
        content: fixture,
        locale,
      };

      expect(contentLoaded(fixture, locale)).toEqual(expectedResult);
    });
  });

  describe('contentLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_CONTENT_ERROR,
        error: fixture,
      };

      expect(contentLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
