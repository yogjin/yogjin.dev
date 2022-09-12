import Nav from './Nav';
import Head from 'next/head';
import React, { PropsWithChildren } from 'react';
import Image from 'next/image';
import useScrollDirection from '../hooks/useScrollDirection';
import useScrollLocation from '../hooks/useScrollLocation';
import Link from 'next/link';
import Footer from './Footer';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const scrollDirection = useScrollDirection();
  const scrollLocation = useScrollLocation();

  return (
    <div className={`w-full flex flex-col items-center`}>
      <Head>
        <title>yogjin.dev</title>
      </Head>
      <header
        className={`z-50 flex flex-col w-full justify-center items-center bg-white sticky top-0 h-[3.5rem] p-4 ${
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
      <main className={`w-full max-w-3xl p-4`}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
