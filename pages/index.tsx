/* eslint-disable react/jsx-one-expression-per-line */
import router from 'next/router';
import styled from 'styled-components';
import React from 'react';
import Box from '../components/home/box';
import GithubIcon from '../components/ui/github-icon';
import LinkedinIcon from '../components/ui/linkedin-icon';
import TwitterIcon from '../components/ui/twitter-icon';
import WritingIcon from '../components/ui/writing-icon';
import config from '../config';
import Link from '../components/article/link';
import DiagonalArrow from '../components/ui/diagonal-arrow';
import TimelineIcon from '../components/ui/timeline-icon';

// const RandomColour = () => {
//   const RandomValue = () => Math.round(Math.random() * 155 + 100);
//   return `rgb(${RandomValue()}, ${RandomValue()}, ${RandomValue()})`;
// };

const Section = styled.section`
  padding: 100px 4em;
  max-width: 900px;
  margin: 0 auto;
  @media only screen and (max-width: 66.875em) {
    padding: 50px 2em;
  }
`;

const BoxGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  grid-gap: 15px;
  grid-auto-flow: dense;
  @media only screen and (max-width: 66.875em) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    // grid-gap: 10px;
  }
  @media only screen and (max-width: 540px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

const backgrounds = [
  'linear-gradient(130deg, rgba(42, 170, 138, 1) 10%, rgba(63, 94, 251, 1) 100%)',
  'rgba(42, 170, 138, 1)',
];

// interface BoxTextProps {
//   title: string;
//   message: string[];
// }

const Paragraph = styled.p`
  color: var(--color-text);
  padding-top: 15px;
  line-height: 1.7em;
  @media only screen and (max-width: 66.875em) {
    font-size: 14px;
    padding-top: 8px;
    line-height: 1.6em;
  }
`;
const Title = styled.h2`
  margin: 0;
  padding-top: 10px;
  @media only screen and (max-width: 66.875em) {
    font-size: 18px;
    padding-top: 0px;
  }
`;
const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 33em) {
    font-size: 16px;
    line-height: 25px;
  }
`;

// const BoxText = ({ title, message }: BoxTextProps) => (
//   <>
//     {title && <Title>{title}</Title>}
//     {message.map((text) => (
//       <Paragraph key={text}>{text}</Paragraph>
//     ))}
//   </>
// );

const DiagonalArrowContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 5px;
`;

const Icon = ({ children }: { children: React.ReactChild }) => (
  <Center>
    {children}
    <DiagonalArrowContainer>
      <DiagonalArrow />
    </DiagonalArrowContainer>
  </Center>
);

const AboutMe = () => (
  <>
    <Title>About Me</Title>
    <Paragraph>
      I&apos;m a software engineer, writer, and amateur van builder. I&apos;m currenly building web
      apps at <Link href='https://connected.io/'>Connected.io</Link>.
    </Paragraph>
    <Paragraph>
      Before Connected, I took 6 months off and converted a custom camper van complete with running
      water, an off-grid electrical system, a hidden bathroom, and a queen size bed. After countless
      youtube videos and help from friends and family, I am happy to say it is (mostly) complete!
    </Paragraph>
    <Paragraph>
      Before that, I led the engineering team at{' '}
      <Link href='https://portlmedia.com/'>Portl Media</Link>, a startup that set up tablets in the
      back of rideshares (Uber/Lyft) for drivers to earn more.
    </Paragraph>
    <Paragraph>
      Feel free to explore my corner of the internet. You can find me on{' '}
      <Link href={config.social.twitter}>Twitter</Link> where I talk about software development, or
      check out my projects on <Link href={config.social.github}>Github</Link>.
    </Paragraph>
  </>
);

const HomePage = (): JSX.Element => (
  <Section>
    <BoxGrid id='grid'>
      <Box size={4}>
        <AboutMe />
      </Box>
      <Box size={2} backgroundColor={backgrounds[0]} onClick={() => router.push('/timeline')}>
        <Center>
          <TimelineIcon scale={2} color='var(--color-text)' />
          My Experience
        </Center>
      </Box>
      <Box backgroundColor='#1DA1F2' onClick={() => window.open(config.social.twitter)}>
        <Icon>
          <TwitterIcon scale={2} color='var(--color-text)' />
        </Icon>
      </Box>
      <Box backgroundColor='#0e76a8' onClick={() => window.open(config.social.linkedin)}>
        <Icon>
          <LinkedinIcon scale={2} color='var(--color-text)' />
        </Icon>
      </Box>
      <Box
        size={2}
        onClick={() => router.push('/writing')}
        backgroundColor='var(--color-text)'
        textColor='var(--color-background)'
      >
        <Center>
          <WritingIcon scale={1.5} color='var(--color-background)' />
          Writing
        </Center>
      </Box>
      <Box onClick={() => window.open(config.social.github)}>
        <Icon>
          <GithubIcon scale={2} color='var(--color-text)' />
        </Icon>
      </Box>
    </BoxGrid>
  </Section>
);

export default HomePage;
