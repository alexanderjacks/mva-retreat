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
			<div class="centermax">
	          	<H1>
	          		August 21-23, 2019
	          	</H1>
			</div>
			<div class="centermax">
				<H2>
					25 Leaders.
					<span class="red-text">
						&nbsp;3 Days.&nbsp;
					</span>
					Endless Possibilities
				</H2>
			</div>
		</Link>
    </Container>
  );
}

export default Header;