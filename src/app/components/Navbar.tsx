import Link from 'next/link';
import HoverLink from './HoverLink';
import { GithubIcon, LinkedInIcon } from './Icons';
import Logo from './Logo';

const Navbar = () => {
  return (
    <header className='flex w-full items-center justify-between px-32 py-8 font-medium'>
      <nav className='flex gap-6'>
        <HoverLink href='/' title='Home' />
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        {/* <HoverLink href='/projects' title='Projects' />
        <HoverLink href='/contact' title='Contact' /> */}
      </nav>
      <Logo />
      <nav className='flex flex-wrap items-center justify-center gap-5 max-md:hidden'>
        <Link href='https://www.github.com/fronix'>
          <GithubIcon />
        </Link>
        <Link href='https://www.linkedin.com/in/fronix'>
          <LinkedInIcon />
        </Link>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
      </nav>
    </header>
  );
};

export default Navbar;
