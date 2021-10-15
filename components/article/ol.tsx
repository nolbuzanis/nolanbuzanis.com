import { ReactChild } from 'react';
import styled from 'styled-components';

const StyledOl = styled.ol`
  max-width: 680px;
  margin: 0 auto;
  padding: 15px 0px 30px 30px;
  color: var(--color-text);
  word-break: keep-all;
  font-size: 18px;
  list-style: none;
  font-weight: 400;
  line-height: 1.756;
  > li {
    position: relative;
    padding-bottom: 15px;

    &:before {
      counter-increment: list 1;
      content: counter(list) '.';
      font-weight: 600;
      position: absolute;
      left: -3rem;
      top: -0.3rem;
      font-size: 2rem;
    }
  }

  @media (max-width: 66.875em) {
    max-width: 507px;
  }
  @media (max-width: 45.9375em) {
    max-width: 486px;
  }
`;

interface OrderedListProps {
  children: ReactChild;
}

const OrderedList = ({ children }: OrderedListProps): JSX.Element => (
  <StyledOl>{children}</StyledOl>
);

export default OrderedList;
