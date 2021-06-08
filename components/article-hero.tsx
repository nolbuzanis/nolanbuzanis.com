import styled from 'styled-components';
import AuthorHeadshot from './author-headshot';
import GridIcon from './icons/grid-icon';
import ListIcon from './icons/list-icon';
import { useContent } from '../utils/context';
import config from '../config';

const HeroText = styled.h1`
  font-family: -apple-system, system-ui, 'San Francisco', 'Helvetica Neue', Helvetica, Ubuntu,
    Roboto, Noto, 'Segoe UI', Arial, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 52px;
  line-height: 1.15;
  color: ${(props) => props.theme.title.textColor};
  max-width: 652px;
  margin: 100px 0;
  @media only screen and (max-width: 1070px) {
    font-size: 38px;
  }
`;

const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  left: -10px;
`;

const AuthorBio = styled.p`
  max-width: 430px;
  font-size: 14px;
  line-height: 1.45;
`;

const IconButton = styled.button`
  cursor: pointer;
  transition: opacity 0.2s, background 0.25s;
  border-radius: 50%;
  height: 36px;
  width: 36px;
  display: inline-flex;
  justify-content: center;

  &:not(:last-child) {
    margin-right: 25px;
  }
  align-items: center;
  &:hover {
    background-color: ${({ theme }) => `${theme.textColor}11`};
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;
  @media only screen and (max-width: 1070px) {
    margin-bottom: 80px;
  }
  @media only screen and (max-width: 735px) {
    margin-bottom: 60px;
  }
`;

const IconContainer = styled.div`
  @media only screen and (max-width: 735px) {
    display: none;
  }
`;

const HeroSection = styled.section`
  padding: 0 4rem;
`;

const ArticleHero = (): JSX.Element => {
  const { grid, setGrid } = useContent();

  const enableListView = () => setGrid(false);
  const enableGridView = () => setGrid(true);

  return (
    <HeroSection>
      <HeroText>{config.heroText}</HeroText>
      <Flex>
        <AuthorSection>
          <AuthorHeadshot />
          <AuthorBio>
            Written by You. This is where your author bio lives. Share your work, your joys and of
            course, your awesome Twitter handle.
          </AuthorBio>
        </AuthorSection>
        <IconContainer>
          <IconButton onClick={enableGridView}>
            <GridIcon active={grid} />
          </IconButton>
          <IconButton onClick={enableListView}>
            <ListIcon active={!grid} />
          </IconButton>
        </IconContainer>
      </Flex>
    </HeroSection>
  );
};

export default ArticleHero;
