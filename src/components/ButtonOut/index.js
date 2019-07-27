import styled from 'styled-components';

const ButtonOut = styled.a`
  border: 1px solid #bfc8d2;
  border-radius: 25px;
  margin: 0 10px;
  padding: 10px 25px;

  background-image: radial-gradient(#357B90, #1A486D);
  
  display: inline-block;
  color: #fff;
  font-size: calc(2vh + 10px);
  font-weight: 700;
  text-decoration: none;
  

  &:hover {
    border-color: #000;
  }
`;

export default ButtonOut;