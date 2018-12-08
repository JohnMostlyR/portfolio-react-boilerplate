/**
 *
 * App.js
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Redirect, Route } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import messages from './messages';
import { makeSelectLocation } from './selectors';
import BigHeadGear from './BigHeadGear';

import Main from '../../components/Main';
import SiteHeader from '../../components/SiteHeader';
import SiteNavigation from '../SiteNavigation';
import VisualSiteWrapper from '../VisualSiteWrapper';
import HomePage from '../HomePage/Loadable';
import AboutPage from '../AboutPage/Loadable';
import SkillsPage from '../SkillsPage/Loadable';
import ProjectsPage from '../ProjectsPage/Loadable';
import ContactPage from '../ContactPage/Loadable';
import NotFoundPage from '../NotFoundPage/Loadable';

class App extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { location } = this.props;
    return (
      <React.Fragment>
        <BigHeadGear />
        <VisualSiteWrapper>
          <FormattedMessage {...messages.skipLink}>
            {message => <a href="#main">{message}</a>}
          </FormattedMessage>
          <h1 hidden aria-hidden="false">
            <FormattedMessage {...messages.title} />
          </h1>
          <SiteHeader />
          <SiteNavigation />
          <Main>
            <Switch location={location}>
              <Route path="/introduction" component={HomePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/skills" component={SkillsPage} />
              <Route path="/projects" component={ProjectsPage} />
              <Route path="/contact" component={ContactPage} />
              <Route
                exact
                path="/"
                render={() => <Redirect to="/introduction" />}
              />
              <Route component={NotFoundPage} />
            </Switch>
          </Main>
        </VisualSiteWrapper>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
});

export default connect(
  mapStateToProps,
  null,
)(App);
