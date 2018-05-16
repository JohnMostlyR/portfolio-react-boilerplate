import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import Navigation from '../index';

describe('<Navigation />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<Navigation bigScreenBreakpoint={1000} />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "isAtScreenTop" prop', () => {
    let isAtScreenTop = false;
    let renderedComponent = shallow(
      <Navigation
        bigScreenBreakpoint={1000}
        isAtScreenTop={isAtScreenTop}
      />
    );

    expect(renderedComponent.prop('isAtScreenTop')).toBe(isAtScreenTop);

    isAtScreenTop = true;
    renderedComponent = shallow(
      <Navigation
        bigScreenBreakpoint={1000}
        isAtScreenTop={isAtScreenTop}
      />
    );

    expect(renderedComponent.prop('isAtScreenTop')).toBe(isAtScreenTop);
  });
});
