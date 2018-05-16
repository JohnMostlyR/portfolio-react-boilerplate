import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ExternalLink, { VALID_ICONS } from '../ExternalLink';

describe('<ExternalLink>', () => {
  it('should render and match the snapshot', () => {
    const wrapper = shallow(<ExternalLink />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should adopt the "href" property', () => {
    const EXTERNAL_LINK = 'https://some-site.com';
    const wrapper = shallow(<ExternalLink href={EXTERNAL_LINK} />);
    expect(wrapper.prop('href')).toBe(EXTERNAL_LINK);
  });

  it('should adopt the "description" property', () => {
    const DESCRIPTION = 'Follow me';
    const wrapper = shallow(<ExternalLink description={DESCRIPTION} />);
    expect(wrapper.find('span[hidden]').childAt(0).text()).toBe(DESCRIPTION);
  });

  it('should adopt the "color" property', () => {
    const COLOR = '#bada55';
    const wrapper = shallow(<ExternalLink color={COLOR} />);
    expect(wrapper.prop('color')).toBe(COLOR);
  });

  describe('with a given "faIcon" property', () => {
    VALID_ICONS.forEach((icon) => {
      it(`should render with a "${icon}" icon`, () => {
        const wrapper = shallow(<ExternalLink faIcon={icon} />);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
    });
  });
});
