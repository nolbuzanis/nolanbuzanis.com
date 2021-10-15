/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import rTime from 'reading-time';

export const getAllPosts = async (): Promise<Post[]> => {
  try {
    const { data }: { data: StrapiPost[] } = await axios.get(`${process.env.STRAPI_URL}/articles`);

    const parsed = data
      .map((article) => ({
        ...article,
        readingTime: Math.round(rTime(article.content).minutes),
        hero: article.image.url,
        thumbnail: article.image.formats.thumbnail.url,
      }))
      .sort((a, b) => new Date(a.published_at).getTime() - new Date(b.published_at).getTime());

    return parsed;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error retrieving posts', error);
    return [];
  }
};

export const getPostBySlug = async (slugToMatch: string): Promise<Post | NestedError> => {
  const { data }: { data: StrapiPost[] } = await axios.get(
    `${process.env.STRAPI_URL}/articles?slug=${slugToMatch}`,
  );

  if (data && data[0]) {
    const [article] = data;
    return {
      ...article,
      hero: article.image.url,
      readingTime: Math.round(rTime(article.content).minutes),
      thumbnail: article.image.formats.thumbnail.url,
    };
  }

  return { error: 'No post found!' };
};

export const getPostByCategory = async (slugToMatch: string): Promise<Post[] | NestedError> => {
  const { data }: { data: StrapiPost[] } = await axios.get(
    `${process.env.STRAPI_URL}/articles?category.slug=${slugToMatch}`,
  );
  // const data = await getAllPosts();

  if (data && data.length > 0) {
    return data.map((article) => ({
      ...article,
      hero: article.image.url,
      readingTime: Math.round(rTime(article.content).minutes),
      thumbnail: article.image.formats.thumbnail.url,
    }));
  }

  return { error: 'No posts with this category found!' };
};

export const getAllCategories = async (): Promise<Category[]> => {
  const { data }: { data: Category[] } = await axios.get(`${process.env.STRAPI_URL}/categories`);

  return data;
};
