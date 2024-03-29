/* eslint-disable @typescript-eslint/indent */
import styled from 'styled-components';

const ThemeButton = styled.button`
  opacity: 0.5;
  position: relative;
  border-radius: 5px;
  width: 36px;
  height: 20px;
  transition: opacity 0.25s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 20px;
  &: hover {
    opacity: 1;
  }
  @media only screen and (max-width: 540px) {
    transform: scale(0.708);
    margin-left: 10px;
  }
`;

const MainCircle = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: ${(props) => (props.theme.name === 'dark' ? '4px solid #fff' : '2px solid #000')};
  background: var(--color-text);
  transform: ${(props) => (props.theme.name === 'light' ? 'scale(1)' : 'scale(0.55)')};
  transition: all 0.45s ease;
  overflow: ${(props) => (props.theme.name === 'light' ? 'hidden' : 'visible')};

  &:after {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    margin: -4px 0px 0px -4px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: ${(props) => (props.theme.name === 'dark' ? 'scale(1)' : 'scale(0)')};
    transition: all 0.35s ease 0s;
    ${(props) => {
      const { text } = props.theme;

      return `box-shadow: 0 -23px 0 ${text}, 0 23px 0 ${text}, 23px 0 0 ${text},
      -23px 0 0 ${text}, 15px 15px 0 ${text}, -15px 15px 0 ${text},
      15px -15px 0 ${text}, -15px -15px 0 ${text};`;
    }}
  }
`;

const WhiteCircle = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 0;
  background: var(--color-background);
  transform: translate(${(props) => (props.theme.name === 'dark' ? '14px, -14px' : '0, 0')});
  opacity: ${(props) => (props.theme.name === 'dark' ? '0' : '1')};
  right: 0px;
  top: -6px;
  transition: background 0.25s ease, color 0.25s ease, transform 0.45s ease;
  overflow: visible;
`;

interface ThemeIconProps {
  onClick: () => void;
}

const ThemeIcon = ({ onClick }: ThemeIconProps): JSX.Element => (
  <ThemeButton onClick={onClick} aria-label='Switch theme'>
    <MainCircle />
    <WhiteCircle />
  </ThemeButton>
);

export default ThemeIcon;
