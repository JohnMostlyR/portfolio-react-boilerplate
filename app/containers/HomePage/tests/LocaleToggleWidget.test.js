import React from 'react';
import { shallow } from 'enzyme';

import LocaleToggleWidget from '../LocaleToggleWidget';

describe('<LocaleToggleWidget />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<LocaleToggleWidget />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
