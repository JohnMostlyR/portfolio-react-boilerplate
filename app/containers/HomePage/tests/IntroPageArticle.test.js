import React from 'react';
import { shallow } from 'enzyme';

import IntroPageArticle from '../IntroPageArticle';

describe('<IntroPageArticle />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<IntroPageArticle />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
