interface Post {
  title: string;
  author: string;
  excerpt: string;
  date: string;
  readingTime: number;
  slug: string;
  content: string | MDXRemoteSerializeResult<Record<string, unknown>>;
  hero: string;
}
