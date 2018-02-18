import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import Arrow from '../Arrow';

describe('<Arrow />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<Arrow />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "height" prop', () => {
    const renderedComponent = shallow(<Arrow height={'1em'} />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "isLeftHanded" prop', () => {
    const renderedComponent = shallow(<Arrow isLeftHanded={false} />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "showBreakpoint" prop', () => {
    const renderedComponent = shallow(<Arrow showBreakpoint={'100px'} />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
