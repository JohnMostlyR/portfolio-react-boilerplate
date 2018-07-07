import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import Button from './Button';
import List from './List';
import ListItem from './ListItem';
import Link from './Link';
import Icon from './Icon';
import Label from './Label';
import messages from './messages';

const Nav = styled.nav.attrs({
  'aria-label': 'site',
})`
  display: flex;
  flex-flow: column nowrap;
  left: 100%;
  margin-left: -0.5rem;
  position: ${props => (props.isAtScreenTop ? 'fixed' : 'absolute')};
  top: ${props => (props.isAtScreenTop ? '0.5rem' : '4.5rem')};
  z-index: 999;
  transform: translateX(-100%);
  filter: drop-shadow(0 0 5px grey);

  @media (min-width: ${({ bigScreenBreakpoint }) => bigScreenBreakpoint}) {
    filter: none;
  }
`;

const ButtonBlock = styled.span`
  display: inline-block;
  text-align: right;
`;

class Navigation extends React.PureComponent {
  constructor(props) {
    super(props);

    this.list = React.createRef();
    this.button = React.createRef();

    this.getListItems = this.getListItems.bind(this);
    this.getLinksFromListItems = this.getLinksFromListItems.bind(this);
    this.getFocusedLink = this.getFocusedLink.bind(this);
    this.handleExpandedState = this.handleExpandedState.bind(this);
    this.handleKeyDownOnList = this.handleKeyDownOnList.bind(this);
  }

  componentDidUpdate() {
    if (this.props.isExpanded) {
      const firstAvailableOption = this.getLinksFromListItems(this.list)
        .filter(child => !(child.getAttribute('aria-current') === 'page'))
        .slice(0, 1);

      if (Array.isArray(firstAvailableOption) && firstAvailableOption.length) {
        firstAvailableOption[0].focus();
        firstAvailableOption[0].setAttribute('data-hasfocus', true);
      }
    }
  }

  getLinksFromListItems(list = {}) {
    const listItems = this.getListItems(list);

    const links = listItems.reduce((collected, item) => {
      if (item.firstChild && item.firstChild.tagName === 'A') {
        return collected.concat([], item.firstChild);
      }

      return collected;
    }, []);

    return links || [];
  }

  getListItems({ children }) {
    if (typeof children === 'undefined') {
      return [];
    }

    return Array.from(children);
  }

  getFocusedLink(list) {
    const links = this.getLinksFromListItems(list) || [];
    return links.find(link => {
      const { dataset = { hasfocus: false } } = link;
      return dataset.hasfocus === 'true';
    });
  }

  handleExpandedState({ list = {}, keyCode = -1 }) {
    const { toggleMenu } = this.props;

    // ESC key
    if (keyCode === 27) {
      this.button.focus();
      toggleMenu();
      return;
    }

    const FOCUSED_LINK = this.getFocusedLink(list);

    if (!FOCUSED_LINK) {
      this.button.focus();
      toggleMenu();
      return;
    }

    const { parentElement } = FOCUSED_LINK;

    // Arrow Up key
    if (keyCode === 38) {
      const { previousElementSibling } = parentElement;

      if (previousElementSibling) {
        this.moveFocus(FOCUSED_LINK, previousElementSibling.firstElementChild);
      } else {
        this.moveFocus(FOCUSED_LINK, this.list.lastChild.firstElementChild);
      }
    }

    // Arrow Down key
    if (keyCode === 40) {
      const { nextElementSibling } = parentElement;

      if (nextElementSibling) {
        this.moveFocus(FOCUSED_LINK, nextElementSibling.firstElementChild);
      } else {
        this.moveFocus(FOCUSED_LINK, this.list.firstChild.firstElementChild);
      }
    }
  }

  handleKeyDownOnList(evt) {
    const { currentTarget, keyCode } = evt;
    const { isExpanded } = this.props;

    if (isExpanded && [27, 38, 40].indexOf(keyCode) >= 0) {
      evt.preventDefault();
      this.handleExpandedState({ list: currentTarget, keyCode });
    }
  }

