/* eslint-disable operator-linebreak */
import Link from 'next/link';
import styled from 'styled-components';
import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ThemeIcon from '../ui/theme-icon';
import CopyIcon from '../ui/copy-icon';
import Popup from '../newsletter/popup';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    // background: 'var(--color-background)',
    border: 'none',
    // borderRadius: 15,
    background: 'none',
    padding: 0,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 101,
  },
};

Modal.setAppElement('#__next');

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

const StyledRect = styled.rect`
  // fill: #2aaa8a;
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
const HeaderWrapper = styled.section<{ overrideColor: string }>`
  max-width: 1220px;
  margin: 0 auto;
  padding: 40px 4rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    props.overrideColor &&
    `
  * {
    color: ${props.overrideColor} !important;
    fill: ${props.overrideColor} !important;
  }
  
  `}

  @media only screen and (max-width: 66.875em) {
    max-width: 850px;
  }
  @media only screen and (max-width: 540px) {
    padding: 50px 20px 0;
  }
`;

const Container = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
`;

const SiteTitle = styled.h1`
  display: inline-block;
  font-weight: 400;
  font-size: 27px;
  position: relative;
  top: -4px;
  // font-family: 'Merriweather', Georgia, Serif;
  margin: 0 15px;
  transition: color 0.25s ease;
  color: var(--color-text);
  @media only screen and (max-width: 540px) {
    display: none;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Menu = styled.nav`
  display: flex;
  align-items: center;
`;

const MenuLink = styled.a`
  font-size: 14px;
  display: inline-block;
  height: 44px;
  padding: 15px;
  margin-left: 20px;
  cursor: pointer;
  font-weight: 700;
  color: var(--color-text);
  height: 44px;
  padding: 15px;
  border-radius: 20px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: hsla(0, 0%, 98%, 0.15);
  }
`;

const SubscribeButton = styled.button`
  font-size: 14px;
  display: inline-block;
  margin-left: 20px;
  cursor: pointer;
  font-weight: 700;
  color: var(--color-text);
  height: 44px;
  padding: 15px;
  border-radius: 20px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: hsla(0, 0%, 98%, 0.15);
  }
`;

interface HeaderProps {
  toggleTheme: () => void;
}

const Header = ({ toggleTheme }: HeaderProps): JSX.Element => {
  const [modalOpen, setModalOpen] = useState(false);
  const [overrideColor, setOverrideColor] = useState<string>();

  const { pathname } = useRouter();

  let currentUrl = '';
  if (typeof window !== 'undefined') {
    currentUrl = window.location.href;
  }

  const toggleModal = () => setModalOpen((prev) => !prev);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modalOpen]);

  useEffect(() => {
    if (pathname === '/') {
      setOverrideColor('#fff');
    } else {
      setOverrideColor('');
    }
  }, [pathname]);

  return (
    <Container>
      <HeaderWrapper overrideColor={overrideColor}>
        <Modal isOpen={modalOpen} onRequestClose={toggleModal} style={customStyles}>
          <Popup />
        </Modal>
        <Menu>
          <Link href='/'>
            <a href='/' aria-label='Home'>
              <SiteLogo />
              <SiteTitle>Nolan Buzanis</SiteTitle>
            </a>
          </Link>
          {/* <Link href='/'>
          <MenuLink>About</MenuLink>
        </Link> */}
          <Link href='/writing'>
            <MenuLink>Writing</MenuLink>
          </Link>
          <SubscribeButton onClick={toggleModal} type='button'>
            Subscribe
          </SubscribeButton>
        </Menu>
        <IconContainer>
          <CopyIcon link={currentUrl} />
          <ThemeIcon onClick={toggleTheme} />
        </IconContainer>
      </HeaderWrapper>
    </Container>
  );
};

export default Header;
