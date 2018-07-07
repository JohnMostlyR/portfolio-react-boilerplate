import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import Link from '../Link';

describe('<Link />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<Link to="/" />); // eslint-disable-line jsx-a11y/anchor-is-valid
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "color" property', () => {
    const renderedComponent = shallow(<Link to="/" color="#bada55" />); // eslint-disable-line jsx-a11y/anchor-is-valid
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
