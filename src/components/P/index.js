import styled from 'styled-components';

const P = styled.p`
  color: #666d71;
  display: block;
  margin: 2rem 0 2rem 0;
  
  @media (min-resolution: 40px) {
  	text-align: center;
  }
  @media (min-resolution: 361px) {
  	text-align: left;
  }
  font-size: 1.6em;
  margin: 50px 0 0 0;
  text-align: center;
`;

export default P;