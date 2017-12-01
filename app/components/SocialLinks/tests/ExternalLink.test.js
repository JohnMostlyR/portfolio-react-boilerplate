import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import FontAwesome from 'react-fontawesome';

import ExternalLink from '../ExternalLink';
import StyledA from '../StyledA';
import VisuallyHiddenSpan from '../VisuallyHiddenSpan';

describe('ExternalLink', () => {
  const DESCRIPTION = 'Follow me';
  const EXTERNAL_LINK = 'https://some-site.com';
  const ICON = 'check-square-o';

  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <ExternalLink
        faIcon={ICON}
        description={DESCRIPTION}
        href={EXTERNAL_LINK}
      />,
    );
  });

  it('Should render and match the snapshot', () => {
    const tree = renderer.create(<ExternalLink />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should have a `styled.a` component', () => {
    expect(
      wrapper.find(StyledA),
    ).toHaveLength(1);
  });

  it('Should have a `FontAwesome` component', () => {
    expect(
      wrapper.find(FontAwesome),
    ).toHaveLength(1);
  });

  it('Should have a `VisuallyHiddenSpan` component', () => {
    expect(
      wrapper.find(VisuallyHiddenSpan),
    ).toHaveLength(1);
  });

  describe('Anker element', () => {
    beforeEach(() => {
      wrapper = mount(
        <ExternalLink
          faIcon={ICON}
          description={DESCRIPTION}
          href={EXTERNAL_LINK}
        />,
      );
    });

    it('Should have an `href` property', () => {
      const A = wrapper.find(`a[href="${EXTERNAL_LINK}"]`);
      expect(A).toHaveLength(1);
    });

    it('Should have a `target` property set to `_blank`', () => {
      const A = wrapper.find(`a[href="${EXTERNAL_LINK}"]`);
      expect(A.props().target).toBe('_blank');
    });

    it('Should have a `rel` property set to `noopener noreferrer`', () => {
      const A = wrapper.find(`a[href="${EXTERNAL_LINK}"]`);
      expect(A.props().rel).toBe('noopener noreferrer');
    });
  });

  describe('FontAwesome component', () => {
    it('Should get the `name` property', () => {
      const FONT_AWESOME = wrapper.find(FontAwesome);
      expect(FONT_AWESOME.props().name).toBe(ICON);
    });
  });

  describe('VisuallyHiddenSpan component', () => {
    it('Should get the correct description', () => {
      const SPAN = wrapper.find(VisuallyHiddenSpan);
      expect(SPAN.text()).toBe(DESCRIPTION);
    });
  });
});
