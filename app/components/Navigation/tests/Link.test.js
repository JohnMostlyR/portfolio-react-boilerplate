import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import Link from '../Link';

describe('<Link />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<Link to={'/'} />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
