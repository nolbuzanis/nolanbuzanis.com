import Link from 'next/link';
import styled from 'styled-components';
import ThemeIcon from '../icons/theme-icon';

const StyledRect = styled.rect`
  fill: var(--color-text);
  transition: fill 0.25s ease;
`;

const MillenniumLogo = () => (
  <svg
    // width={100}
    height={22}
    viewBox='0 0 208 170'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <StyledRect width='39.7452' height='148.382' fill='#E5E4E2' />
    <StyledRect
      x='11.9236'
      y='28.1041'
      width='39.7452'
      height='87.16'
      transform='rotate(-45 11.9236 28.1041)'
      fill='#E5E4E2'
    />
    <StyledRect x='168.255' width='39.7452' height='148.382' fill='#E5E4E2' />
    <StyledRect
      x='167.63'
      y='0.121368'
      width='39.7452'
      height='130.269'
      transform='rotate(45 167.63 0.121368)'
      fill='#E5E4E2'
    />
    <StyledRect y='156.331' width={208} height='13.2484' fill='#E5E4E2' />
  </svg>
);

const HeaderWrapper = styled.section`
  max-width: 1220px;
  margin: 0 auto;
  padding: 60px 4rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;

interface HeaderProps {
  toggleTheme: () => void;
}

const Header = ({ toggleTheme }: HeaderProps): JSX.Element => (
  <HeaderWrapper>
    <Link href='/'>
      <a href='/'>
        <MillenniumLogo />
        <SiteTitle>millennium</SiteTitle>
        {/* <NextLogoSvg /> */}
      </a>
    </Link>
    <ThemeIcon onClick={toggleTheme} />
  </HeaderWrapper>
);

export default Header;
