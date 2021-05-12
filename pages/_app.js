import '../css/index.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Safex</title>
        <meta
          name='Description'
          content='Safex will be up and running soon.'
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
