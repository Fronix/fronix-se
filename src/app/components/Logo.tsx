import Image from 'next/image';
import logo_transparent from '../../../public/logo_transparent_round.png';
import Link from 'next/link';

const Logo = () => (
  <div className='w-16 rounded-full border-2 border-neutral-300'>
    <Link href='/' title='home'>
      <Image src={logo_transparent} alt='fronix' />
    </Link>
  </div>
);

export default Logo;
