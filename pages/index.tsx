import { GetStaticProps } from 'next';
import styled from 'styled-components';
import Head from 'next/head';
import ArticleList from '../components/article-list';
import ArticleHero from '../components/article-hero';
// import { getAllPosts } from '../utils/local-api';
import { getAllPosts as getAllStrapiPosts } from '../utils/api';
// import NewsletterSection from '../components/newsletter';

interface HomePageProps {
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

const HomePage = (props: HomePageProps): JSX.Element => {
  const { posts } = props;

  return (
    <>
      <Head>
        <meta
          name='description'
          content='Refreshing narratives on technology, van build guides, lifestyle, and the environment. Find an topic that interests you and do a deep dive.'
        />
      </Head>
      <Section>
        <ArticleHero />
        <ArticleList items={posts} />
      </Section>
      {/* <NewsletterSection /> */}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // const posts = getAllPosts(['title', 'date', 'slug', 'hero', 'excerpt', 'readingTime']);

  const posts = await getAllStrapiPosts();

  return {
    props: {
      posts,
      // revalidate: 60 * 10,
    },
  };
};

export default HomePage;
