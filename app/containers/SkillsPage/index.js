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
import { Row, Column } from 'hedron';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { makeSelectSkillsText } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { loadContent } from './actions';

import injectSaga from '../../utils/injectSaga';
import injectReducer from '../../utils/injectReducer';
import StyledArticle from '../../components/StyledArticle';
import SpeechBubble from '../../components/SpeechBubble';
import PageHeader from '../../components/PageHeader';

export class SkillsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getContent();
  }

  render() {
    return (
      <StyledArticle>
        <Helmet>
          <title>Mijn vaardigheden</title>
          <meta name="description" content="Mijn vaardigheden pagina van Johan Meester zijn portfolio" />
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
            <SpeechBubble>
              {this.props.skillsText}
            </SpeechBubble>
          </Column>
        </Row>
      </StyledArticle>
    );
  }
}

SkillsPage.propTypes = {
  getContent: PropTypes.func.isRequired,
  skillsText: PropTypes.node,
};

const mapStateToProps = createStructuredSelector({
  skillsText: makeSelectSkillsText(),
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

const withReducer = injectReducer({ key: 'skillsPage', reducer });
const withSaga = injectSaga({ key: 'skillsPage', saga });

export default compose(
  withRouter,
  withReducer,
  withSaga,
  withConnect,
)(SkillsPage);
