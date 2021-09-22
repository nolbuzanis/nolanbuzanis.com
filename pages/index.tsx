import { GetStaticProps } from 'next';
import ArticleList from '../components/article-list';
import ArticleHero from '../components/article-hero';
import { getAllPosts } from '../utils/api';

interface HomePageProps {
  posts: Post[];
}

const HomePage = (props: HomePageProps): JSX.Element => {
  const { posts } = props;

  return (
    <section>
      <ArticleHero />
      <ArticleList items={posts} />
    </section>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['title', 'date', 'slug', 'hero', 'excerpt', 'readingTime']);

  return {
    props: {
      posts,
    },
  };
};

export default HomePage;
