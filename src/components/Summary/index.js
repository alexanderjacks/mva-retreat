import React from 'react';

import FeaturedImage from '../FeaturedImage';
import Wrapper from './Wrapper';
import Link from './Link';
import ImageText from './ImageText';


function Summary({date, title, excerpt, slug, image}) {
  return (
    <Wrapper>
          <Link to={slug}>
        <ImageText>{title}</ImageText>
          </Link>
        {image &&
          <Link to={slug}>
            <FeaturedImage sizes={image.childImageSharp.sizes}/>
          </Link>
        }
        
    </Wrapper>
  );
}

export default Summary;