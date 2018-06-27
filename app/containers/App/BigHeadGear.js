/**
 *
 * BigHeadGear
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import { intlShape, injectIntl } from 'react-intl';
import messages from './messages';

import { config } from '../../config';

/* eslint-disable no-unused-vars */
const {
  verification: {
    bing: { siteAuth },
    facebook: { facebookAppID, facebookPagesID },
    google: { googleSiteVerification },
  },
  defaultLocale,
  locales,
  seo: { baseURL, description, openGraph, twitter },
} = config;

function constructLinks() {
  const basic = [
    {
      rel: 'canonical',
      href: baseURL,
    },
    {
      rel: 'alternate',
      href: `${baseURL}${defaultLocale}/`,
      hreflang: 'x-default',
    },
  ];

  const alternateLanguages = locales
    .map(locale => locale.toLowerCase())
    .filter(locale => locale !== defaultLocale.toLowerCase())
    .map(locale => ({
      rel: 'alternate',
      href: `${baseURL}${locale}/`,
      hreflang: locale,
    }));

  return basic.concat(alternateLanguages);
}

/**
 * @see {@link http://ogp.me/}
 * @see {@link https://developers.facebook.com/docs/sharing/webmasters}
 */
function constructOpenGraphMetaTags({ formatMessage }) {
  if (openGraph) {
    return Object.entries(openGraph)
      .filter(([, { content }]) => content)
      .reduce((previous, [property, { content, isMessageId }]) => {
        if (property.toLowerCase() === 'image' && typeof content === 'object') {
          const IMG = Object.entries(content).map(
            ([imageTag, imageTagValue]) => {
              if (imageTag.toLowerCase() === 'url') {
                return { property: 'og:image', content: imageTagValue };
              }

              return {
                property: `og:image:${imageTag}`,
                content: imageTagValue,
              };
            },
          );

          return previous.concat(...IMG);
        }

        if (isMessageId) {
          return previous.concat({
            property: `og:${property}`,
            content: formatMessage({ ...messages[content] }),
          });
        }

        return previous.concat({ property: `og:${property}`, content });
      }, []);
  }

  return [];
}

/**
 * @see {@link https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary}
 */
function constructTwitterMetaTags({ formatMessage }) {
  if (twitter) {
    return Object.entries(twitter)
      .filter(([, { content }]) => content)
      .map(([property, { content, isMessageId }]) => {
        if (isMessageId) {
          return {
            property: `twitter:${property}`,
            content: formatMessage({ ...messages[content] }),
          };
        }

        return { property: `twitter:${property}`, content };
      });
  }

  return [];
}

function constructBasicMetaTags({ formatMessage }) {
  const { content, isMessageId } = description;

  if (isMessageId) {
    return [
      {
        name: 'description',
        content: formatMessage({ ...messages[content] }),
      },
    ];
  }

  return [
    {
      name: 'description',
      content,
    },
  ];
}

function constructMetaTags({ formatMessage }) {
  const facebookTags = [];

  if (facebookAppID) {
    facebookTags.push({
      property: 'fb:app_id',
      content: facebookAppID,
    });
  }

  return [].concat(
    constructBasicMetaTags({ formatMessage }),
    constructOpenGraphMetaTags({ formatMessage }),
    constructTwitterMetaTags({ formatMessage }),
    facebookTags,
  );
}

function BigHeadGear({ intl: { locale, formatMessage } }) {
  return (
    <Helmet
      htmlAttributes={{ lang: locale }}
      title={formatMessage({ ...messages.title })}
      meta={constructMetaTags({ formatMessage })}
    >
      <script>{`
        !function(e, t, a, n, g) {e[n] = e[n] || [], e[n].push({'gtm.start': (new Date).getTime(), event: 'gtm.js'});var m = t.getElementsByTagName(a)[0], r = t.createElement(a);r.async = !0, r.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-PLVWW9F', m.parentNode.insertBefore(r, m);}(window, document, 'script', 'dataLayer');
      `}</script>
      <noscript>{formatMessage({ ...messages.noScript })}</noscript>
    </Helmet>
  );
}

BigHeadGear.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(BigHeadGear);
