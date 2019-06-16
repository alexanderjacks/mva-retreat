import React from 'react';
import userConfig from '../../../config';

import Container from '../Container';
import HeaderImage from '../HeaderImage';
import Social from '../Social';
import H1 from '../H1';
import H2 from '../H2';
import P from './P';
import Link from './Link';
import Wrapper from './Wrapper';

function Header({ config }) {
  const { title, author, description, social } = config;

  return (
    <Container>
      <Wrapper>
        {userConfig.showHeaderImage && (
          <HeaderImage/>
        )}
        <H2><a href={social.website}>{author}</a></H2>
        <P>presents the</P>
        <H1><Link to="/">{title}</Link></H1>
        <H2>{description}</H2>
        {social &&
          <Social
            website={social.website}
            github={social.github}
            twitter={social.twitter}
            linkedin={social.linkedin}
          />
        }
      </Wrapper>
    </Container> 
  );
}

export default Header;