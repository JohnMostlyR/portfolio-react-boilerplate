import React from 'react';
import ReactTooltip from 'react-tooltip';
import { mount } from 'enzyme';
import { IntlProvider } from 'react-intl';

import SocialLinks from '../index';
import StyledUL from '../StyledUL';
import StyledLI from '../StyledLI';

describe('SocialLinks', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <IntlProvider locale={'en'}>
        <SocialLinks />
      </IntlProvider>,
    );
  });

  it('should have an `StyledUL` component', () => {
    expect(wrapper.find(StyledUL)).toHaveLength(1);
  });

  it('should have four `StyledLI` components', () => {
    expect(wrapper.find(StyledLI)).toHaveLength(4);
  });

  it('each `StyledLI` component should have a data-tip property', () => {
    wrapper.find(StyledLI).forEach((node) => {
      expect(node.prop('data-tip')).toBeTruthy();
    });
  });

  it('should have a `ReactTooltip` component', () => {
    expect(wrapper.find(ReactTooltip)).toHaveLength(1);
  });
});
