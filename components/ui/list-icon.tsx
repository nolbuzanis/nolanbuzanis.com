import styled, { DefaultTheme, withTheme } from 'styled-components';

interface ListIconProps {
  theme: DefaultTheme;
  active: boolean;
}

const Svg = styled('svg')<{ active: boolean }>`
  opacity: ${(props) => (props.active ? '1' : '0.25')};
`;

const ListIcon = ({ theme, active }: ListIconProps): JSX.Element => (
  <Svg
    width={26}
    height={26}
    viewBox='0 0 26 26'
    fill={theme.text}
    active={active}
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M4.33331 15.1665H8.41174V10.8332H4.33331V15.1665ZM4.33331 20.5832H8.41174V16.2498H4.33331V20.5832ZM4.33331 9.74984H8.41174V5.4165H4.33331V9.74984ZM9.43135 15.1665H21.6666V10.8332H9.43135V15.1665ZM9.43135 20.5832H21.6666V16.2498H9.43135V20.5832ZM9.43135 5.4165V9.74984H21.6666V5.4165H9.43135Z' />
  </Svg>
);

export default withTheme(ListIcon);
