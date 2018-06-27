import React from 'react';
import { shallow } from 'enzyme';

import ContentLoadingIndicator from '../index';

describe('<ContentLoadingIndicator />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<ContentLoadingIndicator />);
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should adopt the "show" prop', () => {
    const renderedComponent = shallow(<ContentLoadingIndicator show />);
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should adopt the "showError" prop', () => {
    const renderedComponent = shallow(<ContentLoadingIndicator showError />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
