import styled, { DefaultTheme, withTheme } from 'styled-components';

interface GridIconProps {
  theme: DefaultTheme;
  active: boolean;
}

const Svg = styled('svg')<{ active: boolean }>`
  opacity: ${(props) => (props.active ? '1' : '0.25')};
`;

const GridIcon = ({ theme, active }: GridIconProps): JSX.Element => (
  <Svg
    width={26}
    height={26}
    viewBox='0 0 26 26'
    fill={theme.text}
    active={active}
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M4.33337 13.8424H12.0371V5.4165H4.33337V13.8424ZM4.33337 20.5832H12.0371V15.5276H4.33337V20.5832ZM13.963 20.5832H21.6667V12.1572H13.963V20.5832ZM13.963 5.4165V10.4721H21.6667V5.4165H13.963Z' />
  </Svg>
);

export default withTheme(GridIcon);
