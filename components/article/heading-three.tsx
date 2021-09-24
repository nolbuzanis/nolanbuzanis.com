import styled from 'styled-components';
import HeadingTwo from './heading-two';

export default styled(HeadingTwo)`
  margin: 0 auto;
  padding: 20px 0 10px;
  font-size: 24px;
  line-height: 1.45;
  @media only screen and (max-width: 540px) {
    font-size: 20px;
    padding: 20px 20px 10px;
  }
`;
