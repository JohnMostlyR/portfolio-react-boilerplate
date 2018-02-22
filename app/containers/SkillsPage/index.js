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

import {
  makeSelectSkillsText,
  makeSelectError,
  makeSelectLoading,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { loadContent } from './actions';

import injectSaga from '../../utils/injectSaga';
import injectReducer from '../../utils/injectReducer';
import Article from '../../components/Article';
import PageContent from '../../components/PageContent';
import ContentLoadingIndicator from '../../components/ContentLoadingIndicator';

export class SkillsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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

    if (Array.isArray(this.props.skillsText) && this.props.skillsText.length) {
      showContent = <PageContent title={<FormattedMessage {...messages.title} />} content={this.props.skillsText} />;
    } else if (this.state.isLoading) { // FROM STATE!
      showContent = <ContentLoadingIndicator show showError={false} />;
    } else if (!!this.props.error !== false) {
      showContent = <ContentLoadingIndicator show showError />;
    }

    return (
      <Article>
        <Helmet>
          <title>Mijn vaardigheden</title>
          <meta name="description" content="Mijn vaardigheden pagina van Johan Meester zijn portfolio" />
        </Helmet>
        {showContent}
      </Article>
    );
  }
}

SkillsPage.propTypes = {
  getContent: PropTypes.func.isRequired,
  skillsText: PropTypes.node,
  isLoading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};

const mapStateToProps = createStructuredSelector({
  skillsText: makeSelectSkillsText(),
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

const withReducer = injectReducer({ key: 'skillsPage', reducer });
const withSaga = injectSaga({ key: 'skillsPage', saga });

export default compose(
  withRouter,
  withReducer,
  withSaga,
  withConnect,
)(SkillsPage);
