import Head from 'next/head';
import React, { FC } from 'react';
import Footer from '../Footer/Footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div
      tabIndex={-1}
      className='flex min-h-screen flex-col items-center justify-center bg-background text-text'
    >
      <Head>
        <title>fronix.se</title>
      </Head>
      <main className='flex w-full flex-1 flex-col items-center justify-center px-20 text-center container mx-auto p-4 break-normal'>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
