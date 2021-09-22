import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const StyledAnchor = styled.a`
  position: relative;
  height: 52px;
  width: 52px;
  border-radius: 50%;
  margin: 4px 20px 4px 4px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  * > img {
    object-fit: cover;
    object-position: center center;
    border-radius: 50%;
    min-width: 40px !important;
    min-height: 40px !important;
    position: absolute;
  }
  > div {
    position: static !important;
  }
  * > div {
    position: relative;
  }
`;

const AuthorHeadshot = (): JSX.Element => (
  <Link href='/'>
    <StyledAnchor href='/'>
      <Image
        src='https://millennium-blog.s3.ca-central-1.amazonaws.com/IMG_1419_d4211f22e3.jpg'
        alt='Nolan Buzanis'
        width={40}
        height={40}
      />
    </StyledAnchor>
  </Link>
);

export default AuthorHeadshot;
