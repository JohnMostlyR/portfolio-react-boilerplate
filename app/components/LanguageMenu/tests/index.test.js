import React from 'react';
import { mount } from 'enzyme';
import { IntlProvider, defineMessages } from 'react-intl';

import LanguageMenu from '../index';
import Menu from '../Menu';

import { mountWithIntl } from '../../../helpers/intl-enzyme-test-helper';

describe('<LanguageMenu />', () => {
  const defaultEnMessage = 'someContent';
  const defaultNlMessage = 'someOtherContent';
  const messages = defineMessages({
    en: {
      id: 'portfolio.components.LanguageMenu.en',
      defaultMessage: defaultEnMessage,
    },
    nl: {
      id: 'portfolio.components.LanguageMenu.nl',
      defaultMessage: defaultNlMessage,
    },
  });
  const changeLanguageHandler = jest.fn();
  const toggleMenuHandler = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render with only required arguments', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <LanguageMenu
          messages={messages}
          changeLanguageHandler={changeLanguageHandler}
          toggleMenuHandler={toggleMenuHandler}
        />
      </IntlProvider>,
    );

    expect(
      renderedComponent.contains(
        <LanguageMenu
          messages={messages}
          changeLanguageHandler={changeLanguageHandler}
          toggleMenuHandler={toggleMenuHandler}
        />,
      ),
    ).toBe(true);
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should have one, default, language selected', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <LanguageMenu
          locales={['en', 'nl']}
          messages={messages}
          currentLocale="en"
          changeLanguageHandler={changeLanguageHandler}
          toggleMenuHandler={toggleMenuHandler}
        />
      </IntlProvider>,
    );

    expect(
      renderedComponent.contains(
        <LanguageMenu
          locales={['en', 'nl']}
          messages={messages}
          currentLocale="en"
          changeLanguageHandler={changeLanguageHandler}
          toggleMenuHandler={toggleMenuHandler}
        />,
      ),
    ).toBe(true);
    expect(renderedComponent).toMatchSnapshot();
  });

  describe('expanded state', () => {
    const PREVENT_DEFAULT = jest.fn();
    const handleExpandedState = jest.spyOn(
      LanguageMenu.prototype,
      'handleExpandedState',
    );
    const moveFocus = jest.spyOn(LanguageMenu.prototype, 'moveFocus');
    let getFocusedMenuItem = jest.spyOn(
      LanguageMenu.prototype,
      'getFocusedMenuItem',
    );

    describe('without focus on any menu item', () => {
      const renderedComponent = mountWithIntl(
        <LanguageMenu
          currentLocale="en"
          isExpanded
          locales={['en', 'nl']}
          messages={messages}
          changeLanguageHandler={changeLanguageHandler}
          toggleMenuHandler={toggleMenuHandler}
        />,
      );

      it('should close/collapse the menu and set focus back to the open/close button', () => {
        const foundMenu = renderedComponent.find(Menu);
        foundMenu.simulate('keyDown', {
          preventDefault: PREVENT_DEFAULT,
          keyCode: 27,
        });
        expect(PREVENT_DEFAULT).toHaveBeenCalledTimes(1);
        expect(getFocusedMenuItem).toHaveBeenCalledTimes(1);
        expect(toggleMenuHandler).toHaveBeenCalledTimes(1);
      });
    });

    describe('with focus on one menu item', () => {
      getFocusedMenuItem = jest
        .spyOn(LanguageMenu.prototype, 'getFocusedMenuItem')
        .mockImplementation(menuItems => menuItems[0]);

      const renderedComponent = mountWithIntl(
        <LanguageMenu
          currentLocale="en"
          isExpanded={false}
          locales={['en', 'nl']}
          messages={messages}
          changeLanguageHandler={changeLanguageHandler}
          toggleMenuHandler={toggleMenuHandler}
        />,
      );

      beforeEach(() => {
        renderedComponent.setProps({ isExpanded: true });
        jest.clearAllMocks();
      });

      afterEach(() => {
        renderedComponent.setProps({ isExpanded: false });
      });

      it('should close/collapse the menu when the ESC key is pressed', () => {
        const foundMenu = renderedComponent.find(Menu);
        foundMenu.simulate('keyDown', {
          preventDefault: PREVENT_DEFAULT,
          keyCode: 27,
        });
        expect(toggleMenuHandler).toHaveBeenCalledTimes(1);
      });

      it('should act when the ARROW-UP key is pressed', () => {
        const foundMenu = renderedComponent.find(Menu);
        const currentTarget = foundMenu.html();
        const keyCode = 38;
        foundMenu.simulate('keyDown', {
          currentTarget,
          preventDefault: PREVENT_DEFAULT,
          keyCode,
        });
        expect(handleExpandedState).toHaveBeenCalledTimes(1);
        expect(moveFocus).toHaveBeenCalledTimes(1);
      });

      it('should act when the ARROW-DOWN key is pressed', () => {
        const foundMenu = renderedComponent.find(Menu);
        const currentTarget = foundMenu.html();
        const keyCode = 40;
        foundMenu.simulate('keyDown', {
          currentTarget,
          preventDefault: PREVENT_DEFAULT,
          keyCode,
        });
        expect(handleExpandedState).toHaveBeenCalledTimes(1);
        expect(moveFocus).toHaveBeenCalledTimes(1);
      });
    });
  });
});
