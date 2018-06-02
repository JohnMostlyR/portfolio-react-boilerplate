import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import StyledTextArea from '../StyledTextArea';

describe('<StyledTextArea />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<StyledTextArea />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "myHeight" property', () => {
    const VALUE = 10;
    const renderedComponent = shallow(<StyledTextArea myHeight={VALUE} />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
