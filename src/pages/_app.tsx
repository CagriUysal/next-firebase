import Link from "next/link";
import type { AppProps } from "next/app";

import PostsProvider from "context/Posts";
import UserProvider from "context/User";
import Authentication from "components/Authentication";

import "styles/index.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PostsProvider>
      <UserProvider>
        <Link href="/">
          <h1 className="link">Think Piece</h1>
        </Link>
        <Authentication />
        <Component {...pageProps} />
      </UserProvider>
    </PostsProvider>
  );
}

export default MyApp;
