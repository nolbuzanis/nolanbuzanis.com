import styled from 'styled-components';

interface InputProps {
  value: string;
  onChange: (string) => void;
  label: string;
  id: string;
  // eslint-disable-next-line react/require-default-props
  width?: string;
  autoComplete?: 'on' | 'off';
  type?: 'email' | 'text' | 'tel' | 'password';
  errorText?: string;
}

const Container = styled.div<{ width: string }>`
  width: ${(props) => props.width || '100%'};
  margin: 0 20px 0 0;
  color: var(--color-article);
  @media only screen and (max-width: 540px) {
    margin: 0 0 25px 0;
  }
`;

const Label = styled.label`
  display: block;
  opacity: 0.7;
  font-size: 14px;
  margin-bottom: 8px;
  margin-left: 5px;
`;
const StyledInput = styled.input`
  border: none;
  background: none;
  padding: 10px;
  width: 100%;
  height: 45px;
  line-height: 45px;
  font-size: 16px;
  border: 1px solid var(--color-reading-time);
  border-radius: 5px;
  color: var(--color-article);

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition: 'color 9999s ease-out, background-color 9999s ease-out';
    -webkit-transition-delay: 9999s;
  }

  &:focus,
  &:hover,
  &:active {
    outline: none;
    padding: 9px;
    border: 2px solid #3d9970;
  }
`;

const ErrorLabel = styled.span`
  display: block;
  position: relative;
  height: 0;
  color: var(--color-title-hover);
  font-size: 12px;
  top: 5px;
`;

const Input = ({
  id,
  value,
  onChange,
  label,
  width,
  autoComplete,
  type,
  errorText,
}: InputProps): JSX.Element => (
  <Container width={width}>
    <Label htmlFor={id}>{label}</Label>
    <StyledInput
      key={id}
      name={id}
      value={value}
      onChange={onChange}
      type={type}
      autoComplete={autoComplete}
    />
    {errorText && <ErrorLabel>{errorText}</ErrorLabel>}
  </Container>
);

Input.defaultProps = {
  autoComplete: 'off',
  type: 'text',
  errorText: '',
};

export default Input;
