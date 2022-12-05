import React from 'react';
import AppLayout from '../../layouts/AppLayout';
import { setMetaData } from '../../utils/setMetaData';

function DesignCakePage() {
  const meta = setMetaData({
    title: '디자인 케이크',
    url: '/design',
  });

  return (
    <>
      <AppLayout meta={meta}>
        <div>디자인 케이크</div>
      </AppLayout>
    </>
  );
};

export default DesignCakePage;
