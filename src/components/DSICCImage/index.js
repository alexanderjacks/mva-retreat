import React from 'react';

import Div from './Div';
import imgSrc from '../../SpringHill.jpeg';

function DSICCImage() {
  return (
    <Div>
    	<img src={imgSrc} alt="SpringHill Suites, Seattle, Washington, USA" />
    </Div>
  );
}

export default DSICCImage;