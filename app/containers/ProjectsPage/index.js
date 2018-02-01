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
import ProjectsList from './ProjectsList';
import ProjectsListItem from './ProjectsListItem';

import injectSaga from '../../utils/injectSaga';
import injectReducer from '../../utils/injectReducer';
import StyledArticle from '../../components/StyledArticle';
import PageHeader from '../../components/PageHeader';
import Project from '../../components/Project';
import FlexRow from '../../components/FlexRow';
import FlexColumn from '../../components/FlexColumn';

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
        <FlexRow>
          <FlexColumn>
            <PageHeader isLeftHanded>
              <FormattedMessage {...messages.title} />
            </PageHeader>
          </FlexColumn>
        </FlexRow>
        <FlexRow>
          <FlexColumn>
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
          </FlexColumn>
        </FlexRow>
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
