import Nav from './Nav';
import Head from 'next/head';
import { PropsWithChildren } from 'react';
import Image from 'next/image';
import useScrollDirection from '../hooks/useScrollDirection';
import useScrollLocation from '../hooks/useScrollLocation';

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
        className={`flex flex-col w-full justify-center items-center bg-white sticky top-0 h-[4.3rem] ${
          scrollDirection === 'down' ? '-top-[4.3rem]' : 'top-0'
        } ${
          scrollLocation !== 0 && 'drop-shadow-md'
        } transition-all duration-300`}
      >
        <div
          className={`w-full max-w-3xl flex justify-between items-center my-2`}
        >
          <Nav />
          <div className={`flex items-center`}>
            <span className={`mx-2 text-2xl font-black font-logo`}>
              yogjin.dev
            </span>
          </div>
        </div>
      </header>
      <main className={`w-full max-w-4xl`}>{children}</main>
    </div>
  );
};

export default Layout;
