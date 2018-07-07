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

import saga from './saga';
import messages from './messages';
import { loadContent } from './actions';
import {
  makeSelectProjectsPageProjects,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import reducer from './reducer';

import { makeSelectLocation } from '../../containers/App/selectors';
import injectSaga from '../../utils/injectSaga';
import injectReducer from '../../utils/injectReducer';
import Projects from '../../components/Projects';
import PageContent from '../../components/PageContent';
import ProjectDetails from '../../components/ProjectDetails';
import ContentLoadingIndicator from '../../components/ContentLoadingIndicator';
import HeadGear from '../../components/HeadGear';

export function delayTimer(isLoading, callback) {
  return setTimeout(() => {
    callback && callback(); // eslint-disable-line no-unused-expressions
  }, 200);
}

export class ProjectsPage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
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
    const {
      error,
      location: { pathname, search },
      projects,
    } = this.props;
    const { isLoading } = this.state;
    let showContent = <React.Fragment />;

    if (projects.length) {
      showContent = (
        <PageContent
          title={<FormattedMessage {...messages.pageTitle} />}
          content={<Projects projects={projects} search={search} />}
          noSpeechBubble
        />
      );

      const regexp = RegExp('\\/projects\\/(.+)\\/(?:$|\\?.*)');

      if (regexp.test(pathname)) {
        const [, subpath] = regexp.exec(pathname);
        const project = projects.find(_project => {
          const { title } = _project;
          return subpath === title.toLowerCase().replace(/\W+/g, '-');
        });

        if (project) {
          showContent = (
            <ProjectDetails
              project={project}
              backlink={`/projects/${search}`}
            />
          );
        }
      }
    } else if (isLoading) {
      // FROM STATE!
      showContent = <ContentLoadingIndicator show showError={false} />;
    } else if (!!error !== false) {
      showContent = <ContentLoadingIndicator show showError />;
    }

    return (
      <React.Fragment>
        <HeadGear messages={messages} path={pathname} />
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
  location: PropTypes.object,
};

ProjectsPage.defaultProps = {
  projects: [],
};

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
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

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'projectsPage', reducer });
const withSaga = injectSaga({ key: 'projectsPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ProjectsPage);
