/**
 *
 * AboutPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import messages from './messages';
import {
  makeSelectAboutMeText,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadContent } from './actions';

import injectSaga from '../../utils/injectSaga';
import injectReducer from '../../utils/injectReducer';
import PageContent from '../../components/PageContent';
import ContentLoadingIndicator from '../../components/ContentLoadingIndicator';
import HeadGear from '../../components/HeadGear';

export function delayTimer(isLoading, callback) {
  return setTimeout(() => {
    callback && callback(); // eslint-disable-line no-unused-expressions
  }, 200);
}

export class AboutPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };

    this.timerId = -1;
    this.handleIsLoading = this.handleIsLoading.bind(this);
    this.setIsLoading = this.setIsLoading.bind(this);
  }

  componentWillMount() {
    this.props.getContent();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoading !== this.props.isLoading) {
      this.handleIsLoading(nextProps.isLoading);
    }
  }

  setIsLoading() {
    this.setState({ isLoading: true });
  }

  handleIsLoading(isLoading) {
    clearTimeout(this.timerId);

    if (isLoading) {
      this.timerId = delayTimer(isLoading, this.setIsLoading);
    } else {
      this.setState({
        isLoading: false,
      });
    }
  }

  render() {
    const { error, aboutMeText } = this.props;
    const { isLoading } = this.state;
    let showContent = <React.Fragment />;

    if (Array.isArray(aboutMeText) && aboutMeText.length) {
      showContent = <PageContent title={<FormattedMessage {...messages.pageTitle} />} content={aboutMeText} />;
    } else if (isLoading) { // FROM STATE!
      showContent = <ContentLoadingIndicator show showError={false} />;
    } else if (!!error !== false) {
      showContent = <ContentLoadingIndicator show showError />;
    }

    return (
      <React.Fragment>
        <HeadGear messages={messages} path={'/about'} />
        {showContent}
      </React.Fragment>
    );
  }
}

AboutPage.propTypes = {
  getContent: PropTypes.func.isRequired,
  aboutMeText: PropTypes.node,
  isLoading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};

const mapStateToProps = createStructuredSelector({
  aboutMeText: makeSelectAboutMeText(),
  isLoading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    getContent: () => {
      dispatch(loadContent());
    },
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'aboutPage', reducer });
const withSaga = injectSaga({ key: 'aboutPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AboutPage);
