import Link from 'next/link';
import React from 'react';

export function Nav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href='/' passHref>
              <a>메인 페이지</a>
            </Link>
          </li>
          <li>
            <Link href='/custom' passHref>
              <a>주문제작</a>
            </Link>
          </li>
          <li>
            <Link href='/design' passHref>
              <a>디자인</a>
            </Link>
          </li>
          <li>
            <Link href='/ETC' passHref>
              <a>ETC</a>
            </Link>
          </li>
          <li>
            <Link href='/community' passHref>
              <a>커뮤니티</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};