import styled from 'styled-components';
import ArticleCard from './article-card';

interface ArticleListProps {
  items: Post[];
}

const Grid = styled.div<{ even: boolean }>`
  display: grid;
  margin: 0;
  grid-template-columns: ${(props) => (props.even ? '3fr 2fr' : '2fr 3fr')};
  column-gap: 30px;
  margin-bottom: 75px;
  padding: 0 4rem;
  @media only screen and (max-width: 1280px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 735px) {
    margin: 0;
    grid-template-columns: 1fr;
  }
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
  const splitArray = splitArrayIntoMultiple(items);

  return (
    <div>
      {splitArray.map((shortArray, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Grid key={i} even={i % 2 === 0}>
          {shortArray.map((item) => (
            <ArticleCard
              key={item.slug}
              id={item.slug}
              title={item.title}
              img={item.hero}
              description={item.excerpt}
              timeToRead={item.readingTime}
              // date={item.date}
            />
          ))}
        </Grid>
      ))}
    </div>
  );
};

export default ArticleList;
