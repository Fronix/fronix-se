import '../styles/globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Oscar Martin',
  description: 'Personal site for Oscar Martin'
};

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <div className='flex h-screen flex-col'>
          <Navbar />
          <main className='font-mont flex w-full items-center'>{children}</main>
          <footer className='mt-auto'>
            <div className='flex h-16 items-center justify-center'>
              <p className='text-sm'>© 2024 Oscar Martin</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
