import React from 'react';

import Container from '../Container';
import ButtonOut from '../ButtonOut';
import TMobileLogo from '../TMobileLogo';
import H2 from '../H2';
import P from '../P';

function Sponsors() {
  
  return (
    <Container>
    <div class="top-clearance-xl bottom-clearance">
        <div class="centermax">
          	<H2>
              <span class="red-text">
          		Sponsors
          		</span>
          	</H2>
        </div>
        <div class="centermax">
          	<div class="keep-50w">
	          	<P class="centermax">
          		  <TMobileLogo />
                <span class="red-text">
	            	Founding Sponsor
	            	</span>
	          	</P>
          </div>
        </div>
        <div class="centermax">
            <div class="keep-50w">
              <P class="centermax">
                <H2 class="red-text">
                  <span class="red-text">
                    Individual Donors
                  </span>
                </H2>
                <p class="red-text">Robert White</p>
                <p class="red-text">Bill Kirst</p>
              </P>
          </div>
        </div>
        <div class="centermax">
          <ButtonOut href="http://minorityvets.org/sponsorelr/" target="_blank" rel="noopener" >
            Become a Sponsor
          </ButtonOut>
        </div>
    </div>
    </Container>
  );
}

export default Sponsors;