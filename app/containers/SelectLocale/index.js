/**
 *
 * SelectLocale
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { appLocales } from '../../i18n';
import { changeLanguage } from '../LanguageProvider/actions';
import { makeSelectLocale } from '../LanguageProvider/selectors';
import LanguageMenu from '../../components/LanguageMenu';

export class SelectLocale extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleOutsideClickEvent = this.handleOutsideClickEvent.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.handleOutsideClickEvent);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleOutsideClickEvent);
  }

  handleOutsideClickEvent() {
    this.closeMenu();
  }

  closeMenu() {
    this.setState({
      isExpanded: false,
    });
  }

  toggleMenu() {
    this.setState(prevState => ({
      isExpanded: !prevState.isExpanded,
    }));
  }

  render() {
    const { locale, changeLanguageHandler } = this.props;
    return (
      <LanguageMenu
        locales={appLocales}
        currentLocale={locale}
        changeLanguageHandler={changeLanguageHandler}
        isExpanded={this.state.isExpanded}
        toggleMenuHandler={this.toggleMenu}
      />
    );
  }
}

SelectLocale.propTypes = {
  changeLanguageHandler: PropTypes.func,
  locale: PropTypes.string,
};

const mapStateToProps = createSelector(
  makeSelectLocale(),
  locale => ({
    locale,
  }),
);

export function mapDispatchToProps(dispatch) {
  return {
    changeLanguageHandler: lang => dispatch(changeLanguage(lang)),
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectLocale);
