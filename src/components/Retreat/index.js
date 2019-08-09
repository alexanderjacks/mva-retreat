import React from 'react';

import Container from '../Container';
import DSICCImage from '../DSICCImage';
import H2 from '../H2';
import P from '../P';

function Retreat() {
  
  return (
    <Container>
    <div class="blue2-bg top-clearance bottom-clearance">
        <div class="centermax">
          	<H2><span class="white-text">
          		Retreat Location
          		</span>
          	</H2>
        </div>
        <div class="centerpad">
          	<div class="keep-50w">
          		<DSICCImage />
          	</div>
          	<div class="keep-50w">
	          	<H2 class="centerpad"><span class="white-text">
	            	SpringHill Suites
	            	</span>
	          	</H2>
	          	<P>
                <a href="https://www.marriott.com/hotels/travel/seadt-springhill-suites-seattle-downtown-south-lake-union/" target="_blank">
                <p class="white-text">
                1800 Yale Ave.,
	            	</p>
                <p class="white-text">
                Seattle, WA 98101
                </p>
                </a>
	          	</P>
          </div>
        </div>
    </div>
    </Container>
  );
}

export default Retreat;