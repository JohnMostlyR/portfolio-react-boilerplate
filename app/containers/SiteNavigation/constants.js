/*
 * SiteNavigation
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const SET_SITE_NAVIGATION_OFFSET_HEIGHT =
  'portfolio/SiteNavigation/SET_SITE_NAVIGATION_OFFSET_HEIGHT';
export const SET_SITE_NAVIGATION_TOP_POSITION =
  'portfolio/SiteNavigation/SET_SITE_NAVIGATION_TOP_POSITION';
export const SET_SITE_NAVIGATION_IS_AT_SCREEN_TOP =
  'portfolio/SiteNavigation/SET_SITE_NAVIGATION_IS_AT_SCREEN_TOP';
