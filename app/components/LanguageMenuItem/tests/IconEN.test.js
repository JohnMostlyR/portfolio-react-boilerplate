import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import IconEN from '../IconEN';

describe('<IconEN />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<IconEN />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "isSelected" property', () => {
    const renderedComponent = shallow(<IconEN isSelected />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
