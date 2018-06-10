import React from 'react';
import backGround from '../images/polka-dots.png';

/**
 * Theme
 */

export const theme = Object.freeze({
  form: {
    backgroundColor: '#aedd2c',
    button: {
      backgroundColor: '#f63',
      color: '#fff',
      iconColor: '#f63',
    },
    color: '#000',
    errorMessageColor: 'red',
    iconColor: '#f63',
  },
  inlineLink: {
    color: '#00599e',
    textShadowColor: '#fff',
  },
  link: {
    borderColor: {
      odd: '#00599e',
      even: '#09310b',
    },
    color: {
      odd: '#00599e',
      even: '#09310b',
    },
  },
  loader: {
    backgroundColor: '#465a65',
    color: '#aedd2c',
  },
  primaryColor: '#465a65',
  pageHeader: {
    backgroundColor: '#465a65',
    color: '#aedd2c',
  },
  project: {
    backgroundColor: {
      odd: '#aedd2c',
      even: '#09f',
    },
    color: {
      odd: '#000',
      even: '#000',
    },
    media: {
      backgroundColor: {
        odd: '#09f',
        even: '#aedd2c',
      },
    },
  },
  site: {
    background: {
      color: '#fff',
      gradient: 'linear-gradient(-120deg, #fff, #d7f1ff)',
      image: backGround,
      repeat: ['repeat', 'no-repeat'],
      size: ['100px', 'contain'],
    },
    navigation: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      borderColor: '#f63',
      link: {
        backgroundColor: '#f63',
        color: '#000',
        iconColor: '#f63',
      },
    },
  },
  siteHeader: {
    backgroundColor: '#465a65',
    color: '#fff',
  },
  speechBubble: {
    backgroundColor: '#aedd2c',
    color: '#000',
  },
});

const ThemeContext = React.createContext();

export default ThemeContext;
