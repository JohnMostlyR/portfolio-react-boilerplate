import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import { FormattedMessage } from 'react-intl';

import ExternalLink from './ExternalLink';
import Aside from './Aside';
import Header from './Header';
import StyledUL from './StyledUL';
import StyledLI from './StyledLI';
import messages from './messages';

class SocialLinks extends Component {
  componentDidMount() {
    if (this.list.children.length) {
      this.playAnimation(this.list.children);
    }
  }

  playAnimation = (links) => {
    const INDEX = 0; // starting node index
    const START_DELAY = 3000; // milliseconds;
    const DELAY = 100; // milliseconds;

    /* eslint no-param-reassign: "off" */
    setTimeout(function a(nodes, idx) {
      nodes[idx].style.transform = 'scale(1.5)';

      /* eslint consistent-return: "off" */
      setTimeout(() => {
        nodes[idx].style.removeProperty('transform');
        if (idx < nodes.length - 1) {
          setTimeout(a, DELAY, nodes, idx += 1);
        } else {
          return true;
        }
      }, DELAY);
    }, START_DELAY, links, INDEX);
  };

  render() {
    const externalLinks = [
      {
        icon: 'free-code-camp',
        name: 'freeCodeCamp',
        url: 'https://www.freecodecamp.org/mensae',
      },
      {
        icon: 'github',
        name: 'GitHub',
        url: 'https://github.com/Mensae',
      },
      {
        icon: 'linkedin-square',
        name: 'LinkedIn',
        url: 'https://nl.linkedin.com/in/jmeester',
      },
      {
        icon: 'codepen',
        name: 'Codepen',
        url: 'https://codepen.io/jmeester',
      },
    ];

    return (
      <Aside>
        <Header><FormattedMessage {...messages.header} /></Header>
        <StyledUL
          innerRef={
            (e) => {
              this.list = e;
            }
          }
        >
          {
            externalLinks.map((externalLink) => (
              <StyledLI
                key={externalLink.url}
                data-tip={externalLink.name}
              >
                <ExternalLink
                  href={externalLink.url}
                  faIcon={externalLink.icon}
                  description={externalLink.name}
                />
              </StyledLI>
            ))
          }
        </StyledUL>
        <ReactTooltip />
      </Aside>
    );
  }
}

export default SocialLinks;
