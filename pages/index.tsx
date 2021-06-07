import ArticleList from '../components/article-list';
import ArticleHero from '../components/article-hero';
import { getAllPosts } from '../dummyData';

const HomePage = (): JSX.Element => {
  const posts = getAllPosts();

  return (
    <div>
      <ArticleHero />
      <ArticleList items={posts} />
    </div>
  );
};

export default HomePage;
