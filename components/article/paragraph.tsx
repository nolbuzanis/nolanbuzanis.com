import styled from 'styled-components';

const StyledP = styled.p`
  color: var(--color-article);
  margin: 0px auto;
  padding-bottom: 35px;
  width: 100%;
  line-height: 1.756;
  font-size: 18px;
  max-width: 680px;
  transition: background 0.25s ease, color 0.25s ease;

  @media only screen and (max-width: 66.875em) {
    max-width: 507px;
  }
  @media only screen and (max-width: 45.9375em) {
    max-width: 486px;
    padding-bottom: 25px;
  }
  @media only screen and (max-width: 33.75em) {
    padding-bottom: 20px;
  }
`;

export default StyledP;
