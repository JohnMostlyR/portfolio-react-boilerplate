/*
 *
 * SiteNavigation actions
 *
 */

import {
  SET_SITE_NAVIGATION_IS_AT_SCREEN_TOP,
  SET_SITE_NAVIGATION_OFFSET_HEIGHT,
  SET_SITE_NAVIGATION_TOP_POSITION,
} from './constants';

export function setSiteNavigationTopPosition(topPosition) {
  return {
    type: SET_SITE_NAVIGATION_TOP_POSITION,
    topPosition,
  };
}

export function setSiteNavigationOffsetHeight(offsetHeight) {
  return {
    type: SET_SITE_NAVIGATION_OFFSET_HEIGHT,
    offsetHeight,
  };
}

export function setSiteNavigationIsAtScreenTop(isAtScreenTop) {
  return {
    type: SET_SITE_NAVIGATION_IS_AT_SCREEN_TOP,
    isAtScreenTop,
  };
}
