import Nav from './Nav';
import Head from 'next/head';
import { PropsWithChildren } from 'react';
import Image from 'next/image';

interface LayoutProps {}
const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
  return (
    <div className={`w-full flex flex-col items-center`}>
      <Head>
        <title>yogjin.dev</title>
      </Head>
      <header
        className={`flex flex-col w-full justify-center items-center bg-white sticky top-0  h-[4.3rem]`}
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
      <main className={`w-full max-w-5xl`}>{children}</main>
    </div>
  );
};

export default Layout;
