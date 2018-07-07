/*
 *
 * SiteNavigation reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_SITE_NAVIGATION_OFFSET_HEIGHT,
  SET_SITE_NAVIGATION_TOP_POSITION,
  SET_SITE_NAVIGATION_IS_AT_SCREEN_TOP,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  isAtScreenTop: false,
  offsetHeight: 0,
  topPosition: 0,
});

function siteNavigationReducer(
  state = initialState,
  { type, topPosition = 0, offsetHeight = 0, isAtScreenTop = false },
) {
  switch (type) {
    case SET_SITE_NAVIGATION_TOP_POSITION:
      return state.set('topPosition', topPosition);
    case SET_SITE_NAVIGATION_OFFSET_HEIGHT:
      return state.set('offsetHeight', offsetHeight);
    case SET_SITE_NAVIGATION_IS_AT_SCREEN_TOP:
      return state.set('isAtScreenTop', isAtScreenTop);
    default:
      return state;
  }
}

export default siteNavigationReducer;
