import { useEffect, useState } from "react";
import { collection, getDocs, addDoc, onSnapshot } from "firebase/firestore";

import Posts from "components/Posts";
import { db } from "utils/firebase";

export async function getServerSideProps() {
  const snapshot = await getDocs(collection(db, "posts"));
  const posts: any = snapshot.docs.map((post) => ({
    id: post.id,
    ...post.data(),
  }));

  return {
    props: { initialPosts: posts },
  };
}

function Home() {
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "posts"), (snapshot) => {
      const posts = snapshot.docs.map((post) => ({
        id: post.id,
        ...post.data(),
      }));

      setPosts(posts);
    });

    return () => unsub();
  }, []);

  return (
    <main>
      <h1>Think Piece</h1>
      <Posts posts={posts} />
    </main>
  );
}

export default Home;
