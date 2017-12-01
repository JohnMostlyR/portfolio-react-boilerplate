import React from 'react';
import { shallow } from 'enzyme';

import FormInfoItemsListItem from '../index';

describe('<FormInfoItemsListItem />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<FormInfoItemsListItem />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
