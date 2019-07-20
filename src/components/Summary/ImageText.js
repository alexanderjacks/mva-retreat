import styled from 'styled-components';

const Imagetext = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  
  display: block;
  font-size: 2.9em;
  color: white;
  text-shadow: -2px -2px black,
			   2px -2px black,
			   -2px 2px black,
			   2px 2px black
  ;
`;

export default Imagetext;