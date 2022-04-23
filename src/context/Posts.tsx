import { ReactNode, useEffect, useState, createContext } from "react";
import { collection, onSnapshot } from "firebase/firestore";

import { db } from "utils/firebase";

type Posts = any[];

export const PostsContext = createContext<Posts>([]);

function PostsProvider({ children }: { children: ReactNode }) {
  const [posts, setPosts] = useState<Posts>([]);

  useEffect(() => {
    const unsubPosts = onSnapshot(collection(db, "posts"), (snapshot) => {
      const posts = snapshot.docs.map((post) => ({
        id: post.id,
        ...post.data(),
      }));

      setPosts(posts);
    });

    return () => unsubPosts();
  }, []);

  return (
    <PostsContext.Provider value={posts}>{children}</PostsContext.Provider>
  );
}

export default PostsProvider;
