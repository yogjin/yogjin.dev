import Nav from './Nav';
import Head from 'next/head';
import { PropsWithChildren } from 'react';

interface LayoutProps {}
const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
  return (
    <div>
      <Head>
        <title>yogjin.dev</title>
      </Head>
      <header>
        <Nav />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
