import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { getAllCategories, getPostByCategory } from '../../lib/api';
import ArticleList from '../../components/article-list';

interface CategoryPageProps {
  posts: Post[];
  slug: string;
}

const CategoryPage = ({ posts, slug }: CategoryPageProps): JSX.Element => (
  <>
    <Head>
      <meta name='description' content={`Articles with the category: ${slug}`} />
    </Head>
    <section>
      <h1>{slug}</h1>
      <ArticleList items={posts} />
    </section>
  </>
);
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const posts = await getPostByCategory(slug as string);

  if ('error' in posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts,
      slug,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getAllCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
};

export default CategoryPage;
