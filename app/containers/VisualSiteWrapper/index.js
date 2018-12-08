/**
 *
 * VisualSiteWrapper
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { setScrollTop, setSiteWidth } from './actions';
import reducer from './reducer';
import Wrapper from './Wrapper';

import { makeSelectSiteNavigationIsAtScreenTop } from '../SiteNavigation/selectors';
import injectReducer from '../../utils/injectReducer';

class VisualSiteWrapper extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      _isResizing: 0,
      _isScrolling: 0,
    };

    this.handleResizeEvent = this.handleResizeEvent.bind(this);
    this.handleScrollEvent = this.handleScrollEvent.bind(this);
  }

  componentDidMount() {
    const {
      document: {
        body: { clientWidth },
      },
    } = window;
    this.props.setSiteWidth(clientWidth);
    window.addEventListener('resize', this.handleResizeEvent);
    window.addEventListener('scroll', this.handleScrollEvent);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResizeEvent);
    window.removeEventListener('scroll', this.handleScrollEvent);
  }

  /* eslint-disable no-underscore-dangle */
  handleResizeEvent() {
    if (this.state._isResizing) {
      return;
    }

    const {
      document: {
        body: { clientWidth },
      },
    } = window;
    const debounce = setTimeout(() => {
      this.setState({
        _isResizing: 0,
      });

      this.props.setSiteWidth(clientWidth);
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

    const {
      target: { scrollingElement },
    } = ev;

    if (scrollingElement) {
      const debounce = requestAnimationFrame(() => {
        this.setState({
          _isScrolling: 0,
        });

        this.props.setScrollTop(scrollingElement.scrollTop);
      });

      this.setState({
        _isScrolling: debounce,
      });
    }
  }
  /* eslint-enable no-underscore-dangle */

  render() {
    const { children } = this.props;
    return <Wrapper>{children}</Wrapper>;
  }
}

VisualSiteWrapper.propTypes = {
  children: PropTypes.any,
  setScrollTop: PropTypes.func.isRequired,
  setSiteWidth: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    setScrollTop: topPosition => dispatch(setScrollTop(topPosition)),
    setSiteWidth: width => dispatch(setSiteWidth(width)),
  };
}

const mapStateToProps = createStructuredSelector({
  siteNavigationIsAtScreenTop: makeSelectSiteNavigationIsAtScreenTop(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'visualSiteWrapper', reducer });

export default compose(
  withReducer,
  withConnect,
)(VisualSiteWrapper);
