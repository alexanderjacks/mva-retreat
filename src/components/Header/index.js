import React from 'react';
import userConfig from '../../../config';

import Container from '../Container';
import HeaderImage from '../HeaderImage';
import Social from '../Social';
import Row from './Row';
import H1 from '../H1';
import H2 from '../H2';
import P from './P';
import Link from './Link';
import Wrapper from './Wrapper';

function Header({ config }) {
  const { title, author, description, social } = config;

  return (
    <Container>
      <Row>
        <Wrapper>
          {userConfig.showHeaderImage && (
            <HeaderImage/>
          )}
        </Wrapper>
        <div>
          <H2><a href={social.website}>{author}</a></H2>
          <P>presents the</P>
        </div>
      </Row>
      <Link to="/"><H1>{title}</H1><H1>2019</H1></Link>
        <H2>{description}</H2>
        <H2>REI Flagship Store, 222 Yale Ave. N, Seattle, WA 98109</H2>
        {social &&
          <Social
            website={social.website}
            github={social.github}
            twitter={social.twitter}
            linkedin={social.linkedin}
          />
        }
    </Container>
  );
}

export default Header;