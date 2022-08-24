import Link from 'next/link';
import { categoryNavlinks } from '../data/navlinks';

const CategoryNav = () => {
  return (
    <nav className="flex space-x-4">
      {categoryNavlinks.map((category) => (
        <Link href={category.link} key={category.title}>
          <a
            className={`rounded-lg px-1 py-2 text-base font-normal text-blue-600 hover:bg-slate-100 hover:text-blue-700`}
          >
            {category.title}
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default CategoryNav;
