import React from 'react';

import FeaturedImage from '../FeaturedImage';
import Wrapper from './Wrapper';
import Link from './Link';
import ImageText from './ImageText';


function Summary({title, slug, image}) {
  return (
    <Wrapper>
        {image &&
          <Link to={slug}>
            <FeaturedImage sizes={image.childImageSharp.sizes}/>
          </Link>
        }
    </Wrapper>
  );
}

export default Summary;