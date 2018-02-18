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
import { makeSelectProjectsPageProjects } from './selectors';
import reducer from './reducer';

import injectSaga from '../../utils/injectSaga';
import injectReducer from '../../utils/injectReducer';
import Article from '../../components/Article';
import PageHeader from '../../components/PageHeader';
import FlexRow from '../../components/FlexRow';
import FlexColumn from '../../components/FlexColumn';
import Projects from '../../components/Projects';

export class ProjectsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getContent();
  }

  render() {
    return (
      <Article>
        <Helmet>
          <title>Mijn projecten</title>
          <meta name="description" content="Mijn projecten pagina van Johan Meester zijn portfolio" />
        </Helmet>
        <FlexRow>
          <FlexColumn>
            <PageHeader isLeftHanded>
              <FormattedMessage {...messages.title} />
            </PageHeader>
          </FlexColumn>
        </FlexRow>
        <FlexRow>
          <FlexColumn>
            <Projects projects={this.props.projects} />
          </FlexColumn>
        </FlexRow>
      </Article>
    );
  }
}

ProjectsPage.propTypes = {
  getContent: PropTypes.func.isRequired,
  projects: PropTypes.array,
};

ProjectsPage.defaultProps = {
  projects: [],
};

const mapStateToProps = createStructuredSelector({
  projects: makeSelectProjectsPageProjects(),
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
