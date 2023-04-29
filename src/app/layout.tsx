import '../styles/globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Oscar Martin',
  description: 'Personal site for Oscar Martin'
};

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-neutral-900 text-white'>
        <Navbar />
        <main className='font-mont flex w-full items-center'>
          <div className='z-0 inline-block h-full w-full p-0'>{children}</div>
        </main>
        <footer>
          <div className='flex h-16 items-center justify-center'>
            <p className='text-sm'>© {new Date().getFullYear()} Oscar Martin</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
