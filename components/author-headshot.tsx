import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Link from 'next/link';

const Img = styled(LazyLoadImage)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  top: 5px;
  left: 5px;
  position: absolute;
  object-fit: cover;
  object-position: center center;
`;

const StyledAnchor = styled.a`
  position: relative;
  height: 52px;
  width: 52px;
  border-radius: 50%;
  margin: 4px 26px 4px 10px;
  border: 1px solid rgba(0, 0, 0, 0.25);
`;

const AuthorHeadshot = (): JSX.Element => (
  <Link href='/'>
    <StyledAnchor href='/'>
      <Img src='https://novela.narative.co/static/c7748836a93057c66597ca1a32548a19/fc32b/dennis-brotzky.webp' />
    </StyledAnchor>
  </Link>
);

export default AuthorHeadshot;
