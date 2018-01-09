import styled from 'styled-components';

const Indent = styled.ul`
  padding: 0;
  margin:0;

  // Do not style children of same type
  & & {
    margin-left: 2em;
  }
`;
export default Indent;