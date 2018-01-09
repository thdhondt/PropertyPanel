import styled, {keyframes} from 'styled-components';
import { colors, themed } from '@atlaskit/theme'

const getColor = themed({ light: colors.N200, dark: colors.DN90 });

const rotateDown = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(90deg);
  }
`;

const rotateUp = keyframes`
  from {
    transform: rotate(90deg);
  }

  to {
    transform: rotate(0deg);
  }
`;



const HeaderIcon = styled.span`
  display: inline-block;
  transformOrigin:"50% 50%"

  text-align: rigt;
  padding:2px;
  font-size:20px;
  font-family:helvetica;
  color: ${getColor()};
  font-weight: 1000;
  animation: ${props => (props.up ? rotateUp : rotateDown)} 0.1s linear;
  animation-fill-mode: forwards;  
`;
export default HeaderIcon;