import styled from 'styled-components';
import { colors, themed } from '@atlaskit/theme'

const getColor = themed({ light: colors.N200, dark: colors.DN90 });
const getDisabledColor = themed({ light: colors.N60, dark: colors.DN300 });

const Label = styled.span`
  display: inline-block;
  width: 75px;
  text-align: right;
  padding:10px;
  font-size:12px;
  font-family:helvetica;
  color: ${props => (props.isDisabled ? getDisabledColor(props) : getColor(props))};
  font-weight: 600;
`;
export default Label;