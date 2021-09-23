/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { getPlaiceholder } from 'plaiceholder';
import rTime from 'reading-time';

export const getAllPosts = async (): Promise<Post[]> => {
  try {
    const { data }: { data: StrapiPost[] } = await axios.get(`${process.env.STRAPI_URL}/articles`);

    const parsed = data.map((article) => ({
      ...article,
      readingTime: Math.round(rTime(article.content).minutes),
      hero: article.image.url,
      thumbnail: article.image.formats.thumbnail.url,
    }));

    return parsed;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error retrieving posts', error);
    return [];
  }
};

export const getPostBySlug = async (slugToMatch: string): Promise<Post> => {
  // const { data }: { data: Post[] } = await axios.get(`${process.env.STRAPI_URL}/articles`);
  const data = await getAllPosts();

  const post = data.find(({ slug }) => slug === slugToMatch);
  const { base64 } = await getPlaiceholder(post.hero, { size: 10 });
  return { ...post, thumbnail: base64 };
};

export const getPostByCategory = async (slugToMatch: string): Promise<Post[]> => {
  const data = await getAllPosts();

  return data.filter(({ category }) => category.slug === slugToMatch);
};

export const getAllCategories = async (): Promise<Category[]> => {
  const { data }: { data: Category[] } = await axios.get(`${process.env.STRAPI_URL}/categories`);

  return data;
};
