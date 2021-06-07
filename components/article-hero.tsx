import styled from 'styled-components';
import AuthorHeadshot from './author-headshot';
import GridIcon from './icons/grid-icon';
import ListIcon from './icons/list-icon';
import { useContent } from '../utils/context';

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

const IconButton = styled('button')<{ active?: boolean }>`
  cursor: pointer;
  opacity: 0.25;
  transition: opacity 0.2s, background 0.25s;
  border-radius: 50%;
  height: 36px;
  width: 36px;
  display: inline-flex;
  justify-content: center;

  &:not(:last-child) {
    margin-right: 30px;
  }
  align-items: center;
  ${(props) => props.active && 'opacity: 1'};
  &:hover {
    //opacity: 1;
    background-color: rgba(0, 0, 0, 0.07);
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;
`;

const ArticleHero = (): JSX.Element => {
  const { grid, setGrid } = useContent();

  const enableListView = () => setGrid(false);
  const enableGridView = () => setGrid(true);

  return (
    <section>
      <HeroText>Welcome to Novella, the simplest way to start publishing with NextJS.</HeroText>
      <Flex>
        <AuthorSection>
          <AuthorHeadshot />
          <AuthorBio>
            Written by You. This is where your author bio lives. Share your work, your joys and of
            course, your awesome Twitter handle.
          </AuthorBio>
        </AuthorSection>
        <div>
          <IconButton active={grid} onClick={enableGridView}>
            <GridIcon />
          </IconButton>
          <IconButton active={!grid} onClick={enableListView}>
            <ListIcon />
          </IconButton>
        </div>
      </Flex>
    </section>
  );
};

export default ArticleHero;
