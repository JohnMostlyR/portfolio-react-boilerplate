import {
  setSiteNavigationIsAtScreenTop,
  setSiteNavigationOffsetHeight,
  setSiteNavigationTopPosition,
} from '../actions';
import {
  SET_SITE_NAVIGATION_IS_AT_SCREEN_TOP,
  SET_SITE_NAVIGATION_OFFSET_HEIGHT,
  SET_SITE_NAVIGATION_TOP_POSITION,
} from '../constants';

describe('App actions', () => {
  describe('setSiteNavigationTopPosition', () => {
    it('should return the correct type and the passed topPosition', () => {
      const topPosition = 10;
      const expected = {
        type: SET_SITE_NAVIGATION_TOP_POSITION,
        topPosition,
      };
      expect(setSiteNavigationTopPosition(topPosition)).toEqual(expected);
    });
  });

  describe('setSiteNavigationOffsetHeight', () => {
    it('should return the correct type and the passed offsetHeight', () => {
      const offsetHeight = 100;
      const expected = {
        type: SET_SITE_NAVIGATION_OFFSET_HEIGHT,
        offsetHeight,
      };
      expect(setSiteNavigationOffsetHeight(offsetHeight)).toEqual(expected);
    });
  });

  describe('setSiteNavigationIsAtScreenTop', () => {
    it('should return the correct type and the passed isAtScreenTop', () => {
      const isAtScreenTop = true;
      const expected = {
        type: SET_SITE_NAVIGATION_IS_AT_SCREEN_TOP,
        isAtScreenTop,
      };
      expect(setSiteNavigationIsAtScreenTop(isAtScreenTop)).toEqual(expected);
    });
  });
});
