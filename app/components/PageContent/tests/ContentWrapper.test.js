import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import ContentWrapper from '../ContentWrapper';

describe('<ContentWrapper />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<ContentWrapper />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
