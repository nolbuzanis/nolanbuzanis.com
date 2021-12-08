import React from 'react';
import styled from 'styled-components';

const BoxContainer = styled.div<BoxProps>`
  position: relative;

  font-size: 2rem;
  line-height: 3.5rem;
  width: 100%;
  background: ${(props) => props.backgroundColor};
  padding: 20px;
  border-radius: 20px;
  grid-column: span ${(props) => props.size};
  grid-row: span ${(props) => props.size};
  overflow-x: hidden;
  aspect-ratio: 1;
  transition: 0.3s ease all;
  box-shadow: var(--color-shadow-elevation-medium);
  color: ${(props) => props.textColor};
  ${(props) => props.onClick && 'cursor: pointer;'}

  &:hover {
    box-shadow: var(--color-shadow-elevation-high);
  }
  @media only screen and (max-width: 66.875em) {
    padding: 15px;
    ${(props) => props.size === 4 && 'aspect-ratio: auto;'}
  }
  @media only screen and (max-width: 540px) {
    padding: 10px;
  }
`;

interface BoxProps {
  backgroundColor?: string;
  textColor?: string;
  size?: 1 | 2 | 3 | 4;
  onClick?: VoidFunction;
}

const Box = ({
  children,
  backgroundColor,
  size,
  onClick,
  textColor,
}: BoxProps & { children: React.ReactChild }): JSX.Element => (
  <BoxContainer
    backgroundColor={backgroundColor}
    size={size}
    onClick={onClick}
    textColor={textColor}
  >
    {children}
  </BoxContainer>
);

Box.defaultProps = {
  backgroundColor: 'none',
  size: 1,
  onClick: null,
  textColor: 'var(--color-text)',
};

export default Box;
