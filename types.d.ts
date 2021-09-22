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

interface Post {
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

type GridTypes = 'tiles' | 'list';
