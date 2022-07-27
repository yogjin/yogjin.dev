import navlinks from '../data/navlinks';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="flex sm:justify-center space-x-4">
      {navlinks.map((navlink) => (
        <Link href={navlink.link} key={navlink.title}>
          <a
            className={`rounded-lg px-3 py-2 text-xl font-normal text-slate-700 hover:bg-slate-100 hover:text-slate-900`}
          >
            {navlink.title}
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
