import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import LabelContent from '../LabelContent';

describe('<LabelContent />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<LabelContent />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "hasFocus" prop', () => {
    const hasFocus = false;
    const renderedComponent = mount(<LabelContent hasFocus={hasFocus} />);
    expect(renderedComponent.prop('hasFocus')).toBe(hasFocus);
  });
});
