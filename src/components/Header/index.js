import React from 'react';
import userConfig from '../../../config';

import Container from '../Container';

import LogoImage from '../LogoImage';
import Social from '../Social';

import H1 from '../H1';
import H2 from '../H2';



function Header({ config }) {
  const { social } = config;

  return (
    <Container>
        <LogoImage/>
        <div class="white-bg"><H1>25 leaders. <span class="red-text">3 days.</span> Endless possibilities.</H1></div>
        <H2>REI Flagship Store, 222 Yale Ave. N,</H2><H2> Seattle, WA 98109</H2>
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