import { SET_SCROLL_TOP, SET_SITE_WIDTH } from '../constants';
import { setScrollTop, setSiteWidth } from '../actions';

describe('VisualSiteWrapper actions', () => {
  describe('setScrollTop', () => {
    it('should return the correct type and the passed topPosition', () => {
      const topPosition = 10;
      const expected = {
        type: SET_SCROLL_TOP,
        payload: topPosition,
      };
      expect(setScrollTop(topPosition)).toEqual(expected);
    });
  });

  describe('setSiteWidth', () => {
    it('should return the correct type and the passed width', () => {
      const width = 100;
      const expected = {
        type: SET_SITE_WIDTH,
        payload: width,
      };
      expect(setSiteWidth(width)).toEqual(expected);
    });
  });
});
