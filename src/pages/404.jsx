import React from 'react';
import AppLayout from '../layouts/AppLayout';
import { setMetaData } from '../utils/setMetaData';

function NotPound404Page() {
  const meta = setMetaData({
    title: '404 페이지 에러',
    url: '/404',
  });

  return (
    <>
      <AppLayout meta={meta}>
        <div>페이지가 존재하지 않습니다.</div>
      </AppLayout>
    </>
  );
};

export default NotPound404Page;
