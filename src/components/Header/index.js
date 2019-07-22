import React from 'react';
import Container from '../Container';
import LogoImage from '../LogoImage';
import H1 from '../H1';
import H2 from '../H2';
import Link from './Link';

function Header() {
  
  return (
    <Container>
        <Link to="/">
          <LogoImage/>
        </Link>
    </Container>
  );
}

export default Header;