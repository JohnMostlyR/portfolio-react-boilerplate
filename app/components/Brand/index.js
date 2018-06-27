/**
 * Brand Component
 * @param {string} [href='/']
 * @param {string} [showNameBreakpoint='375px']
 * @returns {*}
 * @constructor
 */
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import Wrapper from './Wrapper';
import BrandLink from './BrandLink';
import Logo from '../../components/Logo';

const Brand = ({ href, showNameBreakpoint }) => (
  <Wrapper>
    <FormattedMessage {...messages.title}>
      {message => (
        <BrandLink
          href={href}
          showNameBreakpoint={showNameBreakpoint}
          title={message}
        >
          <Logo showNameBreakpoint={showNameBreakpoint} />
        </BrandLink>
      )}
    </FormattedMessage>
  </Wrapper>
);

Brand.propTypes = {
  href: PropTypes.string,
  showNameBreakpoint: PropTypes.string,
};

Brand.defaultProps = {
  href: '/',
  showNameBreakpoint: '375px',
};

export default Brand;
