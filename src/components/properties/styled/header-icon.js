import styled from 'styled-components';
import { colors, themed } from '@atlaskit/theme'

const getColor = themed({ light: colors.N200, dark: colors.DN90 });

const HeaderIcon = styled.span`
  display: inline-block;
  text-align: right;
  padding:10px;
  font-size:20px;
  font-family:helvetica;
  color: ${getColor()};
  font-weight: 1000;
`;
export default HeaderIcon;