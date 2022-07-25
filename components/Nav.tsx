import navlinks from '../data/navlinks';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav>
      {navlinks.map((navlink) => (
        <Link href={navlink.link} key={navlink.title}>
          <a className={`mr-5`}>{navlink.title}</a>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
