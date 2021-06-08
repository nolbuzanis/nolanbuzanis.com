import styled from 'styled-components';

export default styled.h2`
  max-width: 680px;
  margin: 0 auto;
  padding: 25px 0 18px;
  color: ${(props) => props.theme.textColor};
  word-break: keep-all;
  font-size: 32px;
  line-height: 1.333;
  font-weight: bold;
  font-family: Merriweather, Georgia, serif;
`;
