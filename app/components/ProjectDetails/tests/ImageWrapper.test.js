import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import ImageWrapper, { renderMediaBreakpoints } from '../ImageWrapper';

const breakpoints = [
  {
    media: { breakpoint: 'max-width', size: 424 },
    srcSet: '/source1.png',
  },
  {
    media: { breakpoint: 'max-width', size: 767 },
    srcSet: '/source2.jpeg',
  },
];
const imageDimensions = [
  { height: 90, width: 160 },
  { height: 900, width: 1600 },
];

describe('<ImageWrapper />', () => {
  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(
      <ImageWrapper
        breakpoints={breakpoints}
        imageDimensions={imageDimensions}
      />,
    );
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should render without any props given', () => {
    const renderedComponent = shallow(<ImageWrapper />);
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should throw an error when the lengths of the breakpoints and imageDimensions do not match', () => {
    const _breakpoints = breakpoints.slice(-1); // eslint-disable-line no-underscore-dangle
    expect(() =>
      renderMediaBreakpoints({ _breakpoints, imageDimensions }),
    ).toThrow();
  });
});
