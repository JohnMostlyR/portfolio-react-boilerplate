/**
 *
 * AboutPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';

import { makeSelectAboutMeText } from './selectors';
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

export class AboutPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.getContent();
  }

  render() {
    return (
      <Article>
        <Helmet>
          <title>Over mij</title>
          <meta name="description" content="Over mij pagina van Johan Meester zijn portfolio" />
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
              {this.props.aboutMeText}
            </SpeechBubble>
          </FlexColumn>
        </FlexRow>
      </Article>
    );
  }
}

AboutPage.propTypes = {
  getContent: PropTypes.func.isRequired,
  aboutMeText: PropTypes.node,
};

const mapStateToProps = createStructuredSelector({
  aboutMeText: makeSelectAboutMeText(),
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
