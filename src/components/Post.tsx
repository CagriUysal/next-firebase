import dayjs from "dayjs";
import { doc, deleteDoc, updateDoc, increment } from "firebase/firestore";

import { DATE_FORMAT } from "constants/date";
import { db } from "utils/firebase";

function Post({
  id,
  title,
  content,
  user,
  createdAt,
  favorites,
  comments,
}: any) {
  const postRef = doc(db, "posts", id);

  const handleStar = () => updateDoc(postRef, { favorites: increment(1) });
  const handleDelete = () => deleteDoc(postRef);

  return (
    <article className="Post">
      <div className="Post--content">
        <h3>{title}</h3>
        <div>{content}</div>
      </div>
      <div className="Post--meta">
        <div>
          <p>
            <span role="img" aria-label="star">
              ⭐️
            </span>
            {favorites}
          </p>
          <p>
            <span role="img" aria-label="comments">
              🙊
            </span>
            {comments}
          </p>
          <p>Posted by {user.displayName}</p>
          {/* TODO: add proper format */}
          <p>{dayjs(createdAt).format(DATE_FORMAT)}</p>
        </div>
        <div>
          <button className="star" onClick={handleStar}>
            Star
          </button>
          <button className="delete" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}

export default Post;
