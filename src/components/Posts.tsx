import Post from "./Post";
import AddPost from "./AddPost";

function Posts({ posts, onCreate }: any) {
  return (
    <section className="Posts">
      <AddPost onCreate={onCreate} />
      {posts.map((post: any) => (
        <Post {...post} key={post.id} />
      ))}
    </section>
  );
}

export default Posts;
