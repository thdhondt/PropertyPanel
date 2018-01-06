import styled from 'styled-components';
import { colors, themed } from '@atlaskit/theme'

const getColor = themed({ light: colors.N200, dark: colors.DN90 });

const HeaderWrapper = styled.span`
  text-align: left;
  padding:10px;
  font-size:16px;
  font-family:helvetica;
  color: ${getColor()};
  font-weight: 600;
`;
export default HeaderWrapper;