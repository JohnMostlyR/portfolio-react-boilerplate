/**
 *
 * App config
 *
 */

import { appLocales } from 'i18n';

/**
 * The default locale to be used
 * @type {string} - Needs to be in lowercase and needs to exist in i18n.appLocales
 */
const DEFAULT_LOCALE = 'en';

/**
 * Your website URL
 * @type {string} - Needs to be in lowercase wit a trailing slash (/)
 */
export const WEBSITE_URL = 'https://meester-johan.info/';

export const config = Object.freeze({
  api: {
    contentful: {
      endpoint: 'https://cdn.contentful.com/spaces/1tymefars1bj/entries?',
      access_token: '9e9c6e46f1e52cfe1d30836842c1d98b131c9cb130902159f51b44bf6c41f09e',
    },
  },
  defaultLocale: DEFAULT_LOCALE,
  locales: appLocales,
  seo: {
    baseURL: WEBSITE_URL,
    description: { content: 'metaDescription', isMessageId: true },
    openGraph: {
      description: { content: 'metaDescription', isMessageId: true },
      image: {
        content: {
          url: `${WEBSITE_URL}logo-600x600.png`,
          secure_url: `${WEBSITE_URL}logo-600x600.png`,
          height: 600, // pixels
          width: 600, // pixels
        },
      },
      site_name: { content: 'metaSiteName', isMessageId: true },
      type: { content: 'website' },
    },
    twitter: {
      card: { content: 'summary' },
      creator: { content: '' },
      description: { content: 'metaDescription', isMessageId: true },
      image: { content: `${WEBSITE_URL}logo-600x600.png` },
      site: { content: '' },
    },
  },
  verification: {
    bing: { siteAuth: '8449F2E65DAE05C2621A367448F98023' },
    facebook: { pagesID: '', appID: '' },
    google: { siteVerification: '' },
  },
});
