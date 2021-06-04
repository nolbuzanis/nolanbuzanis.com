// import styled from 'styled-components';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPosts, getPostById } from '../../dummyData';
import ArticleCard from '../../components/article-card';

interface PostPageProps {
  post: Post;
}

const PostPage = ({ post }: PostPageProps): JSX.Element => {
  const { time, title, description, img, date, id } = post;
  return (
    <div>
      <ArticleCard
        id={id}
        title={title}
        description={description}
        timeToRead={time}
        img={img}
        date={date}
      />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const { postId } = params;

  const post = getPostById(postId as string);

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paramsFromIds = getAllPosts().map(({ id }) => ({
    params: { postId: id },
  }));
  return {
    paths: paramsFromIds,
    fallback: 'blocking',
  };
};

export default PostPage;
