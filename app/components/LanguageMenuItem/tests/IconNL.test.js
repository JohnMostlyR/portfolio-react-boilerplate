import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import IconNL from '../IconNL';

describe('<IconNL />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<IconNL />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "isSelected" property', () => {
    const renderedComponent = shallow(<IconNL isSelected />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
