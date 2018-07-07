import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import IconExternalLink from '../index';

describe('<IconExternalLink />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(<IconExternalLink />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt props', () => {
    const renderedComponent = shallow(
      <IconExternalLink height="99px" width="99px" color="green" />,
    );
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
