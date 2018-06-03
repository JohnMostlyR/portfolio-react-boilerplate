/**
 *
 * SkillsPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import {
  makeSelectSkillsText,
  makeSelectError,
  makeSelectLoading,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { loadContent } from './actions';

import injectSaga from '../../utils/injectSaga';
import injectReducer from '../../utils/injectReducer';
import PageContent from '../../components/PageContent';
import ContentLoadingIndicator from '../../components/ContentLoadingIndicator';

export function delayTimer(isLoading, callback) {
  return setTimeout(() => {
    callback && callback(); // eslint-disable-line no-unused-expressions
  }, 200);
}

export class SkillsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
    const { error, skillsText } = this.props;
    const { isLoading } = this.state;
    let showContent = <React.Fragment />;

    if (Array.isArray(skillsText) && skillsText.length) {
      showContent = <PageContent title={<FormattedMessage {...messages.title} />} content={skillsText} />;
    } else if (isLoading) { // FROM STATE!
      showContent = <ContentLoadingIndicator show showError={false} />;
    } else if (!!error !== false) {
      showContent = <ContentLoadingIndicator show showError />;
    }

    return (
      <React.Fragment>
        <Helmet>
          <title>Mijn vaardigheden</title>
          <meta name="description" content="Mijn vaardigheden pagina van Johan Meester zijn portfolio" />
        </Helmet>
        {showContent}
      </React.Fragment>
    );
  }
}

SkillsPage.propTypes = {
  getContent: PropTypes.func.isRequired,
  skillsText: PropTypes.node,
  isLoading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};

const mapStateToProps = createStructuredSelector({
  skillsText: makeSelectSkillsText(),
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

const withReducer = injectReducer({ key: 'skillsPage', reducer });
const withSaga = injectSaga({ key: 'skillsPage', saga });

export default compose(
  withRouter,
  withReducer,
  withSaga,
  withConnect,
)(SkillsPage);
