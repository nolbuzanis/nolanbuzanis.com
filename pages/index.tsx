import styled from 'styled-components';
import Link from 'next/link';
import AppGrid from '../components/home/app-grid';

const Background = styled.div`
  background-image: linear-gradient(-225deg, #2cd8d5 0%, #6b8dd6 48%, #8e37d7 100%);
  // height: 800px;
  padding: 0;
  width: 100%;
  margin: 0;
  max-width: none;
  overflow: hidden;
`;

const Content = styled.div`
  padding-top: 166px;
  // width: calc(100% - 100px);
  position: relative;
`;

const Headline = styled.h1`
  margin-bottom: 80px;
  font-size: 50px;
  color: white;
  text-align: center;
`;

const Blurb = styled.h2`
  font-size: 36px;
  max-width: 880px;
  padding: 80px 0 40px;
  font-weight: 400;
  color: white;
  margin: 0 auto;
`;

const Section = styled.section`
  text-align: center;
  padding-bottom: 80px;
`;

const StyledLink = styled.a`
  color: #0468d7;
  height: 40px;
  font-weight: 700;
  line-height: 40px;
  padding: 0 25px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  background-color: white;
  display: inline-block;
`;
const Home = (): JSX.Element => (
  <Background>
    <Content>
      <Headline>Building apps and writing about it</Headline>
      <AppGrid />
    </Content>
    <Section>
      <Blurb>
        I&apos;m a software engineer, writer, and amateur van builder. I&apos;m currenly building
        web apps at Connected.io.
      </Blurb>
      <Link href='/timeline'>
        <StyledLink>My Experience</StyledLink>
      </Link>
    </Section>
  </Background>
);

export default Home;