  render() {
    const {
      bigScreenBreakpoint,
      isAtScreenTop,
      isBigScreen,
      isExpanded,
      location,
      navigationRef,
      toggleMenu,
    } = this.props;

    return (
      <Nav
        bigScreenBreakpoint={bigScreenBreakpoint}
        isAtScreenTop={isAtScreenTop && !isExpanded}
        innerRef={navigationRef}
      >
        <h2 hidden aria-hidden="false">
          <FormattedMessage {...messages.header} />
        </h2>
        <ButtonBlock>
          <FormattedMessage {...messages.showMenuButton}>
            {message => (
              <Button
                bigScreenBreakpoint={bigScreenBreakpoint}
                buttonRef={el => {
                  this.button = el;
                }}
                isExpanded={isExpanded}
                label={message}
                toggleMenu={toggleMenu}
              />
            )}
          </FormattedMessage>
        </ButtonBlock>
        <List
          bigScreenBreakpoint={bigScreenBreakpoint}
          innerRef={el => {
            this.list = el;
          }}
          isExpanded={isExpanded}
          onKeyDown={this.handleKeyDownOnList}
        >
          <ListItem>
            <Link // eslint-disable-line jsx-a11y/anchor-is-valid
              to="/introduction"
              tabIndex={isBigScreen ? '0' : '-1'}
              location={location}
            >
              <Icon viewBox="0 0 576 512">
                <path d="M488 312.7V456c0 13.3-10.7 24-24 24H348c-6.6 0-12-5.4-12-12V356c0-6.6-5.4-12-12-12h-72c-6.6 0-12 5.4-12 12v112c0 6.6-5.4 12-12 12H112c-13.3 0-24-10.7-24-24V312.7c0-3.6 1.6-7 4.4-9.3l188-154.8c4.4-3.6 10.8-3.6 15.3 0l188 154.8c2.7 2.3 4.3 5.7 4.3 9.3zm83.6-60.9L488 182.9V44.4c0-6.6-5.4-12-12-12h-56c-6.6 0-12 5.4-12 12V117l-89.5-73.7c-17.7-14.6-43.3-14.6-61 0L4.4 251.8c-5.1 4.2-5.8 11.8-1.6 16.9l25.5 31c4.2 5.1 11.8 5.8 16.9 1.6l235.2-193.7c4.4-3.6 10.8-3.6 15.3 0l235.2 193.7c5.1 4.2 12.7 3.5 16.9-1.6l25.5-31c4.2-5.2 3.4-12.7-1.7-16.9z" />
              </Icon>
              <Label>
                <FormattedMessage {...messages.homePageLink} />
              </Label>
            </Link>
          </ListItem>
          <ListItem>
            <Link // eslint-disable-line jsx-a11y/anchor-is-valid
              to="/about"
              tabIndex={isBigScreen ? '0' : '-1'}
              location={location}
            >
              <Icon viewBox="0 0 512 512">
                <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-288 80c38.66 0 70 31.34 70 70s-31.34 70-70 70-70-31.34-70-70 31.34-70 70-70zm112 203c0 11.598-9.402 21-21 21H85c-11.598 0-21-9.402-21-21v-16.207c0-19.272 13.116-36.072 31.813-40.746l31.2-7.8c25.464 18.316 65.195 23.577 97.974 0l31.2 7.8C274.884 294.721 288 311.52 288 330.793V347zm160-39c0 6.627-5.373 12-12 12H332c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v8zm0-64c0 6.627-5.373 12-12 12H332c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v8zm0-64c0 6.627-5.373 12-12 12H332c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v8z" />
              </Icon>
              <Label>
                <FormattedMessage {...messages.aboutPageLink} />
              </Label>
            </Link>
          </ListItem>
          <ListItem>
            <Link // eslint-disable-line jsx-a11y/anchor-is-valid
              to="/skills"
              tabIndex={isBigScreen ? '0' : '-1'}
              location={location}
            >
              <Icon viewBox="0 0 640 512">
                <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z" />
              </Icon>
              <Label>
                <FormattedMessage {...messages.skillsPageLink} />
              </Label>
            </Link>
          </ListItem>
          <ListItem>
            <Link // eslint-disable-line jsx-a11y/anchor-is-valid
              to="/projects"
              tabIndex={isBigScreen ? '0' : '-1'}
              location={location}
            >
              <Icon viewBox="0 0 512 512">
                <path d="M128 116V76c0-8.837 7.163-16 16-16h352c8.837 0 16 7.163 16 16v40c0 8.837-7.163 16-16 16H144c-8.837 0-16-7.163-16-16zm16 176h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zM16 144h64c8.837 0 16-7.163 16-16V64c0-8.837-7.163-16-16-16H16C7.163 48 0 55.163 0 64v64c0 8.837 7.163 16 16 16zm0 160h64c8.837 0 16-7.163 16-16v-64c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v64c0 8.837 7.163 16 16 16zm0 160h64c8.837 0 16-7.163 16-16v-64c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v64c0 8.837 7.163 16 16 16z" />
              </Icon>
              <Label>
                <FormattedMessage {...messages.projectsPageLink} />
              </Label>
            </Link>
          </ListItem>
          <ListItem>
            <Link // eslint-disable-line jsx-a11y/anchor-is-valid
              to="/contact"
              tabIndex={isBigScreen ? '0' : '-1'}
              location={location}
            >
              <Icon viewBox="0 0 512 512">
                <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z" />
              </Icon>
              <Label>
                <FormattedMessage {...messages.contactPageLink} />
              </Label>
            </Link>
          </ListItem>
        </List>
      </Nav>
    );
  }
}

Navigation.propTypes = {
  bigScreenBreakpoint: PropTypes.number.isRequired,
  isAtScreenTop: PropTypes.bool,
  isBigScreen: PropTypes.bool,
  isExpanded: PropTypes.bool,
  location: PropTypes.object,
  navigationRef: PropTypes.func,
  toggleMenu: PropTypes.func.isRequired,
};

Navigation.prototype.moveFocus = (fromElement, toElement) => {
  if (toElement.disabled) {
    return;
  }

  fromElement.setAttribute('data-hasfocus', false);
  fromElement.blur();

  toElement.focus();
  toElement.setAttribute('data-hasfocus', true);
};

export default Navigation;
