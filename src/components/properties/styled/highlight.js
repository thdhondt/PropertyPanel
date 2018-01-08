import styled from 'styled-components';

const Highlight = styled.div`
  border-radius: 10px;
  background: transparent;
  border: 2px solid;
  border-color: ${props => (props.on ? 'skyblue' : 'transparent')};
`;
export default Highlight;