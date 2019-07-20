import styled from 'styled-components';

const Card = styled.div`
  background: #fff;
  box-shadow: 0 1px 5px rgba(0,0,0,0.05);

  @media only screen and (max-width: 1870px) {
    border-left: none;
    border-right: none;
    padding: 75px 15px;
    margin-bottom: 30px;
  }
`;

export default Card;