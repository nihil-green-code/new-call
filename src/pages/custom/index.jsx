import React from 'react';
import AppLayout from '../../layouts/AppLayout';
import { setMetaData } from '../../utils/setMetaData';

function CustomCakePage() {
  const meta = setMetaData({
    title: '주문제작 케이크',
    url: '/custom',
  });

  return (
    <>
      <AppLayout meta={meta}>
        <div>커스텀 케이크</div>
      </AppLayout>
    </>
  );
};

export default CustomCakePage;
