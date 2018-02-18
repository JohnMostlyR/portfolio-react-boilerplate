import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import Bubble from '../Bubble';

describe('<Bubble />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<Bubble />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "showArrowBreakpoint" prop', () => {
    const renderedComponent = shallow(<Bubble showArrowBreakpoint={'10rem'} />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "backgroundColor" prop', () => {
    const renderedComponent = shallow(<Bubble backgroundColor={'white'} />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "isLeftHanded" prop', () => {
    const renderedComponent = shallow(<Bubble isLeftHanded={false} />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "padding" prop', () => {
    const renderedComponent = shallow(<Bubble padding={'0 1em'} />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
