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
  line-height: 1.756;
  max-width: 680px;
  @media (max-width: 66.875em) {
    max-width: 507px;
  }
  @media (max-width: 45.9375em) {
    max-width: 486px;
  }

  > li {
    position: relative;
    padding-bottom: 15px;
    @media (max-width: 45.9375em) {
      padding-left: 30px;
    }

    &:before {
      content: '';
      position: absolute;
      left: -30px;
      top: 8px;
      height: 8px;
      width: 8px;
      background: var(--color-article);
      @media (max-width: 45.9375em) {
        left: 0;
      }
    }
  }
`;
