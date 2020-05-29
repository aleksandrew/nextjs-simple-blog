import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
    children: any;
    title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          Home
        </Link>
        {' '}
        |
        {' '}
        <Link href="/about">
          About
        </Link>
        {' '}
        |
        {' '}
        <Link href="/users">Users List</Link>
        {' '}
        |
        {' '}
        <a href="/api/users">Users API</a>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I&apos;m here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
