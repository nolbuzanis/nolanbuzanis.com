import styled from 'styled-components';
import ArticleCard from './article-card';
import { useContent } from '../utils/context';

interface ArticleListProps {
  items: Post[];
}

const Grid = styled.div<{ even: boolean; listView: boolean }>`
  display: grid;
  margin: 0;
  column-gap: 30px;
  ${(props) => (props.listView ? '' : 'margin-bottom: 75px;')}

  ${(props) => {
    if (props.listView) {
      return 'grid-template-columns: 1fr;';
    }
    return `
    grid-template-columns: ${props.even ? '3fr 2fr' : '2fr 3fr'};
    @media only screen and (max-width: 1280px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 735px) {
    margin: 0;
    grid-template-columns: 1fr;
  }
    `;
  }}

  
  @media only screen and (max-width: 540px) {
    margin: 0;
  }
`;

const splitArrayIntoMultiple = (originalArray: Post[]): Post[][] => {
  const rowSize = 2;
  const arrayOfArrays: Post[][] = [];
  for (let i = 0; i < originalArray.length; i += rowSize) {
    arrayOfArrays.push(originalArray.slice(i, i + rowSize));
  }
  return arrayOfArrays;
};

const ArticleList = ({ items }: ArticleListProps): JSX.Element => {
  const { grid } = useContent();

  const splitArray = splitArrayIntoMultiple(items);
  const listView = grid === 'list';
  return (
    <div>
      {splitArray.map((shortArray, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Grid key={i} even={i % 2 === 0} listView={listView}>
          {shortArray.map((item) => (
            <ArticleCard
              key={item.slug}
              id={item.slug}
              title={item.title}
              img={item.hero}
              thumbnail={item.thumbnail}
              description={item.description}
              timeToRead={item.readingTime}
              listView={listView}
              date={item.published_at}
              category={item.category}
            />
          ))}
        </Grid>
      ))}
    </div>
  );
};

export default ArticleList;
