import Link from 'next/link';
import HoverLink from './HoverLink';
import { GithubIcon, LinkedInIcon } from './Icons';
import Logo from './Logo';

const Navbar = () => {
  return (
    <header className='z-1 relative z-10 flex w-full items-center justify-between px-32 py-8 font-medium sm:px-8 md:px-12 lg:px-16'>
      <div className='flex w-full items-center justify-between max-lg:hidden'>
        <nav className='flex gap-6'>
          <HoverLink href='/' title='Start' />
          <HoverLink href='/posts' title='Posts' />
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          {/* <HoverLink href='/projects' title='Projects' />
        <HoverLink href='/contact' title='Contact' /> */}
        </nav>
        <nav className='flex flex-wrap items-center justify-center lg:mt-2'>
          <Link className='mr-3 w-6' target='_blank' href='https://www.github.com/fronix'>
            <GithubIcon />
          </Link>
          <Link target='_blank' href='https://www.linkedin.com/in/fronix'>
            <LinkedInIcon />
          </Link>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
        </nav>
      </div>
      <div className='absolute left-[50%] top-2 translate-x-[-50%] '>
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
