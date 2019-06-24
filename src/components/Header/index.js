import React from 'react';
import Container from '../Container';
import LogoImage from '../LogoImage';
import H1 from '../H1';
import H2 from '../H2';

function Header() {
  
  return (
    <Container>
        <LogoImage/>
        <div class="white-bg"><H1>25 leaders. <span class="red-text">3 days.</span> Endless possibilities.</H1></div>
        <span class="centermax">
        </span>
        <span class="centermax">
          <H2> Seattle, WA</H2>
        </span>
    </Container>
  );
}

export default Header;