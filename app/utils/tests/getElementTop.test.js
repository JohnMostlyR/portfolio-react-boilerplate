import React from 'react';
import { render } from 'enzyme';
import getElementTop from '../getElementTop';

describe('getElementTop', () => {
  const renderedComponent = render(<div><h1>Test</h1></div>);
  const h1 = renderedComponent.find(<h1 />).first();

  it('should get the absolute position from the scrolling element', () => {
    const result = getElementTop(h1);
    expect(result).toBe(0);
  });
});
