import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import FormInfoItemsList from '../FormInfoItemsList';

describe('<FormInfoItemsList />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<FormInfoItemsList />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
