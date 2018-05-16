/**
 *
 * App.js
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Redirect, Route, withRouter } from 'react-router-dom';
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
import { setSiteWidth, setSiteNavigationIsAtScreenTop } from './actions';

import Main from '../../components/Main';
import SiteHeader from '../../components/SiteHeader';
import SiteNavigation from '../SiteNavigation';
import HomePage from '../../containers/HomePage/Loadable';
import AboutPage from '../../containers/AboutPage/Loadable';
import SkillsPage from '../../containers/SkillsPage/Loadable';
import ProjectsPage from '../../containers/ProjectsPage/Loadable';
import ContactPage from '../../containers/ContactPage/Loadable';
import NotFoundPage from '../../containers/NotFoundPage/Loadable';

class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.main = React.createRef();
    this.state = {
      _isResizing: 0,
      _isScrolling: 0,
    };

    this.handleResizeEvent = this.handleResizeEvent.bind(this);
    this.handleScrollEvent = this.handleScrollEvent.bind(this);
  }

  componentDidMount() {
    this.props.setSiteWidth(window.document.body.clientWidth);
    window.addEventListener('resize', this.handleResizeEvent);
    this.wrapper.ownerDocument.addEventListener('scroll', this.handleScrollEvent);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResizeEvent);
    this.wrapper.ownerDocument.removeEventListener('scroll', this.handleScrollEvent);
  }

  /* eslint-disable no-underscore-dangle */
  handleResizeEvent() {
    if (this.state._isResizing) {
      return;
    }

    const debounce = setTimeout(() => {
      this.setState({
        _isResizing: 0,
      });

      this.props.setSiteWidth(window.document.body.clientWidth);
    }, 66);

    this.setState({
      _isResizing: debounce,
    });
  }
  /* eslint-enable no-underscore-dangle */

  /* eslint-disable no-underscore-dangle */
  handleScrollEvent(ev) {
    if (this.state._isScrolling) {
      return;
    }

    const { target } = ev;

    if (target && 'scrollingElement' in target) {
      const debounce = requestAnimationFrame(() => {
        const isAtScreenTop = (target.scrollingElement.scrollTop >=
          this.props.siteNavigationTopPosition);

        this.setState({
          _isScrolling: 0,
        });

        this.props.setSiteNavigationIsAtScreenTop(isAtScreenTop);
      });

      this.setState({
        _isScrolling: debounce,
      });
    }
  }
  /* eslint-enable no-underscore-dangle */

  render() {
    return (
      <Wrapper innerRef={(el) => { this.wrapper = el; }}>
        <h1 hidden aria-hidden="false"><FormattedMessage {...messages.title} /></h1>
        <SiteHeader />
        <SiteNavigation />
        <Main mainRef={(el) => { this.main = el; }}>
          <Switch location={this.props.location}>
            <Route path="/introduction" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/skills" component={SkillsPage} />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/contact" component={ContactPage} />
            <Route exact path="/" render={() => <Redirect to="/introduction" />} />
            <Route component={NotFoundPage} />
          </Switch>
        </Main>
      </Wrapper>
    );
  }
}

App.propTypes = {
  location: PropTypes.object,
  setSiteWidth: PropTypes.func,
  siteNavigationTopPosition: PropTypes.number,
  // siteNavigationOffsetHeight: PropTypes.number,
  // siteNavigationIsAtScreenTop: PropTypes.bool,
  setSiteNavigationIsAtScreenTop: PropTypes.func.isRequired,
};

export function mapDispatchToProps(dispatch) {
  return {
    setSiteNavigationIsAtScreenTop: (isAtScreenTop) => (
      dispatch(setSiteNavigationIsAtScreenTop(isAtScreenTop))
    ),
    setSiteWidth: (width) => (
      dispatch(setSiteWidth(width))
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
