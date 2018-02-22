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
import Article from '../../components/Article';
import Projects from '../../components/Projects';
import PageContent from '../../components/PageContent';
import ContentLoadingIndicator from '../../components/ContentLoadingIndicator';

export class ProjectsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };

    this.timerId = -1;
  }

  componentWillMount() {
    this.props.getContent();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoading !== this.props.isLoading) {
      if (nextProps.isLoading) {
        clearTimeout(this.timerId);
        this.timerId = setTimeout(() => {
          this.setState({
            isLoading: true,
          });
        }, 200);
      } else {
        clearTimeout(this.timerId);
        this.setState({
          isLoading: false,
        });
      }
    }
  }

  render() {
    let showContent = <React.Fragment />;

    if (this.props.projects.length) {
      showContent = (
        <PageContent
          title={<FormattedMessage {...messages.title} />}
          content={<Projects projects={this.props.projects} />}
          noSpeechBubble
        />
      );
    } else if (this.state.isLoading) { // FROM STATE!
      showContent = <ContentLoadingIndicator show showError={false} />;
    } else if (!!this.props.error !== false) {
      showContent = <ContentLoadingIndicator show showError />;
    }

    return (
      <Article>
        <Helmet>
          <title>Mijn projecten</title>
          <meta name="description" content="Mijn projecten pagina van Johan Meester zijn portfolio" />
        </Helmet>
        {showContent}
      </Article>
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
