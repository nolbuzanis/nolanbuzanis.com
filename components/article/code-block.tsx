import styled from 'styled-components';

export default styled.pre`
  overflow: auto;
  width: 100%;
  max-width: 744px;
  padding: 32px;
  font-size: 13px;
  margin: 15px auto 50px;
  border-radius: 5px;
  font-family: 'Operator Mono', Consolas, Menlo, Monaco, source-code-pro, 'Courier New', monospace;
  background: #292c34;
  > code {
    color: white;
  }
`;
