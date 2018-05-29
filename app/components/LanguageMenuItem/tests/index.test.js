import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import LanguageMenuItem from '../index';

describe('<LanguageMenuItem />', () => {
  const onClickHandler = jest.fn();

  it('should render and match the snapshot', () => {
    const renderedComponent = shallow(
      <LanguageMenuItem value={'nl'} onClickHandler={onClickHandler} />
    );
    expect(toJson(renderedComponent)).toMatchSnapshot();
  });

  it('should adopt the "onClickHandler" property', () => {
    const preventDefault = jest.fn();
    const renderedComponent = shallow(
      <LanguageMenuItem value={'en'} onClickHandler={onClickHandler} />
    );

    renderedComponent.simulate('Click', { preventDefault });
    expect(preventDefault).toHaveBeenCalledTimes(1);
    expect(onClickHandler).toHaveBeenCalledTimes(1);
    expect(onClickHandler).toHaveBeenCalledWith('en');

    jest.clearAllMocks();

    renderedComponent.simulate('KeyDown', { preventDefault, keyCode: 13 });
    expect(preventDefault).toHaveBeenCalledTimes(1);
    expect(onClickHandler).toHaveBeenCalledTimes(1);
    expect(onClickHandler).toHaveBeenCalledWith('en');
  });

  it('should adopt the "isSelected" property', () => {
    const PROPERTY_VALUE = true;
    const renderedComponent = shallow(
      <LanguageMenuItem
        value={'nl'}
        onClickHandler={onClickHandler}
        isSelected={PROPERTY_VALUE}
      />
    );

    expect(toJson(renderedComponent)).toMatchSnapshot();
  });
});
