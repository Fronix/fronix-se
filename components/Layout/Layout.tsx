import Head from 'next/head';
import React, { FC } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-background text-text'>
      <Head>
        <title>fronix.se</title>
      </Head>
      <Navbar />
      <main className='flex w-full flex-1 flex-col items-center justify-center px-20 text-center'>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
