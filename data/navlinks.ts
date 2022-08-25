export const navlinks: { title: string; link: string }[] = [
  { title: 'Home', link: '/' },
  { title: 'Posts', link: '/posts' },
];

export const categoryNavlinks: {
  category: string;
  title: string;
  link: string;
}[] = [
  { category: 'All', title: 'All', link: '/posts' },
  { category: 'jsdeepdive', title: 'jsdeepdive', link: '/posts/jsdeepdive' },
  { category: 'retrospect', title: '회고', link: '/posts/retrospect' },
];
