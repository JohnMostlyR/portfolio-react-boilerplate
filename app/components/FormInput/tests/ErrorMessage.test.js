import React from 'react';
import { shallow, mount } from 'enzyme';

import ErrorMessage from '../ErrorMessage';

describe('<ErrorMessage />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<ErrorMessage />);
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should adopt the "showError" prop', () => {
    let showError;
    let renderedComponent;

    showError = false;
    renderedComponent = mount(<ErrorMessage showError={showError} />);
    expect(renderedComponent.prop('showError')).toBe(showError);

    showError = true;
    renderedComponent = mount(<ErrorMessage showError={showError} />);
    expect(renderedComponent.prop('showError')).toBe(showError);
  });
});
