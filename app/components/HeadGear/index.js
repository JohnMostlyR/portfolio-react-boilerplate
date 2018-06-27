/**
*
* HeadGear
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { intlShape, injectIntl } from 'react-intl';

import { config } from '../../config';
import { buildCanonicalURL } from '../../utils/urlUtils';

const { seo: { baseURL, openGraph, twitter } } = config;

function constructLinks({ path }) {
  const basic = [
    {
      rel: 'canonical',
      href: buildCanonicalURL({ url: baseURL, path }),
    },
    {
      rel: 'alternate',
      href: buildCanonicalURL({ url: baseURL, path }),
      hreflang: 'x-default',
    },
  ];

  return basic;
/*
  const alternateLanguages = locales
    .map((locale) => (
      {
        rel: 'alternate',
        href: `${buildCanonicalURL({ url: baseURL, path })}?loc=${locale}`,
        hreflang: locale,
      }
    ));

  return basic.concat(alternateLanguages);
*/
}

/**
 * @see {@link http://ogp.me/}
 * @see {@link https://developers.facebook.com/docs/sharing/webmasters}
 */
function constructOpenGraphMetaTags({ formatMessage, messages, path }) {
  const { metaDescription, pageTitle = '', title } = messages;
  const collected = [];

  if (openGraph) {
    if (metaDescription) {
      collected.push(
        {
          property: 'og:description',
          content: formatMessage({ ...metaDescription }),
        },
      );
    }

    if (title) {
      collected.push(
        {
          property: 'og:title',
          content: formatMessage(
            { ...title },
            { pageTitle: formatMessage({ ...pageTitle }) },
          ),
        },
      );
    }

    collected.push(
      {
        property: 'og.url',
        content: buildCanonicalURL({ url: baseURL, path }),
      },
    );
  }

  return collected;
}

/**
 * @see {@link https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary}
 */
function constructTwitterMetaTags({ formatMessage, messages }) {
  const { metaDescription, pageTitle = '', title } = messages;
  const collected = [];

  if (twitter) {
    if (metaDescription) {
      collected.push(
        {
          property: 'twitter:description',
          content: formatMessage({ ...metaDescription }),
        },
      );
    }

    if (title) {
      collected.push(
        {
          property: 'twitter:title',
          content: formatMessage(
            { ...title },
            { pageTitle: formatMessage({ ...pageTitle }) },
          ),
        },
      );
    }
  }

  return collected;
}

function constructBasicMetaTags({ formatMessage, messages }) {
  const { metaDescription } = messages;

  if (metaDescription) {
    return [
      {
        name: 'description',
        content: formatMessage({ ...metaDescription }),
      }];
  }

  return [];
}

function constructMetaTags({ formatMessage, messages, path }) {
  return [].concat(
    constructBasicMetaTags({ formatMessage, messages }),
    constructOpenGraphMetaTags({ formatMessage, messages, path }),
    constructTwitterMetaTags({ formatMessage, messages }),
  );
}

function HeadGear(
  {
    intl: { formatMessage },
    messages,
    path,
  }) {
  const { pageTitle = '', title } = messages;
  return (
    <Helmet
      title={formatMessage(
        { ...title },
        { pageTitle: formatMessage({ ...pageTitle }) },
      )}
      link={constructLinks({ path })}
      meta={constructMetaTags({ formatMessage, messages, path })}
    />
  );
}

HeadGear.propTypes = {
  intl: intlShape.isRequired,
  messages: PropTypes.shape({
    metaDescription: PropTypes.shape({
      id: PropTypes.string,
      defaultMessage: PropTypes.string,
    }),
    pageTitle: PropTypes.shape({
      id: PropTypes.string,
      defaultMessage: PropTypes.string,
    }),
    title: PropTypes.shape({
      id: PropTypes.string,
      defaultMessage: PropTypes.string,
    }),
  }).isRequired,
  path: PropTypes.string.isRequired,
};

export default injectIntl(HeadGear);
