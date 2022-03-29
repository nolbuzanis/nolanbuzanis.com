/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';
import { ReactNode } from 'react';

const StyledButton = styled.button<{
  disabled: boolean;
  width: string;
  shape: string;
  color: string;
  inverted: boolean;
}>`
  position: relative;
  height: 45px;
  width: ${(props) => props.width || '200px'};
  border: none;
  background-color: ${(props) => (props.inverted ? 'white' : props.color)};
  border-radius: ${(props) => (props.shape === 'boxed' ? '5px' : '22.5px')};
  font-size: 14px;
  font-weight: 500;
  padding: 10px;
  color: ${(props) => (props.disabled ? '#aaa' : props.inverted ? props.color : 'white')};
  cursor: pointer;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.16);
  transition: color ease 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ButtonProps {
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  // eslint-disable-next-line react/require-default-props
  width?: string;
  type?: 'button' | 'submit';
  children: ReactNode;
  shape?: 'rounded' | 'box';
  color?: string;
  inverted?: boolean;
}

const Button = ({
  disabled,
  loading,
  onClick,
  width,
  type,
  children,
  shape,
  color,
  inverted,
}: ButtonProps): JSX.Element => (
  <StyledButton
    disabled={disabled || loading}
    onClick={onClick}
    width={width}
    type={type}
    shape={shape}
    color={color}
    inverted={inverted}
  >
    {loading ? <ClipLoader size='20' color='white' /> : children}
  </StyledButton>
);

Button.defaultProps = {
  disabled: false,
  loading: false,
  type: 'button',
  onClick: () => {},
  shape: 'box',
  color: '#2aaa8a',
  inverted: false,
};

export default Button;
