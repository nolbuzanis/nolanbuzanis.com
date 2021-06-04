import { getAllPosts } from '../../dummyData';
import ArticleList from '../../components/article-list';

const AllPosts = (): JSX.Element => {
  const posts = getAllPosts();

  return <ArticleList items={posts} />;
};

export default AllPosts;
