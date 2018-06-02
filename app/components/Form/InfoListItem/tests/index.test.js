import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import InfoListItem from '../index';

describe('<InfoListItem />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<InfoListItem />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
