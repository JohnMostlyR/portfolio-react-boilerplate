import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import InfoList from '../index';

describe('<InfoList />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<InfoList />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
