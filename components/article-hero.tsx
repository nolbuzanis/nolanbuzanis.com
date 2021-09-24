import styled from 'styled-components';
// import AuthorHeadshot from './author-headshot';
import GridIcon from './ui/grid-icon';
import ListIcon from './ui/list-icon';
import { useContent } from '../utils/context';
import config from '../config';

const HeroText = styled.h1`
  font-family: -apple-system, system-ui, 'San Francisco', 'Helvetica Neue', Helvetica, Ubuntu,
    Roboto, Noto, 'Segoe UI', Arial, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 52px;
  line-height: 1.15;
  color: var(--color-text);
  max-width: 652px;
  margin: 100px 0 50px;
  @media only screen and (max-width: 1070px) {
    font-size: 38px;
  }
  @media only screen and (max-width: 540px) {
    font-size: 32px;
    padding: 0 20px;
  }
`;

const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  left: -10px;
`;

// const AuthorBio = styled.p`
//   max-width: 430px;
//   font-size: 14px;
//   line-height: 1.45;
// `;

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
    background-color: var(--color-button-hover);
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;
  @media only screen and (max-width: 1070px) {
    margin-bottom: 80px;
  }
  @media only screen and (max-width: 735px) {
    margin-bottom: 60px;
  }
  @media only screen and (max-width: 540px) {
    display: none;
  }
`;

const IconContainer = styled.div`
  @media only screen and (max-width: 735px) {
    display: none;
  }
`;

const ArticleHero = (): JSX.Element => {
  const { grid, setGrid } = useContent();

  const enableListView = () => setGrid('list');
  const enableTilesView = () => setGrid('tiles');

  return (
    <div>
      <HeroText>{config.heroText}</HeroText>
      <Flex>
        <AuthorSection>
          {/* <AuthorHeadshot />
          <AuthorBio>Engineer, Writer, Canadian.</AuthorBio> */}
        </AuthorSection>
        <IconContainer>
          <IconButton onClick={enableTilesView} aria-label='Grid view'>
            <GridIcon active={grid === 'tiles'} />
          </IconButton>
          <IconButton onClick={enableListView} aria-label='List view'>
            <ListIcon active={grid === 'list'} />
          </IconButton>
        </IconContainer>
      </Flex>
    </div>
  );
};

export default ArticleHero;
