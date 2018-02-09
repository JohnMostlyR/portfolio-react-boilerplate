import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import LocaleToggleWidget from '../LocaleToggleWidget';

describe('<LocaleToggleWidget />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<LocaleToggleWidget />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
