import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import StyledArticle from '../StyledArticle';

describe('<StyledArticle />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<StyledArticle />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
