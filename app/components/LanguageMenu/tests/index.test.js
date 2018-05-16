import React from 'react';
import { shallow } from 'enzyme';
import { IntlProvider, defineMessages } from 'react-intl';

import LanguageMenu from '../index';

describe('<LanguageMenu />', () => {
  it('should contain default text', () => {
    const defaultEnMessage = 'someContent';
    const defaultNlMessage = 'someOtherContent';
    const messages = defineMessages({
      en: {
        id: 'boilerplate.containers.LocaleToggle.en',
        defaultMessage: defaultEnMessage,
      },
      nl: {
        id: 'boilerplate.containers.LocaleToggle.en',
        defaultMessage: defaultNlMessage,
      },
    });
    const renderedComponent = shallow(
      <IntlProvider locale="en">
        <LanguageMenu locales={['en', 'nl']} messages={messages} />
      </IntlProvider>
    );

    expect(renderedComponent.contains(
      <LanguageMenu locales={['en', 'nl']} messages={messages} />
    )).toBe(true);
    expect(renderedComponent).toMatchSnapshot();
  });
});
