/**
*
* LanguageMenu
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import Wrapper from './Wrapper';
import Menu from './Menu';

import Button from './Button';
import LanguageMenuItem from '../LanguageMenuItem';

class LanguageMenu extends React.PureComponent {
  constructor(props) {
    super(props);

    this.menu = React.createRef();
    this.button = React.createRef();

    this.getMenuItems = this.getMenuItems.bind(this);
    this.getFocusedMenuItem = this.getFocusedMenuItem.bind(this);
    this.handleExpandedState = this.handleExpandedState.bind(this);
    this.handleKeyDownOnMenu = this.handleKeyDownOnMenu.bind(this);
  }

  componentDidUpdate() {
    if (this.props.isExpanded) {
      const firstAvailableOption = this.getMenuItems()
        .filter((child) => (
          !child.disabled
        ))
        .slice(0, 1);

      if (Array.isArray(firstAvailableOption) && firstAvailableOption.length) {
        firstAvailableOption[0].focus();
        firstAvailableOption[0].setAttribute('data-hasfocus', true);
      }
    }
  }

  getMenuItems() {
    const { children } = this.menu;

    if (typeof children === 'undefined') {
      return [];
    }

    return Array.from(children);
  }

  getFocusedMenuItem() {
    return this.getMenuItems().find((menuItem) => (
      menuItem.dataset.hasfocus === 'true'
    ));
  }

  handleExpandedState(keyCode) {
    const { toggleMenuHandler } = this.props;
    const FOCUSED_MENU_ITEM = this.getFocusedMenuItem();

    if (!FOCUSED_MENU_ITEM) {
      this.button.focus();
      toggleMenuHandler();
      return;
    }

    // ESC key
    if (keyCode === 27) {
      this.button.focus();
      toggleMenuHandler();
    }

    // Arrow Up key
    if (keyCode === 38) {
      if (FOCUSED_MENU_ITEM.previousElementSibling) {
        this.moveFocus(FOCUSED_MENU_ITEM, FOCUSED_MENU_ITEM.previousElementSibling);
      } else {
        this.moveFocus(FOCUSED_MENU_ITEM, this.menu.lastChild);
      }
    }

    // Arrow Down key
    if (keyCode === 40) {
      if (FOCUSED_MENU_ITEM.nextElementSibling) {
        this.moveFocus(FOCUSED_MENU_ITEM, FOCUSED_MENU_ITEM.nextElementSibling);
      } else {
        this.moveFocus(FOCUSED_MENU_ITEM, this.menu.firstChild);
      }
    }
  }

  handleKeyDownOnMenu(evt) {
    const { isExpanded } = this.props;
    const { keyCode } = evt;

    if (isExpanded) {
      evt.preventDefault();
      this.handleExpandedState(keyCode);
    }
  }

  render() {
    const {
      currentLocale,
      changeLanguageHandler,
      locales,
      isExpanded,
      toggleMenuHandler,
    } = this.props;

    if (locales.length === 0) {
      return null;
    }

    const content = locales.map((locale) => (
      <LanguageMenuItem
        key={locale}
        value={locale}
        isSelected={locale === currentLocale}
        onClickHandler={changeLanguageHandler}
      />
    ));

    return (
      <Wrapper
        role="region"
        aria-labelledby="LanguageSelector-title"
      >
        <FormattedMessage {...messages.title}>
          {
            (message) => (
              <span
                id="LanguageSelector-title"
                hidden
                aria-hidden="false"
              >{message}</span>
            )
          }
        </FormattedMessage>
        <FormattedMessage {...messages.buttonLabel}>
          {
            (message) => (
              <Button
                label={message}
                isExpanded={isExpanded}
                toggleMenuHandler={toggleMenuHandler}
                tabindex="0"
                buttonRef={(el) => { this.button = el; }}
              />
            )
          }
        </FormattedMessage>
        <Menu
          hidden={!isExpanded}
          isExpanded={isExpanded}
          innerRef={(el) => { this.menu = el; }}
          onKeyDown={this.handleKeyDownOnMenu}
        >
          {content}
        </Menu>
      </Wrapper>
    );
  }
}

LanguageMenu.propTypes = {
  changeLanguageHandler: PropTypes.func,
  locales: PropTypes.array,
  currentLocale: PropTypes.string,
  isExpanded: PropTypes.bool,
  toggleMenuHandler: PropTypes.func,
};

LanguageMenu.defaultProps = {
  changeLanguageHandler: () => {
    console.log('Implement a "changeLanguageHandler"');
  },
  locales: [],
  toggleMenuHandler: () => {
    console.log('Implement a "toggleMenuHandler"');
  },
};

LanguageMenu.prototype.moveFocus = (fromElement, toElement) => {
  if (toElement.disabled) {
    return;
  }

  fromElement.setAttribute('data-hasfocus', false);
  fromElement.blur();

  toElement.focus();
  toElement.setAttribute('data-hasfocus', true);
};

export default LanguageMenu;
