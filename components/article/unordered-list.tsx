import styled from 'styled-components';

export default styled.ul`
  list-style: none;
  counter-reset: list 0;
  color: var(--color-article);
  position: relative;
  padding: 15px 0px 30px 30px;
  transition: background 0.25s ease, color 0.25s ease;
  margin: 0px auto;
  font-size: 18px;
  width: 100%;
  max-width: 680px;

  > li {
    position: relative;
    padding-bottom: 15px;

    &:before {
      content: '';
      position: absolute;
      left: -30px;
      top: 8px;
      height: 8px;
      width: 8px;
      background: var(--color-article);
    }
  }
`;
