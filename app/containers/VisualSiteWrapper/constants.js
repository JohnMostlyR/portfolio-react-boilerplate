/*
 * VisualSiteWrapper Constants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const SET_SCROLL_TOP = 'portfolio/VisualSiteWrapper/SET_SCROLL_TOP';
export const SET_SITE_WIDTH = 'portfolio/VisualSiteWrapper/SET_SITE_WIDTH';
