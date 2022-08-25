import Link from 'next/link';
import { categoryNavlinks } from '../data/navlinks';

interface Props {
  onClickCategory: any;
}
const CategoryNav = ({ onClickCategory }: Props) => {
  return (
    <div className={`text-blue-500 text-xl font-medium mt-10 pb-1 border-b-2`}>
      <nav className="flex space-x-4">
        {categoryNavlinks.map((categoryNavlink) => (
          <button
            key={categoryNavlink.title}
            onClick={() => onClickCategory(categoryNavlink.category)}
            className={`rounded-lg px-3 py-2 text-base font-normal text-blue-600 hover:bg-slate-200  bg-slate-100 transition duration-300 cursor-pointer`}
          >
            {categoryNavlink.title}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default CategoryNav;
