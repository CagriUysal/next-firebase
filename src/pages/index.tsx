import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

import Posts from "components/Posts";
import { auth, db } from "utils/firebase";
import Authentication from "components/Authentication";

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
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubPosts = onSnapshot(collection(db, "posts"), (snapshot) => {
      const posts = snapshot.docs.map((post) => ({
        id: post.id,
        ...post.data(),
      }));

      setPosts(posts);
    });

    const unsubAuth = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unsubPosts();
      unsubAuth();
    };
  }, []);

  return (
    <main>
      <h1>Think Piece</h1>
      <Authentication user={user} />
      <Posts posts={posts} />
    </main>
  );
}

export default Home;
