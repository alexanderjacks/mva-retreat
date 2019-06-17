import React from 'react';
import userConfig from '../../../config';

import Container from '../Container';

import LogoImage from '../LogoImage';
import Social from '../Social';
import Row from './Row';

import H1 from '../H1';

import Link from './Link';


function Header({ config }) {
  const { social } = config;

  return (
    <Container>
      
      <Row>
        <Link to="/">
          <LogoImage/>
        </Link>
      </Row>
        <H1>REI Flagship Store, 222 Yale Ave. N, Seattle, WA 98109</H1>
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