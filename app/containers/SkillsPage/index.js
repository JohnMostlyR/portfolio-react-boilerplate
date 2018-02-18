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

import { makeSelectSkillsText } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { loadContent } from './actions';

import injectSaga from '../../utils/injectSaga';
import injectReducer from '../../utils/injectReducer';
import Article from '../../components/Article';
import SpeechBubble from '../../components/SpeechBubble';
import PageHeader from '../../components/PageHeader';
import FlexRow from '../../components/FlexRow';
import FlexColumn from '../../components/FlexColumn';

export class SkillsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.getContent();
  }

  render() {
    return (
      <Article>
        <Helmet>
          <title>Mijn vaardigheden</title>
          <meta name="description" content="Mijn vaardigheden pagina van Johan Meester zijn portfolio" />
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
            <SpeechBubble
              arrowHeight={'9vh'}
              backgroundColor="#f90"
              isLeftHanded={false}
              maxWidth={'940px'}
              showArrowBreakpoint="750px"
            >
              {this.props.skillsText}
            </SpeechBubble>
          </FlexColumn>
        </FlexRow>
      </Article>
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
