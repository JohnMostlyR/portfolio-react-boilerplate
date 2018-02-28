import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import StyledUL from './StyledUL';
import StyledLI from './StyledLI';
import SiteNavigationLink from './SiteNavigationLink';
import SiteNavigationIcon from './SiteNavigationIcon';
import Description from './Description';
import SiteNavigation from './SiteNavigation';
import messages from './messages';

import {
  makeSelectLocation,
  makeSelectSiteNavigationIsAtScreenTop,
} from '../../containers/App/selectors';
import {
  setSiteNavigationOffsetHeight,
  setSiteNavigationTopPosition,
} from '../../containers/App/actions';
import getElementTop from '../../utils/getElementTop';

class SiteNavigationBar extends React.PureComponent {
  componentDidMount() {
    const myTopPosition = getElementTop(this.siteNavigation) || 0;
    const myOffsetHeight = (this.siteNavigation) ? this.siteNavigation.offsetHeight : 0;
    this.props.setTopPosition(myTopPosition);
    this.props.setOffsetHeight(myOffsetHeight);
  }

  componentWillUnmount() {
    this.props.setTopPosition(0);
    this.props.setOffsetHeight(0);
  }

  render() {
    const CURRENT_PATHNAME = this.props.location.pathname;

    return (
      <SiteNavigation
        isAtScreenTop={this.props.isAtScreenTop || false}
        innerRef={(el) => { this.siteNavigation = el; }}
      >
        <h2 hidden aria-hidden="false"><FormattedMessage {...messages.header} /></h2>
        <StyledUL>
          <StyledLI>
            <SiteNavigationLink to={'/'} data-isactive={CURRENT_PATHNAME === '/'}>
              <SiteNavigationIcon name={'home'} fixedWidth />
              <Description>
                <FormattedMessage {...messages.homePageLink} />
              </Description>
            </SiteNavigationLink>
          </StyledLI>
          <StyledLI>
            <SiteNavigationLink
              to={'/about'}
              data-isactive={CURRENT_PATHNAME === '/about'}
            >
              <SiteNavigationIcon name={'address-card'} fixedWidth />
              <Description>
                <FormattedMessage {...messages.aboutPageLink} />
              </Description>
            </SiteNavigationLink>
          </StyledLI>
          <StyledLI>
            <SiteNavigationLink
              to={'/skills'}
              data-isactive={CURRENT_PATHNAME === '/skills'}
            >
              <SiteNavigationIcon name={'code'} fixedWidth />
              <Description>
                <FormattedMessage {...messages.skillsPageLink} />
              </Description>
            </SiteNavigationLink>
          </StyledLI>
          <StyledLI>
            <SiteNavigationLink
              to={'/projects'}
              data-isactive={CURRENT_PATHNAME === '/projects'}
            >
              <SiteNavigationIcon name={'list'} fixedWidth />
              <Description>
                <FormattedMessage {...messages.projectsPageLink} />
              </Description>
            </SiteNavigationLink>
          </StyledLI>
          <StyledLI>
            <SiteNavigationLink
              to={'/contact'}
              data-isactive={CURRENT_PATHNAME === '/contact'}
            >
              <SiteNavigationIcon name={'send'} fixedWidth />
              <Description>
                <FormattedMessage {...messages.contactPageLink} />
              </Description>
            </SiteNavigationLink>
          </StyledLI>
        </StyledUL>
      </SiteNavigation>
    );
  }
}

SiteNavigationBar.propTypes = {
  setTopPosition: PropTypes.func.isRequired,
  setOffsetHeight: PropTypes.func.isRequired,
  isAtScreenTop: PropTypes.bool,
  location: PropTypes.object,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(SiteNavigationBar);
