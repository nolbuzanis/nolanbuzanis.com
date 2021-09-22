/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import rTime from 'reading-time';

export const getPostBySlug = async (slugToMatch: string): Promise<Post> => {
  const { data }: { data: Post[] } = await axios.get(`${process.env.STRAPI_URL}/articles`);

  const post = data.find(({ slug }) => slug === slugToMatch);
  return post;
};

export const getAllPosts = async (): Promise<Post[]> => {
  try {
    const { data } = await axios.get(`${process.env.STRAPI_URL}/articles`);

    const parsed = data.map((article) => ({
      ...article,
      readingTime: Math.round(rTime(article.content).minutes),
    }));

    return parsed;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error retrieving posts', error);
    return [];
  }
};
