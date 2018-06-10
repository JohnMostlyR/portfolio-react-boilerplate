import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import BackLink from '../BackLink';

describe('<BackLink />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<BackLink />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  describe('the "position" property', () => {
    it('should accept "top" as value', () => {
      const renderedComponent = shallow(<BackLink position="top" />);
      expect(toJson(renderedComponent)).toMatchSnapshot();
    });

    it('should accept "bottom" as value', () => {
      const renderedComponent = shallow(<BackLink position="bottom" />);
      expect(toJson(renderedComponent)).toMatchSnapshot();
    });
  });
});
