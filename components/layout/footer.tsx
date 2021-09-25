import styled from 'styled-components';
import config from '../../config';

// social icons
import twitterIcon from '../ui/twitter-icon';
import githubIcon from '../ui/github-icon';
import instagramIcon from '../ui/instagram-icon';
import linkedinIcon from '../ui/linkedin-icon';

const socialIconMap = {
  twitter: twitterIcon,
  github: githubIcon,
  instagram: instagramIcon,
  linkedin: linkedinIcon,
};

const Section = styled.section`
  padding: 0 4rem;
  @media only screen and (max-width: 66.875em) {
    max-width: 850px;
  }
`;

const Line = styled.div`
  position: relative;
  margin: 140px auto 50px;
  border-bottom: 1px solid var(--color-horizontal-rule);
`;

const FooterContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 80px;
  font-size: 16px;
  color: var(--color-text);
  @media only screen and (max-width: 540px) {
    flex-direction: column;
    justify-content: center;
    > span {
      margin: 30px auto 100px;
    }
  }
`;

const IconList = styled.div`
  > a:not(:first-child) {
    margin-left: 3.2rem;
  }
`;

const Footer = (): JSX.Element => {
  const copyrightDate = new Date().getFullYear();

  const parsedList = [];

  Object.keys(config.social).forEach((name) => {
    const value = config.social[name];
    if (value && value.length > 0) {
      parsedList.push({ name, value });
    }
  });

  return (
    <Section>
      <Line />
      <FooterContent>
        <span>
          &copy;
          {` ${copyrightDate} Nolan Buzanis`}
        </span>
        <IconList>
          {parsedList.map(({ name, value }) => {
            const Icon = socialIconMap[name];
            return (
              <a href={value} key={name + value} target='_blank' rel='noreferrer'>
                <Icon />
              </a>
            );
          })}
        </IconList>
      </FooterContent>
    </Section>
  );
};

export default Footer;
