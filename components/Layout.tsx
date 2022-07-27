import Nav from './Nav';
import Head from 'next/head';
import { PropsWithChildren } from 'react';
import Image from 'next/image';
import useScrollDirection from '../hooks/useScrollDirection';
import useScrollLocation from '../hooks/useScrollLocation';
import Link from 'next/link';

interface LayoutProps {}
const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
  const scrollDirection = useScrollDirection();
  const scrollLocation = useScrollLocation();

  return (
    <div className={`w-full flex flex-col items-center`}>
      <Head>
        <title>yogjin.dev</title>
      </Head>
      <header
        className={`flex flex-col w-full justify-center items-center bg-white sticky top-0 h-[3.5rem] ${
          scrollDirection === 'down' ? '-top-[3.5rem]' : 'top-0'
        } ${
          scrollLocation !== 0 && 'drop-shadow-md'
        } transition-all duration-300`}
      >
        <div
          className={`w-full max-w-3xl flex justify-between items-center my-2`}
        >
          <Nav />
          <div className={`flex items-center`}>
            <Link href={'/'}>
              <a className={`mx-2 text-xl font-black font-logo`}>yogjin.dev</a>
            </Link>
          </div>
        </div>
      </header>
      <main className={`w-full max-w-3xl`}>{children}</main>
    </div>
  );
};

export default Layout;
