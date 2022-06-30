import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import Logo from './Logo';

const Navbar = () => {
  return (
    <header className='container'>
      <nav className='mx-auto flex items-center justify-between flex-wrap mt-10'>
        <div className='flex mr-auto -mt-1 pl-4'>
          <Link href='/'>
            <a className='flex'>
              <Logo />
            </a>
          </Link>
        </div>
        <div className='lg:flex space-x-5'>
          <NavbarLink href='/about'>About</NavbarLink>
          <NavbarLink href='/work'>Work</NavbarLink>
          <NavbarLink href='/contact'>Contact</NavbarLink>
        </div>
      </nav>
    </header>
  );
};

type NabarLinkProps = {
  href: string;
  children: React.ReactNode;
};
const NavbarLink: FC<NabarLinkProps> = ({ href, children }) => {
  const { asPath } = useRouter();
  return (
    <Link href={href}>
      <a className={`${asPath === href ? 'text-textLink' : 'text-text'} p-2`}>{children}</a>
    </Link>
  );
};

export default Navbar;
