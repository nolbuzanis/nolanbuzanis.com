import Link from 'next/link';
import styled from 'styled-components';
import Head from 'next/head';
import ThemeIcon from '../ui/theme-icon';
import CopyIcon from '../ui/copy-icon';

const StyledRect = styled.rect`
  fill: var(--color-text);
  transition: fill 0.25s ease;
`;

const SiteLogo = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    // width={512}
    height={24}
    viewBox='0 0 512 512'
  >
    <defs>
      <clipPath id='clip-path'>
        <ellipse
          id='Ellipse_1'
          data-name='Ellipse 1'
          cx='280.683'
          cy='209.5'
          rx='280.683'
          ry='209.5'
          transform='translate(205.666 -90.611) rotate(45)'
          fill='#fff'
          stroke='#707070'
          strokeWidth={1}
        />
      </clipPath>
      <clipPath id='clip-Instagram_Post_1'>
        <rect width={512} height={512} />
      </clipPath>
    </defs>
    <g id='Instagram_Post_1' data-name='Instagram Post – 1' clipPath='url(#clip-Instagram_Post_1)'>
      <g id='Mask_Group_1' data-name='Mask Group 1' clipPath='url(#clip-path)'>
        <g id='Group_1' data-name='Group 1' transform='translate(1.527 -4.02)'>
          <StyledRect
            id='Rectangle_1'
            data-name='Rectangle 1'
            width='724.077'
            height={120}
            transform='translate(41.926 -41.926) rotate(45)'
            fill='#1f1f1f'
          />
          <StyledRect
            id='Rectangle_2'
            data-name='Rectangle 2'
            width='302.55'
            height={100}
            transform='translate(69.184 231.374) rotate(45)'
            fill='#1f1f1f'
          />
          <StyledRect
            id='Rectangle_3'
            data-name='Rectangle 3'
            width='302.55'
            height={100}
            transform='translate(296.538 4.02) rotate(45)'
            fill='#1f1f1f'
          />
        </g>
      </g>
    </g>
  </svg>
);

// const MillenniumLogo = () => (
//   <svg
//     // width={100}
//     height={22}
//     viewBox='0 0 208 170'
//     fill='none'
//     xmlns='http://www.w3.org/2000/svg'
//   >
//     <StyledRect width='39.7452' height='148.382' fill='#E5E4E2' />
//     <StyledRect
//       x='11.9236'
//       y='28.1041'
//       width='39.7452'
//       height='87.16'
//       transform='rotate(-45 11.9236 28.1041)'
//       fill='#E5E4E2'
//     />
//     <StyledRect x='168.255' width='39.7452' height='148.382' fill='#E5E4E2' />
//     <StyledRect
//       x='167.63'
//       y='0.121368'
//       width='39.7452'
//       height='130.269'
//       transform='rotate(45 167.63 0.121368)'
//       fill='#E5E4E2'
//     />
//     <StyledRect y='156.331' width={208} height='13.2484' fill='#E5E4E2' />
//   </svg>
// );

const HeaderWrapper = styled.section`
  max-width: 1220px;
  margin: 0 auto;
  padding: 60px 4rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 540px) {
    padding-top: 50px;
  }
`;

const SiteTitle = styled.h1`
  display: inline-block;
  font-weight: 500;
  position: relative;
  top: -4px;
  font-family: 'Merriweather', Georgia, Serif;
  margin: 0 0 0 15px;
  transition: color 0.25s ease;
  color: var(--color-text);
  @media only screen and (max-width: 540px) {
    display: none;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;

  > button {
    margin-left: 30px;
  }
`;

interface HeaderProps {
  toggleTheme: () => void;
}

const Header = ({ toggleTheme }: HeaderProps): JSX.Element => {
  let currentUrl = '';
  if (typeof window !== 'undefined') {
    currentUrl = window.location.href;
  }

  return (
    <HeaderWrapper>
      <Head>
        <title>Nolan Buzanis</title>
        <meta property='og:url' content={currentUrl} key='ogurl' />
        <meta property='og:site_name' content='Nolan Buzanis' key='ogsitename' />
        {/* Favicons */}
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
      </Head>
      <Link href='/'>
        <a href='/' aria-label='Home'>
          <SiteLogo />
          <SiteTitle>Nolan Buzanis</SiteTitle>
        </a>
      </Link>
      <IconContainer>
        <CopyIcon link={currentUrl} />
        <ThemeIcon onClick={toggleTheme} />
      </IconContainer>
    </HeaderWrapper>
  );
};

export default Header;
