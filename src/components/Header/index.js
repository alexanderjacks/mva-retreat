import React from 'react';
import Container from '../Container';
import LogoImage from '../LogoImage';
import H1 from '../H1';
import H2 from '../H2';

function Header() {
  
  return (
    <Container>
        <LogoImage/>
        <div class="white-bg">
          <H1>
            25 leaders. 
            <span class="red-text">&nbsp;3 days.&nbsp;</span> 
            Endless possibilities.
          </H1>
        </div>
        <span class="centermax">
        </span>
        <span class="centermax">
          <div><H2>
            Retreat location
          </H2>
          <H2>
            Daybreak Star Indian Cultural Center <br/><a target="_blank" href="https://goo.gl/maps/dFVW3WNN34G1kcrc6">5011 Bernie Whitebear Way, Seattle, WA 98199</a>
          </H2>
          </div>
          <div><H2>
            Lodging
          </H2>
          <H2>
            SpringHill Suites <br/><a target="_blank" href="https://goo.gl/maps/QVs8zJqPAozhuQmg8">1800 Yale Ave., Seattle, WA 98101</a>
          </H2>
          </div>
        </span>
    </Container>
  );
}

export default Header;