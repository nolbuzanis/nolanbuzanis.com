import styled from 'styled-components';

const Gradient = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 590px;
  z-index: 0;
  pointer-events: none;
  background: ${(props) => props.theme.gradient};
  transition: background 0.25s ease, color 0.25s ease;
`;

export default Gradient;
