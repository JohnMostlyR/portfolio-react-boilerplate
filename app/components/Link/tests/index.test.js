import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import Link from '../index';

describe('<Link />', () => {
  it('Should render and match the snapshot', () => {
    const renderedComponent = shallow(<Link to="/" />); // eslint-disable-line
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  describe('The "odd" property', () => {
    it('Should adopt "true" as value', () => {
      const renderedComponent = shallow(<Link to="/" odd="true" />); // eslint-disable-line
      expect(toJson(renderedComponent)).toMatchSnapshot();
    });

    it('Should adopt "false" as value', () => {
      const renderedComponent = shallow(<Link to="/" odd="false" />); // eslint-disable-line
      expect(toJson(renderedComponent)).toMatchSnapshot();
    });
  });
});
