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
  font-size: calc(0.85vw + 0.85vh + 0.85vmin);
  margin: 2rem 0 2rem 0;
`;

export default P;