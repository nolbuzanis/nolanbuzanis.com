/* eslint-disable react/jsx-props-no-spreading */

import styled from 'styled-components';
import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';

const Pre = styled.pre`
  position: relative;
  overflow: auto;
  width: 100%;
  max-width: 744px;
  margin: 0 auto;
  padding: 32px;
  font-size: 13px;
  margin: 15px auto 50px;
  border-radius: 5px;
  font-family: 'Operator Mono', Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace;
  background: var(--color-prism-background);
  @media (max-width: 66.875em) {
    left: -26px;
  }
  @media (max-width: 45.9375em) {
    max-width: 526px;
    padding: 20px 20px;
    left: 0;
  }
  @media (max-width: 33.75em) {
    min-width: 100%;
    margin: 0 auto 20px;
    padding: 25px 20px;
    border-radius: 0;
  }
  * > span {
    font-size: 13px;
    line-height: 1.4;
    font-family: 'Operator Mono', Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace;
  }
`;

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  display: table-cell;
  //text-align: right;
  // padding-right: 1em;
  user-select: none;
  opacity: 0.3;
  width: 32px;
  color: #dcd9e6;
  @media (max-width: 33.75em) {
    display: none;
  }
`;

const LineContent = styled.span`
  display: table-cell;
`;

const Code = ({ children }: { children: React.ReactElement }): JSX.Element => (
  <Highlight {...defaultProps} code={children.props.children} language='jsx' theme={undefined}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <Pre className={className} style={style}>
        {tokens.map((line, i) => (
          <Line {...getLineProps({ line, key: i })}>
            <LineNo>{i + 1}</LineNo>
            <LineContent>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </LineContent>
          </Line>
        ))}
      </Pre>
    )}
  </Highlight>
);
export default Code;
