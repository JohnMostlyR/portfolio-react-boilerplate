import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Link from '../Link';

describe('<Link />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<Link to="/" />); // eslint-disable-line jsx-a11y/anchor-is-valid
    expect(renderedComponent).toMatchSnapshot();
  });
});
