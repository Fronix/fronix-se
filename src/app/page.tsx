import { type NextPage } from 'next';
import Image from 'next/image';
import homeImage from '../../public/logo_transparent.png';
const Home: NextPage = () => {
  return (
    <div className='justify-space-center flex w-full items-center'>
      <div className='m-auto'>
        <Image src={homeImage} alt='fronix' height={750} width={750} />
      </div>
    </div>
  );
};

export default Home;
