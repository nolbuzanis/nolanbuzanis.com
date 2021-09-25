/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/jsx-props-no-spreading */

import styled from 'styled-components';
import React from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import CopyIcon from '../ui/copy-code-icon';

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
  > button {
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

interface CodeBlockProps {
  children: {
    props: {
      children: string;
      className: string;
    };
  };
}

const mapToLanguage = {
  js: 'javascript',
  jsx: 'jsx',
};

const Code = ({
  children: {
    props: { children, className },
  },
}: CodeBlockProps): JSX.Element => {
  let language: Language;
  if (className) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, langName] = className.split('-');
    if (mapToLanguage[langName]) {
      language = mapToLanguage[langName];
    }
  }

  return (
    <Highlight {...defaultProps} code={children} language={language} theme={undefined}>
      {({ className: classname, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={classname} style={style}>
          <CopyIcon text={children} />
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
};
export default Code;
