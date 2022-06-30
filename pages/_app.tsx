import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import Head from 'next/head';
import { ErrorBoundaryContext, useErrorBoundary } from '../hooks/useErrorBoundary';

function MyApp({ Component, pageProps }: AppProps) {
  const [error, resetError] = useErrorBoundary();

  if (error) {
    return (
      <Layout>
        <div
          className='bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4'
          role='alert'
        >
          <p className='font-bold'>Be Warned</p>
          <p>{(error as any).message}</p>
          <button onClick={resetError}>Reload</button>
        </div>
      </Layout>
    );
  }
  return (
    <ErrorBoundaryContext>
      <Layout>
        <Head>
          <meta name='title' content='fronix.se' />
          <meta name='description' content='My personal website' />
          <meta name='keywords' content='fronix, fronix.se, developer, fullstack' />
          <meta name='robots' content='index, follow' />
          <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
          <meta name='language' content='English' />
          <meta name='author' content='Oscar Martin' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <title>fronix.se - Oscar Martin</title>
          <link rel='manifest' href='/manifest.json' />
          <link href='assets/icons/icon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
          <link href='assets/icons/icon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
          <link rel='apple-touch-icon' href='assets/icons/icon-192x192.png'></link>
          <meta name='theme-color' content='#317EFB' />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ErrorBoundaryContext>
  );
}

export default MyApp;
