import styled from 'styled-components';

const P = styled.p`
  color: #666d71;
  display: block;
  margin: 2rem 0 2rem 0;
  
  @media (min-resolution: 40px) {
  	text-align: center;
  }
  @media (min-resolution: 360px) {
  	text-align: left;
  }
  font-size: calc(1.05vw + 1.05vh + 1.05vmin);
  margin: 2rem 0 2rem 0;
`;

export default P;