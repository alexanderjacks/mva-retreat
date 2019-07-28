import React from 'react';
import Container from '../Container';
import Social from '../Social';
import H1 from '../H1';

function Footer({ config }) {
  const { social } = config;

  return (
    <Container>
        <div class="white-bg"><H1>Connect. Understand. Serve.</H1><H1><span class="red-text">Minority Vets.</span></H1></div>
        {social &&
          <Social
            website={social.website}
            github={social.github}
            twitter={social.twitter}
            linkedin={social.linkedin}
          />
        }
        <span class="centermax">
          <a href="http://www.alexanderjacks.info/"><p> Built by Alex Jacks Apps</p></a>
        </span>
    </Container>
  );
}

export default Footer;