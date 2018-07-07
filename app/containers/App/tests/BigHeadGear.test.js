import React from 'react';

import BigHeadGear from '../BigHeadGear';

import { shallowWithIntl } from '../../../helpers/intl-enzyme-test-helper';

describe('<BigHeadGear />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallowWithIntl(<BigHeadGear />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
