import { GetStaticProps } from 'next';
import styled from 'styled-components';
import Head from 'next/head';
import ArticleList from '../../components/article-list';
// import ArticleHero from '../../components/article-hero';
// import { getAllPosts } from '../utils/local-api';
// import { getAllPosts as getAllStrapiPosts } from '../../utils/api';
// import NewsletterSection from '../../components/newsletter';

interface AllPostsProps {
  posts: Post[];
}

const Section = styled.section`
  padding: 0 4em;
  max-width: 1220px;
  margin: 0 auto;
  @media only screen and (max-width: 66.875em) {
    max-width: 850px;
  }
  @media only screen and (max-width: 540px) {
    padding: 0;
  }
`;

const AllPosts = (props: AllPostsProps): JSX.Element => {
  const { posts } = props;

  return (
    <>
      <Head>
        <meta
          name='description'
          content='Writing about software development, finance, lifestyle, and the environment. Find an topic that interests you and do a deep dive.'
        />
      </Head>
      <Section>
        {/* <ArticleHero /> */}
        <ArticleList items={posts} />
      </Section>
      {/* <NewsletterSection /> */}
    </>
  );
};

// const posts = getAllPosts(['title', 'date', 'slug', 'hero', 'excerpt', 'readingTime']);

// const posts = await getAllStrapiPosts();
export const getStaticProps: GetStaticProps = async () => ({
  props: {
    posts: [],
    // revalidate: 60 * 10,
  },
});

export default AllPosts;
