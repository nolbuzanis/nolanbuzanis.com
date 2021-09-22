interface LocalPost {
  title: string;
  author: string;
  excerpt: string;
  date: string;
  readingTime: number;
  slug: string;
  content: string | MDXRemoteSerializeResult<Record<string, unknown>>;
  hero: string;
}

interface Image {
  id: number;
  url: string;
  formats: {
    thumbnail: {
      url: string;
    };
  };
}

interface Author {
  id: number;
  name: string;
  email: string;
  picture: Image;
  articles: Post[];
}

interface Category {
  id: number;
  name: string;
  slug: string;
  articles: Post[];
}

interface StrapiPost {
  id: number;
  title: string;
  description: string;
  content: string;
  slug: string;
  created_at: string;
  updated_at: string;
  author: Author;
  image: Image;
  category: Category;
  readingTime: number;
}

interface Post extends StrapiPost {
  hero: string;
  thumbnail: string;
  cssThumbnail?: Record<string, unknown>;
}

type GridTypes = 'tiles' | 'list';
