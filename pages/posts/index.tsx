import { getAllPosts } from '../../dummyData';
import ArticleList from '../../components/article-list';

const AllPosts = (): JSX.Element => {
  const posts = getAllPosts();

  return (
    <div>
      <ArticleList items={posts} />
    </div>
  );
};

export default AllPosts;
