/*
 *
 * App reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_SITE_NAVIGATION_OFFSET_HEIGHT,
  SET_SITE_NAVIGATION_TOP_POSITION,
  SET_SITE_NAVIGATION_IS_AT_SCREEN_TOP,
  SET_SITE_WIDTH,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  siteWidth: 0,
  siteNavigation: {
    isAtScreenTop: false,
    offsetHeight: 0,
    topPosition: 0,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SITE_NAVIGATION_TOP_POSITION:
      return state
        .setIn(['siteNavigation', 'topPosition'], action.topPosition);
    case SET_SITE_NAVIGATION_OFFSET_HEIGHT:
      return state
        .setIn(['siteNavigation', 'offsetHeight'], action.offsetHeight);
    case SET_SITE_NAVIGATION_IS_AT_SCREEN_TOP:
      return state
        .setIn(['siteNavigation', 'isAtScreenTop'], action.isAtScreenTop);
    case SET_SITE_WIDTH:
      return state
        .set('siteWidth', action.width);
    default:
      return state;
  }
}

export default appReducer;
