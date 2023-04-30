'use client';
import { useRouter } from 'next/navigation';
import HoverLink from './components/HoverLink';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className='flex h-16 items-center justify-center'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-5xl'>Not found 😿</h1>
        <div>
          <HoverLink href='/' title='Go back home' noPathCheck />
        </div>
      </div>
    </div>
  );
}
