import type { AppProps } from "next/app";

import PostsProvider from "context/Posts";
import UserProvider from "context/User";

import "styles/index.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PostsProvider>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </PostsProvider>
  );
}

export default MyApp;
