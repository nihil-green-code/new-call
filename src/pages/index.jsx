import styled from "styled-components";
import AppLayout from "../layouts/AppLayout";
import { TestDiv } from "../styles/Test";
import { setMetaData } from "../utils/setMetaData";

export default function Home() {
  const meta = setMetaData({
    title: '홈',
    url: '/',
  });

  return (
    <>
      <AppLayout meta={meta}>
        <div>메인 페이지</div>
        <TestDiv>테스트</TestDiv>
      </AppLayout>
    </>
  )
}