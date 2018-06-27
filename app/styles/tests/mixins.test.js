import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import styled from 'styled-components';

import { clearfix, visuallyHidden } from '../mixins';

/* stylelint-disable */
describe('mixins', () => {
  describe('clearfix', () => {
    const Div = styled.div`
      ${clearfix};
    `;
    it('should render and match the snapshot', () => {
      const renderedComponent = shallow(<Div />);
      expect(toJson(renderedComponent)).toMatchSnapshot();
    });
  });

  describe('visuallyHidden', () => {
    const Div = styled.div`
      ${visuallyHidden};
    `;
    it('should render and match the snapshot', () => {
      const renderedComponent = shallow(<Div />);
      expect(toJson(renderedComponent)).toMatchSnapshot();
    });
  });
});
