/**
 * Some utility functions for handling URL's
 */

/**
 * Normalizes the passed URL
 * @param {!string} url
 * @returns {string} - All lowercase and without a trailing slash (/)
 */
export function normalizeURL(url) {
  const _url = (url.endsWith('/')) ? url.slice(0, -1) : url; // eslint-disable-line
  // no-underscore-dangling

  return _url.toLowerCase();
}

/**
 * Normalizes the passed path
 * @param {string} path
 * @returns {string} - The passed path without any leading or trailing slash (/)
 */
export function normalizePath(path = '') {
  let _path = (path.endsWith('/')) ? path.slice(0, -1) : path; // eslint-disable-line
  // no-underscore-dangling
  _path = _path.startsWith('/') ? _path.slice(1) : _path;

  return _path;
}

/**
 * Returns a canonical URL
 * @param {!string} url
 * @param {string} locale
 * @param {string} path
 * @returns {string}
 */
export function buildCanonicalURL({ url, locale, path }) {
  return `${[normalizeURL(url), locale, normalizePath(path)]
    .filter(item => !!item)
    .join('/')}/`;
}
