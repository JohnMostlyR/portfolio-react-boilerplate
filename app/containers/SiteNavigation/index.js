import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import {
  makeSelectSiteNavigationIsAtScreenTop,
  makeSelectSiteNavigationOffsetHeight,
  makeSelectSiteNavigationTopPosition,
} from './selectors';
import {
  setSiteNavigationIsAtScreenTop,
  setSiteNavigationOffsetHeight,
  setSiteNavigationTopPosition,
} from './actions';
import reducer from './reducer';

import { makeSelectLocation } from '../App/selectors';
import {
  makeSelectVisualSiteWrapperScrollTop,
  makeSelectVisualSiteWrapperSiteWidth,
} from '../VisualSiteWrapper/selectors';
import Navigation from '../../components/Navigation';
import getElementTop from '../../utils/getElementTop';
import injectReducer from '../../utils/injectReducer';

class SiteNavigation extends React.PureComponent {
  constructor(props) {
    super(props);

    const IS_BIG_SCREEN =
      this.props.siteWidth >= this.props.bigScreenBreakpoint;

    this.state = {
      isBigScreen: IS_BIG_SCREEN,
      isExpanded: IS_BIG_SCREEN,
    };

    this.siteNavigation = React.createRef();
    this.closeMenu = this.closeMenu.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleOutsideClickEvent = this.handleOutsideClickEvent.bind(this);
  }

  componentDidMount() {
    const myTopPosition = getElementTop(this.siteNavigation) || 0;
    const myOffsetHeight = this.siteNavigation
      ? this.siteNavigation.offsetHeight
      : 0;
    const isAtScreenTop = this.props.scrollTop >= myTopPosition;

    this.props.setTopPosition(myTopPosition);
    this.props.setOffsetHeight(myOffsetHeight);
    this.props.setIsAtScreenTop(isAtScreenTop);

    window.addEventListener('click', this.handleOutsideClickEvent);
  }

  componentDidUpdate(prevProps) {
    if (this.props.siteWidth !== prevProps.siteWidth) {
      const IS_BIG_SCREEN =
        this.props.siteWidth >= this.props.bigScreenBreakpoint;
      this.setState({ // eslint-disable-line
        isBigScreen: IS_BIG_SCREEN,
        isExpanded: IS_BIG_SCREEN,
      });
    }

    if (this.props.scrollTop !== prevProps.scrollTop) {
      const isAtScreenTop =
        this.props.scrollTop >= this.props.siteNavigationTopPosition;
      this.props.setIsAtScreenTop(isAtScreenTop);
    }
  }

  componentWillUnmount() {
    this.props.setTopPosition(0);
    this.props.setOffsetHeight(0);
    this.props.setIsAtScreenTop(false);
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
    const {
      bigScreenBreakpoint,
      isAtScreenTop,
      siteWidth,
      locale,
      location,
    } = this.props;
    const { isBigScreen, isExpanded } = this.state;

    return (
      <Navigation
        bigScreenBreakpoint={bigScreenBreakpoint}
        isAtScreenTop={isAtScreenTop || false}
        isBigScreen={isBigScreen}
        isExpanded={isExpanded}
        locale={locale}
        location={location}
        navigationRef={el => {
          this.siteNavigation = el;
        }}
        siteWidth={siteWidth}
        toggleMenu={this.toggleMenu}
      />
    );
  }
}

SiteNavigation.propTypes = {
  locale: PropTypes.string,
  location: PropTypes.object,
  bigScreenBreakpoint: PropTypes.number, // PIXELS!
  scrollTop: PropTypes.number,
  setTopPosition: PropTypes.func.isRequired,
  setOffsetHeight: PropTypes.func.isRequired,
  isAtScreenTop: PropTypes.bool,
  siteWidth: PropTypes.number,
  siteNavigationTopPosition: PropTypes.number,
  setIsAtScreenTop: PropTypes.func.isRequired,
};

SiteNavigation.defaultProps = {
  bigScreenBreakpoint: 1600,
};

export function mapDispatchToProps(dispatch) {
  return {
    setTopPosition: topPosition =>
      dispatch(setSiteNavigationTopPosition(topPosition)),
    setOffsetHeight: offsetHeight =>
      dispatch(setSiteNavigationOffsetHeight(offsetHeight)),
    setIsAtScreenTop: isAtScreenTop =>
      dispatch(setSiteNavigationIsAtScreenTop(isAtScreenTop)),
  };
}

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
  isAtScreenTop: makeSelectSiteNavigationIsAtScreenTop(),
  scrollTop: makeSelectVisualSiteWrapperScrollTop(),
  siteWidth: makeSelectVisualSiteWrapperSiteWidth(),
  siteNavigationTopPosition: makeSelectSiteNavigationTopPosition(),
  siteNavigationIsAtScreenTop: makeSelectSiteNavigationIsAtScreenTop(),
  siteNavigationOffsetHeight: makeSelectSiteNavigationOffsetHeight(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'siteNavigation', reducer });

export default compose(
  withReducer,
  withConnect,
)(SiteNavigation);
