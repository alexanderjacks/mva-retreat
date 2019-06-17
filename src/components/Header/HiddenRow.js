import styled from 'styled-components';

const HiddenRow = styled.header`
  & > Wrapper { display: none;} 
  
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  min-width: 100vw;
  

  flex-direction: row-reverse;

  text-align: center;
  -webkit-justify-content: flex-end; /_ Safari _/
  justify-content:         flex-end;
  -webkit-align-items: center; /_ Safari _/
  align-items:         center;


  background: #f15d4e;

  padding-bottom: 2vh;

`;

export default HiddenRow;