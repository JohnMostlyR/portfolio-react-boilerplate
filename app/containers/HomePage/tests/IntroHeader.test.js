import React from 'react';
import { shallow } from 'enzyme';

import IntroHeader from '../IntroHeader';

describe('<IntroHeader />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<IntroHeader />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
