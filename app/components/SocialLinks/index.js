import React from 'react';
import ReactTooltip from 'react-tooltip';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import ExternalLink from './ExternalLink';
import StyledUL from './StyledUL';
import StyledLI from './StyledLI';
import messages from './messages';

import ThemeContext from '../../styles/theme';

const Nav = styled.nav`
  @supports (display: flex) {
    align-items: center;
    display: flex;
  }
`;

class SocialLinks extends React.PureComponent {
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
        icon: 'linkedin',
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
      <Nav aria-labelledby="SocialLinks-title">
        <FormattedMessage {...messages.header}>
          {
            (message) => <h1 id="SocialLinks-title" hidden aria-hidden="false">{message}</h1>
          }
        </FormattedMessage>
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
                <ThemeContext.Consumer>
                  {
                    ({ pageHeader }) => (<ExternalLink
                      href={externalLink.url}
                      faIcon={externalLink.icon}
                      description={externalLink.name}
                      color={pageHeader.backgroundColor}
                    />)
                  }
                </ThemeContext.Consumer>
              </StyledLI>
            ))
          }
        </StyledUL>
        <ReactTooltip />
      </Nav>
    );
  }
}

export default SocialLinks;
