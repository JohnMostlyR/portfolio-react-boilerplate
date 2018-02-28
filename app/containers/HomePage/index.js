/*
 * HomePage
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import messages from './messages';

import IntroHeader from './IntroHeader';
import IntroPageArticle from './IntroPageArticle';
import SpeechBubble from './SpeechBubble';
import MyPicture from './itsme-trevi-rome.jpg';
import FlexRow from '../../components/FlexRow';
import FlexColumn from '../../components/FlexColumn';
import { makeSelectLocale } from '../../containers/LanguageProvider/selectors';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.animateSvg();
  }

  animateSvg() {
    if (!window) return;

    import('snapsvg')
      .then((Snap) => {
        const SVG_EL = Snap(this.svgDiv);
        const TIMING = window.mina;
        const ANIMATION_DURATION = 200; // milliseconds
        const ANIMATION_DELAY = 200; // milliseconds

        const INFOPAGE_BALLOON_ANIMATION_TIMELINE = [
          {
            elementId: 'g_big_bubble__p1',
            animationAttributes: {
              d: 'M 0 111.6 L 0 321.1 L 117.7 549.6 L 237.7 549.6 L 0 111.6 L 0 111.6 Z',
            },
            animationDuration: ANIMATION_DURATION / 2,
            animationDelay: 1,
            animationTimingFunction: TIMING.linear,
            dFrom: 'M 0 111.6 L 0 321.1 L 0 321.1 L 0 108 L 0 111.6 L 0 111.6 Z',
            dTo: '',
          },
          {
            elementId: 'g_big_bubble__p2',
            animationAttributes: {
              d: 'M 191.8 635 L 237.7 549.5 L 117.7 549.5 L 78.6 635 L 191.8 635 Z',
            },
            animationDelay: ANIMATION_DELAY / 2,
            animationDuration: ANIMATION_DURATION / 2,
            animationTimingFunction: TIMING.linear,
            dFrom: 'M 237.8 549.5 L 237.8 549.5 L 117.8 549.5 L 117.8 549.5',
            dTo: '',
          },
          {
            elementId: 'g_big_bubble__p3',
            animationAttributes: {
              d: 'M 8 503.2 L 78.6 635 L 191.9 635 L 118.5 503.2 L 8 503.2 Z',
            },
            animationDelay: ANIMATION_DELAY,
            animationDuration: ANIMATION_DURATION,
            animationTimingFunction: TIMING.linear,
            dFrom: 'M 78.6 635 L 78.6 635 L 191.9 635 L 191.9 635',
            dTo: '',
          },
          {
            elementId: 'g_big_bubble__p4',
            animationAttributes: {
              d: 'M 8 503.2 L 278.2 0 L 383.2 0 L 118.5 503.2',
            },
            animationDelay: ANIMATION_DELAY,
            animationDuration: ANIMATION_DURATION,
            animationTimingFunction: TIMING.linear,
            dFrom: 'M 8 503.2 L 8 503.2 L 118.5 503.2 L 118.5 503.2',
            dTo: '',
          },
          {
            elementId: 'g_big_bubble__p5',
            animationAttributes: {
              d: 'M 891 12.1 C 891 5.5 885.6 0 878.9 0 L 278.4 0 L 227 96.6 L 878.9 96.6 C 885.5 96.6 891 91.2 891 84.5 L 891 12.1 L 891 12.1 L 891 12.1 Z',
            },
            animationDelay: ANIMATION_DELAY,
            animationDuration: ANIMATION_DURATION,
            animationTimingFunction: TIMING.linear,
            dFrom: 'M 278.4 0 L 278.4 0 L 226.4 96.7 L 226.4 96.7 L 278.4 0 Z',
            dTo: '',
          },
          {
            elementId: 'g_big_bubble__p6',
            animationAttributes: {
              d: 'M 891 12.1 C 891 5.5 885.6 0 878.9 0 L 278.4 0 L 61.2 404.6 L 878.8 404.6 C 885.4 404.6 890.9 399.2 890.9 392.5 L 890.9 12.1 L 891 12.1 L 891 12.1 Z',
              opacity: 1,
            },
            animationDelay: ANIMATION_DELAY,
            animationDuration: ANIMATION_DURATION,
            animationTimingFunction: TIMING.linear,
            dFrom: 'M 891 12.1 C 891 5.5 885.6 0 878.9 0 L 278.4 0 L 227 96.6 L 878.9 96.6 C 885.5 96.6 891 91.2 891 84.5 L 891 12.1 L 891 12.1 L 891 12.1 Z',
            dTo: '',
          },
          {
            elementId: 'g_name',
            animationAttributes: {
              opacity: 1,
            },
            animationDelay: ANIMATION_DELAY,
            animationDuration: ANIMATION_DURATION,
            animationTimingFunction: TIMING.linear,
          },
          {
            elementId: 't_occupation',
            animationAttributes: {
              opacity: 1,
            },
            animationDelay: ANIMATION_DELAY,
            animationDuration: 1,
            animationTimingFunction: TIMING.linear,
          },
          {
            elementId: 't_occupation',
            animationAttributes: {
              'font-size': '40px',
            },
            animationDelay: ANIMATION_DELAY,
            animationDuration: ANIMATION_DURATION,
            animationTimingFunction: TIMING.linear,
          },
          {
            elementId: 't_occupation',
            animationAttributes: {
              'font-size': '29px',
            },
            animationDelay: ANIMATION_DELAY,
            animationDuration: ANIMATION_DURATION,
            animationTimingFunction: TIMING.bounce,
          },
          {
            elementId: 'g_look',
            animationAttributes: {
              opacity: 1,
            },
            animationDelay: ANIMATION_DELAY,
            animationDuration: ANIMATION_DURATION * 5,
            animationTimingFunction: TIMING.linear,
          },
          {
            elementId: 'g_contact',
            animationAttributes: {
              opacity: 1,
            },
            animationDelay: ANIMATION_DELAY,
            animationDuration: ANIMATION_DURATION * 5,
            animationTimingFunction: TIMING.linear,
          },
        ];

        const START_FRAME = 0; // 0 is the first frame

        let animationTimer = setTimeout(
          function animate(_timeline, currentFrameIndex) {
            const currentFrame = _timeline[currentFrameIndex];
            const element = SVG_EL.select(`#${currentFrame.elementId}`);

            element.animate(
              currentFrame.animationAttributes,
              currentFrame.animationDuration,
              currentFrame.animationTimingFunction,
            );

            if (currentFrameIndex < INFOPAGE_BALLOON_ANIMATION_TIMELINE.length - 1) {
              /* eslint no-param-reassign: "off" */
              animationTimer = setTimeout(
                animate,
                _timeline[currentFrameIndex + 1].animationDelay,
                INFOPAGE_BALLOON_ANIMATION_TIMELINE,
                (currentFrameIndex += 1),
              );
            } else {
              clearTimeout(animationTimer);
            }
          },
          INFOPAGE_BALLOON_ANIMATION_TIMELINE[START_FRAME].animationDelay,
          INFOPAGE_BALLOON_ANIMATION_TIMELINE,
          START_FRAME,
        );
      });
  }

  render() {
    return (
      <IntroPageArticle>
        <Helmet>
          <title>Welkom op Johan Meester zijn portfolio</title>
          <meta name="description" content="Intro pagina van Johan Meester zijn portfolio" />
        </Helmet>
        <FlexRow fullHeight>
          <FlexColumn fullHeight fluid>
            <IntroHeader>
              <h2 hidden aria-hidden="false"><FormattedMessage {...messages.title} /></h2>
              <SpeechBubble
                innerRef={
                  (d) => {
                    this.svgDiv = d;
                  }
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ isolation: 'isolate' }}
                  viewBox="0 0 891 635"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="xMinYMid"
                >
                  <Link to={'/contact'} style={{ cursor: 'pointer' }}>
                    <g id="g_contact" style={{ opacity: 0 }}>
                      <g id="g_contact__arrow">
                        <path
                          d="M 737.11 555.5 L 752.61 532.2 L 690.41 555.5 L 737.11 555.5 Z"
                          fill="#36474F"
                        />
                        <path
                          d="M 721.61 543.8 L 721.61 524.3 L 752.81 532.1"
                          fill="#556E78"
                        />
                        <path
                          d="M 729.11 526.2 L 729.11 508.6 L 721.61 524.4"
                          fill="#36474F"
                        />
                      </g>
                      <g id="g_contact__bubble">
                        <path
                          d="M 729.81 613.7 L 356.21 613.7 C 352.11 613.7 348.71 610.5 348.71 606.2 L 348.71 562.8 C 348.71 558.7 351.91 555.3 356.21 555.3 L 728.71 555.3 C 733.31 555.3 737.31 555.3 737.31 555.3 C 737.31 555.3 737.31 559.1 737.31 563.9 L 737.31 606.2 C 737.21 610.5 733.81 613.7 729.81 613.7 Z"
                          fill="#556E78"
                        />
                        <FormattedMessage {...messages.callToAction}>
                          {(message) => (
                            <text
                              transform="translate(544 593.37)"
                              fontFamily="Open Sans"
                              fontWeight="400"
                              fontSize="23"
                              fill="#fff"
                              textAnchor="middle"
                            >
                              {message}
                            </text>
                          )}
                        </FormattedMessage>
                        <line
                          x1="372.1"
                          y1="604.7"
                          x2="720.4"
                          y2="604.7"
                          vectorEffect="non-scaling-stroke"
                          strokeWidth="1.53"
                          stroke="#FFF"
                          strokeMiterlimit="10"
                        />
                      </g>
                    </g>
                  </Link>
                  <g id="g_look" style={{ opacity: 0 }}>
                    <g id="g_look__arrow">
                      <path
                        d="M 411.59 450.4 L 348.93 427.1 L 364.54 450.4 L 411.59 450.4 Z"
                        fill="#36474F"
                      />
                      <path
                        d="M 348.93 427.1 L 380.36 419.3 L 380.36 438.8"
                        fill="#556E78"
                      />
                      <path
                        d="M 380.36 419.4 L 372.8 403.6 L 372.8 421.3"
                        fill="#36474F"
                      />
                    </g>
                    <g id="g_look__bubble">
                      <path
                        d="M 364.57 501.1 L 364.57 458.8 C 364.57 454.2 364.57 450.2 364.57 450.2 C 364.57 450.2 368.37 450.2 373.17 450.2 L 745.67 450.2 C 749.77 450.2 753.17 453.4 753.17 457.7 L 753.17 501.1 C 753.17 505.2 749.97 508.6 745.67 508.6 L 371.97 508.6 C 367.97 508.6 364.47 505.4 364.57 501.1 Z"
                        fill="#556E78"
                      />
                      <FormattedMessage {...messages.look}>
                        {
                          (message) => (
                            <text
                              transform="translate(559 488.55)"
                              fontFamily="Open Sans"
                              fontWeight="400"
                              fontSize="23"
                              fill="#fff"
                              textAnchor="middle"
                            >
                              {message}
                            </text>
                          )
                        }
                      </FormattedMessage>
                    </g>
                  </g>
                  <g id="g_big_bubble">
                    <path
                      id="g_big_bubble__p1"
                      d="M 0 111.6 L 0 321.1 L 0 321.1 L 0 108 L 0 111.6 L 0 111.6 Z"
                      fill="#273238"
                    />
                    <path
                      id="g_big_bubble__p2"
                      d="M 237.8 549.5 L 237.8 549.5 L 117.8 549.5 L 117.8 549.5"
                      fill="#465A65"
                    />
                    <path
                      id="g_big_bubble__p3"
                      d="M 78.6 635 L 78.6 635 L 191.9 635 L 191.9 635"
                      fill="#36474F"
                    />
                    <path
                      id="g_big_bubble__p4"
                      d="M 8 503.2 L 8 503.2 L 118.5 503.2 L 118.5 503.2"
                      fill="#465A65"
                    />
                    <path
                      id="g_big_bubble__p5"
                      d="M 278.4 0 L 278.4 0 L 226.4 96.7 L 226.4 96.7 L 278.4 0 Z"
                      fill="#556E78"
                    />
                    <path
                      id="g_big_bubble__p6"
                      d="M 891 12.1 C 891 5.5 885.6 0 878.9 0 L 278.4 0 L 227 96.6 L 878.9 96.6 C 885.5 96.6 891 91.2 891 84.5 L 891 12.1 L 891 12.1 L 891 12.1 Z"
                      fill="#556E78"
                      opacity="0"
                    />
                  </g>
                  <g
                    id="g_welcome"
                    transform={this.props.locale === 'nl' ? 'translate(0 0)' : 'translate(30 0)'}
                  >
                    <FormattedMessage {...messages.greeting}>
                      {
                        (message) => (
                          <text
                            transform="translate(235.72 201.41)"
                            fontFamily="Open Sans"
                            fontWeight="400"
                            fontSize="98"
                            fill="#556e78"
                          >
                            {message}
                          </text>
                        )
                      }
                    </FormattedMessage>
                    <FormattedMessage {...messages.greeting}>
                      {
                        (message) => (
                          <text
                            transform="translate(231.23 195.44)"
                            fontFamily="Open Sans"
                            fontWeight="400"
                            fontSize="98"
                            fill="#95c11f"
                          >
                            {message}
                          </text>
                        )
                      }
                    </FormattedMessage>
                  </g>
                  <g id="g_name" style={{ opacity: 0 }}>
                    <FormattedMessage {...messages.intro} values={{ name: 'Johan Meester' }}>
                      {
                        (message) => (
                          <text
                            id="g_name__text"
                            transform={this.props.locale === 'nl' ? 'translate(870 270.6)' : 'translate(840 270.6)'}
                            fontFamily="Open Sans"
                            fontWeight="400"
                            fontSize="70"
                            fill="#fff"
                            textAnchor="end"
                          >
                            {message}
                          </text>
                        )
                      }
                    </FormattedMessage>
                    <defs>
                      <mask id="g_name__mask">
                        <circle cx="820" cy="72" fill="#fff" r="50" />
                      </mask>
                    </defs>
                    <image
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xlinkHref={MyPicture}
                      preserveAspectRatio="none"
                      x="770"
                      y="22"
                      width="100"
                      height="100"
                      mask="url('#g_name__mask')"
                    />
                  </g>
                  <FormattedMessage {...messages.trade}>
                    {
                      (message) => (
                        <text
                          id="t_occupation"
                          transform={this.props.locale === 'nl' ? 'translate(870 321)' : 'translate(840 321)'}
                          fill="#fff"
                          style={{
                            fontFamily: 'Open Sans',
                            fontSize: '29px',
                            fontWeight: 400,
                            opacity: 0,
                          }}
                          textAnchor="end"
                        >
                          {message}
                        </text>
                      )
                    }
                  </FormattedMessage>
                </svg>
              </SpeechBubble>
            </IntroHeader>
          </FlexColumn>
        </FlexRow>
      </IntroPageArticle>
    );
  }
}

HomePage.propTypes = {
  locale: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  locale: makeSelectLocale(),
});

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
