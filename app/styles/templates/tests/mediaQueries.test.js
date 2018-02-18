import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import styled from 'styled-components';

import mq from '../mediaQueries';

/* stylelint-disable */
describe('mediaQueries', () => {
  it('should have an "xs" breakpoint', () => {
    const Div = styled.div`${mq.xs`content: "test";`}`;
    const renderedComponent = shallow(<Div />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should have an "s" breakpoint', () => {
    const Div = styled.div`${mq.s`content: "test";`}`;
    const renderedComponent = shallow(<Div />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should have an "m" breakpoint', () => {
    const Div = styled.div`${mq.m`content: "test";`}`;
    const renderedComponent = shallow(<Div />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should have an "l" breakpoint', () => {
    const Div = styled.div`${mq.l`content: "test";`}`;
    const renderedComponent = shallow(<Div />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should have an "xl" breakpoint', () => {
    const Div = styled.div`${mq.s`content: "test";`}`;
    const renderedComponent = shallow(<Div />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should have an "xxl" breakpoint', () => {
    const Div = styled.div`${mq.s`content: "test";`}`;
    const renderedComponent = shallow(<Div />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
