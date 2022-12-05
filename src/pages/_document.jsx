import { Html, Head, Main, NextScript } from "next/document";

function Document() {
  return (
    <>
      <Html lang="ko">
        <Head>
          <link
            async
            rel="stylesheet"
            href='https://use.fontawesome.com/releases/v5.15.4/css/all.css'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    </>
  );
};

export default Document;