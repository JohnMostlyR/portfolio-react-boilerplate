/*
 *
 * App actions
 *
 */

import {
  SET_SITE_NAVIGATION_IS_AT_SCREEN_TOP,
  SET_SITE_NAVIGATION_OFFSET_HEIGHT,
  SET_SITE_NAVIGATION_TOP_POSITION,
  SET_SITE_WIDTH,
} from './constants';

export function setSiteWidth(width) {
  return {
    type: SET_SITE_WIDTH,
    width,
  };
}

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
