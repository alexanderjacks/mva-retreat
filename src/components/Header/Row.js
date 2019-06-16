import styled from 'styled-components';

const Row = styled.header`
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  min-width: 100vw;
  
  display: flex;
  flex-direction: row-reverse;

  text-align: center;
  -webkit-justify-content: flex-end; /_ Safari _/
  justify-content:         flex-end;
  -webkit-align-items: center; /_ Safari _/
  align-items:         center;


  background: #f15d4e;

  padding-bottom: 2vh;

`;

export default Row;