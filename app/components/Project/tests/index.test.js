import React from 'react';
import { shallow, mount } from 'enzyme';

import Project from '../index';

describe('Project', () => {
  const LINKS = [
    {
      name: 'github',
      url: 'https://github.com/',
      faIcon: 'github',
    },
    {
      name: 'codepen',
      url: 'https://codepen.io/',
      faIcon: 'codepen',
    },
  ];
  const THUMB = '/test.png';

  it('should render and match the snapshot', () => {
    const wrapper = shallow(<Project links={LINKS} thumbnailUrl={THUMB} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should adopt the "title" prop', () => {
    const PROP = 'Hi Title';
    const wrapper = mount(
      <Project
        links={LINKS}
        thumbnailUrl={THUMB}
        title={PROP}
      />
    );

    expect(wrapper.prop('title')).toBe(PROP);
  });

  it('should adopt the "detailsTitle" prop', () => {
    const PROP = 'Hi Details Title';
    const wrapper = mount(
      <Project
        links={LINKS}
        thumbnailUrl={THUMB}
        detailsTitle={PROP}
      />
    );

    expect(wrapper.prop('detailsTitle')).toBe(PROP);
  });

  it('should adopt the "detailsBodyText" prop', () => {
    const PROP = 'Hi body text';
    const wrapper = mount(
      <Project
        links={LINKS}
        thumbnailUrl={THUMB}
        detailsBodyText={PROP}
      />
    );

    expect(wrapper.prop('detailsBodyText')).toBe(PROP);
  });

  it('should adopt the "isOdd" prop', () => {
    const PROP = false;
    const wrapper = mount(
      <Project
        links={LINKS}
        thumbnailUrl={THUMB}
        isOdd={PROP}
      />
    );

    expect(wrapper.prop('isOdd')).toBe(PROP);
  });

  it('should adopt the "hasFocus" prop', () => {
    const PROP = true;
    const wrapper = mount(
      <Project
        links={LINKS}
        thumbnailUrl={THUMB}
        hasFocus={PROP}
      />
    );

    expect(wrapper.prop('hasFocus')).toBe(PROP);
  });
});
