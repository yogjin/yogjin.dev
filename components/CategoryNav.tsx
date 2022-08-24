import Link from 'next/link';
import { categoryNavlinks } from '../data/navlinks';

const CategoryNav = () => {
  return (
    <div className={`text-blue-500 text-xl font-medium mt-10 pb-1 border-b-2`}>
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
    </div>
  );
};

export default CategoryNav;
