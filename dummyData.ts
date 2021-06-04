/* eslint-disable import/prefer-default-export */
export const dummyPosts: Post[] = [
  {
    id: '1',
    title: 'Understanding the Gatsby lifecycle',
    description:
      'At Narative, we’ve been fans of Gatsby from day one, using it to build performant and flexible products for both clients and ourselves. With th...',
    img: 'http://images.unsplash.com/photo-1563906916083-234cf1492acc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
    time: 5,
    author: 'Nolan Buzanis',
    date: new Date().toJSON(),
  },
  {
    id: '2',
    title: 'How Figma changed the way we design',
    description:
      'To understand why Figma is the best design tool for our company, you have to understand what we do. As a designer, I’v...',
    time: 11,
    img: 'https://www.peopleperhour.com/blog/wp-content/uploads/2019/08/room-34V7TVQQFsU-unsplash-300x196@2x.jpg',
    author: 'Nolan Buzanis',
    date: new Date().toJSON(),
  },
  {
    id: '3',
    title: 'How Figma changed the way we design',
    description:
      'To understand why Figma is the best design tool for our company, you have to understand what we do. As a designer, I’v...',
    time: 11,
    img: 'https://novela.narative.co/static/ebfe799cafe15d6bd9b9654f2cf759c7/9000d/hero-4.webp',
    author: 'Nolan Buzanis',
    date: new Date().toJSON(),
  },
  {
    id: '4',
    title: 'How Figma changed the way we design',
    description:
      'To understand why Figma is the best design tool for our company, you have to understand what we do. As a designer, I’v...',
    time: 11,
    img: 'https://novela.narative.co/static/dea82e6ca7a739a3c78dd518f40fcae7/9000d/hero-5.webp',
    author: 'Nolan Buzanis',
    date: new Date().toJSON(),
  },
];

export const getAllPosts = (): Post[] => dummyPosts;

export const getPostById = (postId: string): Post => {
  const post = getAllPosts().find(({ id }) => id === postId);
  return post;
};
