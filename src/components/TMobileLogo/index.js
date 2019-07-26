import React from 'react';

import Div from './Div';
import imgSrc from '../../t-mobile-logo.png';

function TMobileLogo() {
  return (
    <Div>
    	<img src={imgSrc} alt="T-Mobile is our founding sponsor" />
    </Div>
  );
}

export default TMobileLogo;
