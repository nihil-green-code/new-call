import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>사이트 제목</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
