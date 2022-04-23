import Posts from "components/Posts";
import Authentication from "components/Authentication";

function Home() {
  return (
    <main>
      <h1>Think Piece</h1>
      <Authentication />
      <Posts />
    </main>
  );
}

export default Home;
