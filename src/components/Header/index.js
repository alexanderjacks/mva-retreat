import React from 'react';

import Container from '../Container';
import userConfig from '../../../config';

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
        <span class="centermax">
        </span>
        <span class="centermax">
          <H2> Seattle, WA</H2>
        </span>
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