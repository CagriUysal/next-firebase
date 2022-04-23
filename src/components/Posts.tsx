import { useContext } from "react";

import { PostsContext } from "context/Posts";

import Post from "./Post";
import AddPost from "./AddPost";

function Posts() {
  const posts = useContext(PostsContext);

  return (
    <section className="Posts">
      <AddPost />
      {posts.map((post: any) => (
        <Post {...post} key={post.id} />
      ))}
    </section>
  );
}

export default Posts;
