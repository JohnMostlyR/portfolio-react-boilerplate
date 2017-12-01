/*
 *
 * LanguageToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';

import Toggle from '../../components/Toggle';
import messages from './messages';
import { appLocales } from '../../i18n';
import { changeLocale } from '../LanguageProvider/actions';
import { makeSelectLocale } from '../LanguageProvider/selectors';

export class LocaleToggle extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <aside>
        <h2 hidden aria-hidden={false}><FormattedMessage {...messages.title} /></h2>
        <Toggle
          currentValue={this.props.locale}
          values={appLocales}
          messages={messages}
          onToggle={this.props.onLocaleToggle}
        />
      </aside>
    );
  }
}

LocaleToggle.propTypes = {
  onLocaleToggle: PropTypes.func,
  locale: PropTypes.string,
};

const mapStateToProps = createSelector(
  makeSelectLocale(),
  (locale) => ({ locale })
);

export function mapDispatchToProps(dispatch) {
  return {
    onLocaleToggle: (evt) => dispatch(changeLocale(evt.target.value)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LocaleToggle);
