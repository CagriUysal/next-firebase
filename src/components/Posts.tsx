import Post from "./Post";
import AddPost from "./AddPost";

function Posts({ posts }: any) {
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
