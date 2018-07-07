/*
 *
 * VisualSiteWrapper reducer
 *
 */

import { fromJS } from 'immutable';
import { SET_SCROLL_TOP, SET_SITE_WIDTH } from './constants';

// The initial state of the VisualSiteWrapper
export const initialState = fromJS({
  scrollTop: 0,
  siteWidth: 0,
});

function visualSiteWrapperReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_SCROLL_TOP:
      return state.set('scrollTop', payload);
    case SET_SITE_WIDTH:
      return state.set('siteWidth', payload);
    default:
      return state;
  }
}

export default visualSiteWrapperReducer;
