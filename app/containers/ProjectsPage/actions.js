/*
 *
 * ProjectsPage actions
 *
 */

import {
  LOAD_CONTENT,
  LOAD_CONTENT_SUCCESS,
  LOAD_CONTENT_ERROR,
} from './constants';

/**
 * Load the content from contentful, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_CONTENT
 */
export function loadContent() {
  return {
    type: LOAD_CONTENT,
  };
}

/**
 * Dispatched when the content is loaded by the request saga
 *
 * @param  {object} content The data from contentful
 * @param  {string} locale The locale for the content
 *
 * @return {object}      An action object with a type of LOAD_CONTENT_SUCCESS passing the content
 */
export function contentLoaded(content, locale) {
  return {
    type: LOAD_CONTENT_SUCCESS,
    content,
    locale,
  };
}

/**
 * Dispatched when loading of the content fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_CONTENT_ERROR passing the error
 */
export function contentLoadingError(error) {
  return {
    type: LOAD_CONTENT_ERROR,
    error,
  };
}
