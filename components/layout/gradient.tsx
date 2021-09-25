import styled from 'styled-components';

const Gradient = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 590px;
  z-index: 0;
  pointer-events: none;
  background: var(--color-gradient);
  transition: background 0.25s ease, color 0.25s ease;
`;

const BgGradient = (): JSX.Element => <Gradient />;

export default BgGradient;
