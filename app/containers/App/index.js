/**
 *
 * App.js
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import messages from './messages';
import Wrapper from './Wrapper';
import {
  makeSelectSiteNavigationIsAtScreenTop,
  makeSelectSiteNavigationTopPosition,
  makeSelectSiteNavigationOffsetHeight,
} from './selectors';
import { setSiteNavigationIsAtScreenTop } from './actions';

import StyledMain from '../../components/StyledMain';
import SiteHeader from '../../components/SiteHeader';
import HomePage from '../../containers/HomePage/Loadable';
import AboutPage from '../../containers/AboutPage/Loadable';
import SkillsPage from '../../containers/SkillsPage/Loadable';
import ProjectsPage from '../../containers/ProjectsPage/Loadable';
import ContactPage from '../../containers/ContactPage/Loadable';
import NotFoundPage from '../../containers/NotFoundPage/Loadable';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      _isScrolling: 0,
    };
  }

  componentDidMount() {
    this.wrapper.ownerDocument.addEventListener('scroll', this.handleScrollEvent);
  }

  componentWillUnmount() {
    this.wrapper.ownerDocument.removeEventListener('scroll', this.handleScrollEvent);
  }

  /* eslint-disable no-underscore-dangle */
  handleScrollEvent = (ev) => {
    if (this.state._isScrolling) {
      return;
    }

    if (ev.target && 'scrollingElement' in ev.target) {
      const debounce = setTimeout(() => {
        const isAtScreenTop = (ev.target.scrollingElement.scrollTop >=
          this.props.siteNavigationTopPosition);

        this.setState({
          _isScrolling: 0,
        });

        this.props.setSiteNavigationIsAtScreenTop(isAtScreenTop);
      }, 0);

      this.setState({
        _isScrolling: debounce,
      });
    }
  };
  /* eslint-enable no-underscore-dangle */

  render() {
    return (
      // eslint-disable-next-line no-return-assign
      <Wrapper innerRef={(el) => this.wrapper = el}>
        <h1 hidden aria-hidden="false"><FormattedMessage {...messages.title} /></h1>
        <SiteHeader />
        <StyledMain
          fixedSiteNavOffset={this.props.siteNavigationOffsetHeight}
          siteNavIsFixed={this.props.siteNavigationIsAtScreenTop}
        >
          <Switch location={this.props.location}>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/skills" component={SkillsPage} />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/contact" component={ContactPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </StyledMain>
      </Wrapper>
    );
  }
}

App.propTypes = {
  location: PropTypes.object,
  siteNavigationTopPosition: PropTypes.number,
  siteNavigationOffsetHeight: PropTypes.number,
  siteNavigationIsAtScreenTop: PropTypes.bool,
  setSiteNavigationIsAtScreenTop: PropTypes.func.isRequired,
};

export function mapDispatchToProps(dispatch) {
  return {
    setSiteNavigationIsAtScreenTop: (isAtScreenTop) => (
      dispatch(setSiteNavigationIsAtScreenTop(isAtScreenTop))
    ),
  };
}

const mapStateToProps = createStructuredSelector({
  siteNavigationTopPosition: makeSelectSiteNavigationTopPosition(),
  siteNavigationIsAtScreenTop: makeSelectSiteNavigationIsAtScreenTop(),
  siteNavigationOffsetHeight: makeSelectSiteNavigationOffsetHeight(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withRouter,
  withConnect,
)(App);
// export default App;
