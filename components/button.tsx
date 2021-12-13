import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';
import { ReactNode } from 'react';

const StyledButton = styled.button<{ disabled: boolean; width: string }>`
  position: relative;
  height: 45px;
  width: ${(props) => props.width || '200px'};
  border: none;
  background-color: #2aaa8a;
  border-radius: 5px;
  font-size: 18px;
  padding: 10px;
  color: ${(props) => (props.disabled ? '#aaa' : 'white')};
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
}

const Button = ({
  disabled,
  loading,
  onClick,
  width,
  type,
  children,
}: ButtonProps): JSX.Element => (
  <StyledButton disabled={disabled || loading} onClick={onClick} width={width} type={type}>
    {loading ? <ClipLoader size='20' color='white' /> : children}
  </StyledButton>
);

Button.defaultProps = {
  disabled: false,
  loading: false,
  type: 'button',
  onClick: () => {},
};

export default Button;
