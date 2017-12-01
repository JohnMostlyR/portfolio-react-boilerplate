import React from 'react';
import { shallow, mount } from 'enzyme';
import { IntlProvider, defineMessages } from 'react-intl';

import ToggleOption from '../index';

describe('<ToggleOption />', () => {
  it('should render and match the snapshot', () => {
    const defaultEnMessage = 'someContent';
    const message = defineMessages({
      enMessage: {
        id: 'boilerplate.containers.LocaleToggle.en',
        defaultMessage: defaultEnMessage,
      },
    });
    const onChange = jest.fn();
    const iconImg = './image.png';
    const renderedComponent = shallow(
      <IntlProvider locale="en">
        <ToggleOption
          value="en"
          message={message.enMessage}
          onChange={onChange}
          iconImg={iconImg}
        />
      </IntlProvider>
    );
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should render default language messages', () => {
    const defaultEnMessage = 'someContent';
    const message = defineMessages({
      enMessage: {
        id: 'boilerplate.containers.LocaleToggle.en',
        defaultMessage: defaultEnMessage,
      },
    });
    const renderedComponent = shallow(
      <IntlProvider locale="en">
        <ToggleOption value="en" message={message.enMessage} />
      </IntlProvider>
    );
    expect(renderedComponent.contains(<ToggleOption value="en" message={message.enMessage} />)).toBe(true);
  });

  it('should display `value`(two letter language code) when `message` is absent', () => {
    const renderedComponent = mount(
      <IntlProvider locale="nl">
        <ToggleOption value="nl" />
      </IntlProvider>
    );
    expect(renderedComponent.text()).toBe('nl');
  });
});
