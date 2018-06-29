/*
 *
 * VisualSiteWrapper actions
 *
 */

import { SET_SCROLL_TOP, SET_SITE_WIDTH } from './constants';

export function setSiteWidth(width) {
  return {
    type: SET_SITE_WIDTH,
    payload: width,
  };
}

export function setScrollTop(topPosition) {
  return {
    type: SET_SCROLL_TOP,
    payload: topPosition,
  };
}
