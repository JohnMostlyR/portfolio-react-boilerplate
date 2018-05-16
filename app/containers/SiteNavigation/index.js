import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  makeSelectLocation,
  makeSelectSiteNavigationIsAtScreenTop,
  makeSelectSiteWidth,
} from '../../containers/App/selectors';
import {
  setSiteNavigationOffsetHeight,
  setSiteNavigationTopPosition,
} from '../../containers/App/actions';

import Navigation from '../../components/Navigation';

import getElementTop from '../../utils/getElementTop';

class SiteNavigation extends React.PureComponent {
  constructor(props) {
    super(props);

    const IS_BIG_SCREEN = (this.props.siteWidth >= this.props.bigScreenBreakpoint);

    this.state = {
      isBigScreen: IS_BIG_SCREEN,
      isExpanded: IS_BIG_SCREEN,
    };

    this.siteNavigation = React.createRef();
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount() {
    const myTopPosition = getElementTop(this.siteNavigation) || 0;
    const myOffsetHeight = (this.siteNavigation) ? this.siteNavigation.offsetHeight : 0;
    this.props.setTopPosition(myTopPosition);
    this.props.setOffsetHeight(myOffsetHeight);
  }

  componentDidUpdate(prevProps) {
    if (this.props.siteWidth !== prevProps.siteWidth) {
      const IS_BIG_SCREEN = (this.props.siteWidth >= this.props.bigScreenBreakpoint);
      this.setState({ // eslint-disable-line react/no-did-update-set-state
        isBigScreen: IS_BIG_SCREEN,
        isExpanded: IS_BIG_SCREEN,
      });
    }
  }

  componentWillUnmount() {
    this.props.setTopPosition(0);
    this.props.setOffsetHeight(0);
  }

  toggleMenu() {
    this.setState((prevState) => ({
      isExpanded: !prevState.isExpanded,
    }));
  }

  render() {
    return (
      <Navigation
        bigScreenBreakpoint={this.props.bigScreenBreakpoint}
        isAtScreenTop={this.props.isAtScreenTop || false}
        navigationRef={(el) => { this.siteNavigation = el; }}
        isBigScreen={this.state.isBigScreen}
        isExpanded={this.state.isExpanded}
        siteWidth={this.props.siteWidth}
        toggleMenu={this.toggleMenu}
      />
    );
  }
}

SiteNavigation.propTypes = {
  bigScreenBreakpoint: PropTypes.number, // PIXELS!
  setTopPosition: PropTypes.func.isRequired,
  setOffsetHeight: PropTypes.func.isRequired,
  isAtScreenTop: PropTypes.bool,
  siteWidth: PropTypes.number,
};

SiteNavigation.defaultProps = {
  bigScreenBreakpoint: 1600,
};

export function mapDispatchToProps(dispatch) {
  return {
    setTopPosition: (topPosition) => (dispatch(setSiteNavigationTopPosition(topPosition))),
    setOffsetHeight: (offsetHeight) => (dispatch(setSiteNavigationOffsetHeight(offsetHeight))),
  };
}

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
  isAtScreenTop: makeSelectSiteNavigationIsAtScreenTop(),
  siteWidth: makeSelectSiteWidth(),
});

export default connect(mapStateToProps, mapDispatchToProps)(SiteNavigation);
