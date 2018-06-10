import React from 'react';
import { shallow } from 'enzyme';

import Project from '../index';

describe('Project', () => {
  const THUMB = '/test.png';

  it('should render and match the snapshot', () => {
    const wrapper = shallow(<Project thumbnailUrl={THUMB} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should adopt the "title" prop', () => {
    const PROP = 'Hi Title';
    const wrapper = shallow(
      <Project
        thumbnailUrl={THUMB}
        title={PROP}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should adopt the "detailsTitle" prop', () => {
    const PROP = 'Hi Details Title';
    const wrapper = shallow(
      <Project
        thumbnailUrl={THUMB}
        detailsTitle={PROP}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should adopt the "detailsBodyText" prop', () => {
    const PROP = 'Hi body text';
    const wrapper = shallow(
      <Project
        thumbnailUrl={THUMB}
        detailsBodyText={PROP}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should adopt the "isOdd" prop', () => {
    const PROP = false;
    const wrapper = shallow(
      <Project
        thumbnailUrl={THUMB}
        isOdd={PROP}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
