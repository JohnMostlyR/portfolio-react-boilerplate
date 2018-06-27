import React from 'react';
import toJson from 'enzyme-to-json';

import HeadGear from '../index';

import { mountWithIntl } from '../../../helpers/intl-enzyme-test-helper';

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
    const renderedComponent = mountWithIntl(<HeadGear messages={messages} path="/test" />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
