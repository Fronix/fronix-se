import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='mb-10'>
      <Link href='https://github.com/fronix' aria-label='Github' target='_blank' rel='noreferrer'>
        <a>Created by Oscar Martin</a>
      </Link>
    </footer>
  );
};

export default Footer;
