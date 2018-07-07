import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import SVGIcon from '../index';

describe('<SVGIcon>', () => {
  it('Should render and match the snapshot', () => {
    const wrapper = shallow(
      <SVGIcon>
        <text x="0" y="15">
          TEST
        </text>
      </SVGIcon>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Should adopt the "viewBox" property', () => {
    const VIEW_BOX = '0 0 10 10';
    const wrapper = shallow(
      <SVGIcon viewBox={VIEW_BOX}>
        <text x="0" y="15">
          TEST
        </text>
      </SVGIcon>,
    );

    expect(wrapper.prop('viewBox')).toBe(VIEW_BOX);
  });

  it('Should adopt the "focusable" property', () => {
    const FOCUSABLE = false;
    const wrapper = shallow(
      <SVGIcon focusable={FOCUSABLE}>
        <text x="0" y="15">
          TEST
        </text>
      </SVGIcon>,
    );

    expect(wrapper.prop('focusable')).toBe(FOCUSABLE);
  });

  it('Should adopt the "color" property', () => {
    const VALUE = '#bada55';
    const wrapper = shallow(
      <SVGIcon color={VALUE}>
        <text x="0" y="15">
          TEST
        </text>
      </SVGIcon>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Should adopt the "height" property', () => {
    const VALUE = '9999px';
    const wrapper = shallow(
      <SVGIcon height={VALUE}>
        <text x="0" y="15">
          TEST
        </text>
      </SVGIcon>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Should adopt the "width" property', () => {
    const VALUE = '9999px';
    const wrapper = shallow(
      <SVGIcon width={VALUE}>
        <text x="0" y="15">
          TEST
        </text>
      </SVGIcon>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Should adopt the "animate" property', () => {
    const VALUE = 'rotate';
    const wrapper = shallow(
      <SVGIcon animate={VALUE}>
        <text x="0" y="15">
          TEST
        </text>
      </SVGIcon>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
