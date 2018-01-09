import styled from 'styled-components';

const Collapse = styled.div`
  -moz-transition: height 0.1s;
  -ms-transition: height 0.1s;
  -o-transition: height 0.1s;
  -webkit-transition: height 0.1s;
  transition: height 0.1s;
  height: ${props => (props.height)};
  overflow: hidden;
`;

export default Collapse;