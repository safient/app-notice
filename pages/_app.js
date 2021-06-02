import '../css/index.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Safient</title>
        <meta
          name='Description'
          content='Safient will be up and running soon.'
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
