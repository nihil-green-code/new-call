import Head from 'next/head';
import React from 'react';

export const SiteMeta = ({ meta }) => {
  const { title } = meta;

  const siteTitle = title ? `${title} | KALL` : 'KALL';

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </>
  );
};