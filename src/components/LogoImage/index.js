import React from 'react';

import Div from './Div';
import imgSrc from '../../ELR_logo.png';

function LogoImage() {
  return (
    <Div>
    	<img src={imgSrc} alt="" />
    </Div>
  );
}

export default LogoImage;
