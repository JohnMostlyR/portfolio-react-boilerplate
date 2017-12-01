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
import { Row, Column } from 'hedron';
import { Helmet } from 'react-helmet';

import saga from './saga';
import messages from './messages';
import { loadContent } from './actions';
import { makeSelectProjectsPageProjects } from './selectors';
import reducer from './reducer';
import ProjectsList from './ProjectsList';
import ProjectsListItem from './ProjectsListItem';

import injectSaga from '../../utils/injectSaga';
import injectReducer from '../../utils/injectReducer';
import StyledArticle from '../../components/StyledArticle';
import PageHeader from '../../components/PageHeader';
import Project from '../../components/Project';

export class ProjectsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getContent();
  }

  render() {
    return (
      <StyledArticle>
        <Helmet>
          <title>Mijn projected</title>
          <meta name="description" content="Mijn projecten pagina van Johan Meester zijn portfolio" />
        </Helmet>
        <Row tagName={'div'}>
          <Column>
            <PageHeader isLeftHanded>
              <FormattedMessage {...messages.title} />
            </PageHeader>
          </Column>
        </Row>
        <Row tagName={'div'}>
          <Column>
            <ProjectsList>
              {
                this.props.projects.map((project, idx) => (
                  <ProjectsListItem key={project.title}>
                    <Project
                      thumbnailUrl={project.thumbnail.url}
                      title={project.title}
                      links={project.externalLinks}
                      detailsTitle={project.subtitle}
                      detailsBodyText={project.description}
                      isOdd={!(idx % 2)}
                    />
                  </ProjectsListItem>
                  ))
              }
            </ProjectsList>
          </Column>
        </Row>
      </StyledArticle>
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

function mapDispatchToProps(dispatch) {
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
