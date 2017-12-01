import React from 'react';
import { shallow } from 'enzyme';

import FormInfoItemsList from '../FormInfoItemsList';

describe('<FormInfoItemsList />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<FormInfoItemsList />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
