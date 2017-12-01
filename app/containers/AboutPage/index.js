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
import { Row, Column } from 'hedron';
import { Helmet } from 'react-helmet';

import { makeSelectAboutMeText } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { loadContent } from './actions';

import injectSaga from '../../utils/injectSaga';
import injectReducer from '../../utils/injectReducer';
import StyledArticle from '../../components/StyledArticle';
import SpeechBubble from '../../components/SpeechBubble';
import PageHeader from '../../components/PageHeader';

export class AboutPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getContent();
  }

  render() {
    return (
      <StyledArticle>
        <Helmet>
          <title>Over mij</title>
          <meta name="description" content="Over mij pagina van Johan Meester zijn portfolio" />
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
              {this.props.aboutMeText}
            </SpeechBubble>
          </Column>
        </Row>
      </StyledArticle>
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

function mapDispatchToProps(dispatch) {
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
