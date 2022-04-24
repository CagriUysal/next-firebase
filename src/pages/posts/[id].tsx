import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";

import Post from "components/Post";
import Comments from "components/Comments";
import { db } from "utils/firebase";

function Posts() {
  const [post, setPost] = useState<any>(null);
  const [comments, setComments] = useState<any[]>([]);

  const {
    query: { id },
  } = useRouter();

  const postRef = doc(db, `posts/${id}`);
  const commentsRef = collection(db, `${postRef.path}/comments`);

  useEffect(() => {
    const unsubPost = onSnapshot(postRef, (postSnap) => {
      setPost({ id, ...postSnap.data() });
    });

    const unsubComments = onSnapshot(commentsRef, (commentsSnap) => {
      const comments = commentsSnap.docs.map((comment) => ({
        id: comment.id,
        ...comment.data(),
      }));
      setComments(comments);
    });

    return () => {
      unsubPost();
      unsubComments();
    };
  }, []);

  const handleCreateComment = (comment: any) => {
    setDoc(doc(commentsRef), { ...comment });
  };

  return (
    <section>
      {post && <Post {...post} />}
      <Comments comments={comments} onCreate={handleCreateComment} />
    </section>
  );
}

export default Posts;
