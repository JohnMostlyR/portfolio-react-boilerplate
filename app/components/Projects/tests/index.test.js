import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import Projects from '../index';

import { parsedContentfulData } from '../../../containers/ProjectsPage/tests/parsedContentfulData';

describe('<Projects />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(
      <Projects projects={parsedContentfulData} />,
    );
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
