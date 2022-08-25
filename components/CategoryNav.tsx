import Link from 'next/link';
import { categoryNavlinks } from '../data/navlinks';

interface Props {
  selectedCategory: any;
  onClickCategory: any;
}
const CategoryNav = ({ selectedCategory, onClickCategory }: Props) => {
  return (
    <div className={`text-blue-500 text-xl font-medium mt-10 pb-1 border-b-2`}>
      <nav className="flex space-x-4">
        {categoryNavlinks.map((categoryNavlink) => (
          <button
            key={categoryNavlink.title}
            onClick={() => onClickCategory(categoryNavlink.category)}
            className={`rounded-lg px-3 py-2 text-base font-normal transition duration-300 cursor-pointer 
              ${
                categoryNavlink.category === selectedCategory
                  ? `text-slate-100 bg-blue-600 hover:bg-blue-700`
                  : `text-blue-600 bg-slate-100 hover:bg-slate-200`
              }
            `}
          >
            {categoryNavlink.title}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default CategoryNav;
