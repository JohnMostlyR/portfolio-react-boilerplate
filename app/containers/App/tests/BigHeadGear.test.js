import React from 'react';
import toJson from 'enzyme-to-json';

import BigHeadGear from '../BigHeadGear';

import { mountWithIntl } from '../../../helpers/intl-enzyme-test-helper';

describe('<BigHeadGear />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = mountWithIntl(<BigHeadGear />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
