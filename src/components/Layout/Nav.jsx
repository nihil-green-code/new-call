import Link from 'next/link';
import React from 'react';

export const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href='/' passHref>메인 페이지</Link>
          </li>
          <li>
            <Link href='/custom' passHref>주문제작</Link>
          </li>
          <li>
            <Link href='/design' passHref>디자인</Link>
          </li>
          <li>
            <Link href='/ETC' passHref>ETC</Link>
          </li>
          <li>
            <Link href='/community' passHref>커뮤니티</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};