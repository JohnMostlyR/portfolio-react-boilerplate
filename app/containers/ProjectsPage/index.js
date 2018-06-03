/**
 *
 * ProjectsPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';

import saga from './saga';
import messages from './messages';
import { loadContent } from './actions';
import {
  makeSelectProjectsPageProjects,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import reducer from './reducer';

import injectSaga from '../../utils/injectSaga';
import injectReducer from '../../utils/injectReducer';
import Projects from '../../components/Projects';
import PageContent from '../../components/PageContent';
import ContentLoadingIndicator from '../../components/ContentLoadingIndicator';

export function delayTimer(isLoading, callback) {
  return setTimeout(() => {
    callback && callback(); // eslint-disable-line no-unused-expressions
  }, 200);
}

export class ProjectsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
    const { error, projects } = this.props;
    const { isLoading } = this.state;
    let showContent = <React.Fragment />;

    if (Array.isArray(projects) && projects.length) {
      showContent = (
        <PageContent
          title={<FormattedMessage {...messages.title} />}
          content={<Projects projects={projects} />}
          noSpeechBubble
        />
      );
    } else if (isLoading) { // FROM STATE!
      showContent = <ContentLoadingIndicator show showError={false} />;
    } else if (!!error !== false) {
      showContent = <ContentLoadingIndicator show showError />;
    }

    return (
      <React.Fragment>
        <Helmet>
          <title>Mijn projecten</title>
          <meta name="description" content="Mijn projecten pagina van Johan Meester zijn portfolio" />
        </Helmet>
        {showContent}
      </React.Fragment>
    );
  }
}

ProjectsPage.propTypes = {
  getContent: PropTypes.func.isRequired,
  projects: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};

ProjectsPage.defaultProps = {
  projects: [],
};

const mapStateToProps = createStructuredSelector({
  projects: makeSelectProjectsPageProjects(),
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

const withReducer = injectReducer({ key: 'projectsPage', reducer });
const withSaga = injectSaga({ key: 'projectsPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ProjectsPage);
