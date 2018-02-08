import React from 'react';
import PropTypes from 'prop-types';
import { CubeGrid, Scale } from 'styled-loaders-react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import Wrapper from './Wrapper';
import H2 from './H2';

const LOADER_SIZE = '100px';

const Error = (
  <Wrapper>
    <H2>
      <FormattedMessage {...messages.error} />
    </H2>
    <Scale color="red" size={LOADER_SIZE} />
  </Wrapper>
);

const TimedOut = (
  <Wrapper>
    <H2>
      <FormattedMessage {...messages.timedOut} />
    </H2>
    <CubeGrid color="red" size={LOADER_SIZE} />
  </Wrapper>
);

const PastDelay = (
  <Wrapper>
    <H2 hidden aria-hidden={false}>
      <FormattedMessage {...messages.pastDelay} />
    </H2>
    <CubeGrid color="#BADA55" size={LOADER_SIZE} />
  </Wrapper>
);

function LoadingComponent({ error, timedOut, pastDelay }) {
  if (error) {
    // When the loader has errored
    return Error;
  } else if (timedOut) {
    // When the loader has taken longer than the timeout
    return TimedOut;
  } else if (pastDelay) {
    // When the loader has taken longer than the delay
    return PastDelay;
  }
  // When the loader has just started
  return null;
}

LoadingComponent.propTypes = {
  error: PropTypes.bool,
  pastDelay: PropTypes.bool,
  timedOut: PropTypes.bool,
};

export default LoadingComponent;
