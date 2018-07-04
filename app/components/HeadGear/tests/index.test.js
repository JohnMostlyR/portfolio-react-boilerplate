import React from 'react';

import HeadGear from '../index';

import { shallowWithIntl } from '../../../helpers/intl-enzyme-test-helper';

const messages = {
  title: {
    id: 'test.title',
    defaultMessage: 'Title : {pageTitle}',
  },
  pageTitle: {
    id: 'test.pageTitle',
    defaultMessage: 'Page',
  },
  metaDescription: {
    id: 'test.meta.description',
    defaultMessage: 'Some description',
  },
};

describe('<HeadGear />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallowWithIntl(
      <HeadGear messages={messages} path="/test" />,
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
