import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import remark from 'remark';
import html from 'remark-html';
import rTime from 'reading-time';
import config from '../config';

const postsDirectory = path.join(process.cwd(), '_posts');

export const getPostSlugs = (): string[] => {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((slug) => slug.replace(/\.mdx$/, ''));
};
interface Fields {
  [key: string]: string;
}

type Items = Fields & {
  readingTime?: number;
};

export const getPostBySlug = (slug: string, fields: string[] = []): Items => {
  const slugWithoutExt = slug.replace(/\.mdx$/, '');
  const fullPath = path.resolve(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slugWithoutExt;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (field === 'hero' && config.local) {
      items[field] = `/images/${data[field]}`;
      return;
    }
    if (field === 'readingTime') {
      items[field] = Math.round(rTime(content).minutes);
    }
    if (field === 'date') {
      items[field] = data.date.toString();
      return;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
};

export const getAllPosts = (fields: string[] = []): Items[] => {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((postOne, postTwo) => (new Date(postOne.date) > new Date(postTwo.date) ? -1 : 1));

  return posts;
};

export const markdownToHtml = async (markdown: string): Promise<string> => {
  const result = await remark().use(html).process(markdown);
  return result.toString();
};
