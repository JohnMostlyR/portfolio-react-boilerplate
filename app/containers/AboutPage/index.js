/**
 *
 * AboutPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';

import messages from './messages';
import {
  makeSelectAboutMeText,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadContent } from './actions';

import injectSaga from '../../utils/injectSaga';
import injectReducer from '../../utils/injectReducer';
import Article from '../../components/Article';
import PageContent from '../../components/PageContent';
import ContentLoadingIndicator from '../../components/ContentLoadingIndicator';

export class AboutPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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

    if (this.props.aboutMeText) {
      showContent = <PageContent title={<FormattedMessage {...messages.title} />} content={this.props.aboutMeText} />;
    } else if (this.state.isLoading) { // FROM STATE!
      showContent = <ContentLoadingIndicator show showError={false} />;
    } else if (!!this.props.error !== false) {
      showContent = <ContentLoadingIndicator show showError />;
    }

    return (
      <Article>
        <Helmet>
          <title>Over mij</title>
          <meta name="description" content="Over mij pagina van Johan Meester zijn portfolio" />
        </Helmet>
        {showContent}
      </Article>
    );
  }
}

AboutPage.propTypes = {
  getContent: PropTypes.func.isRequired,
  aboutMeText: PropTypes.node,
  isLoading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};

const mapStateToProps = createStructuredSelector({
  aboutMeText: makeSelectAboutMeText(),
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

const withReducer = injectReducer({ key: 'aboutPage', reducer });
const withSaga = injectSaga({ key: 'aboutPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AboutPage);
