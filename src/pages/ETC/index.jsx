import React from 'react';
import styled from 'styled-components';
import AppLayout from '../../layouts/AppLayout';
import { setMetaData } from '../../utils/setMetaData';

function ETCPage() {
  const meta = setMetaData({
    title: 'ETC',
    url: '/ETC',
  });

  return (
    <>
      <AppLayout meta={meta}>
        <div>기타</div>
      </AppLayout>
    </>
  );
};

export default ETCPage;
