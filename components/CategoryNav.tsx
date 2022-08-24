import Link from 'next/link';

interface Props {
  postsCategory: string[];
}
const CategoryNav = ({ postsCategory }: Props) => {
  return (
    <nav className="flex space-x-4">
      {postsCategory.map((category) => (
        <Link href={`posts/${category}`} key={category}>
          <a
            className={`rounded-lg px-1 py-2 text-base font-normal text-blue-600 hover:bg-slate-100 hover:text-blue-700`}
          >
            {category}
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default CategoryNav;
