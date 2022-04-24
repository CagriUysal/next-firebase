import { useContext } from "react";
import Link from "next/link";
import { doc, deleteDoc, updateDoc, increment } from "firebase/firestore";
import dayjs from "dayjs";

import { DATE_FORMAT } from "constants/date";
import { db } from "utils/firebase";
import { UserContext } from "context/User";

const belongToCurrentUser = (currentUser: any, postAuthor: any) => {
  if (!currentUser) {
    return false;
  }

  return currentUser.uid === postAuthor.uid;
};

function Post({
  id,
  title,
  content,
  user,
  createdAt,
  favorites,
  comments,
}: any) {
  const { currentUser } = useContext(UserContext);
  const postRef = doc(db, `posts/${id}`);

  const handleStar = () => updateDoc(postRef, { favorites: increment(1) });
  const handleDelete = () => deleteDoc(postRef);

  return (
    <article className="Post">
      <div className="Post--content">
        <Link href={`/posts/${id}`}>
          <h3 className="link">{title}</h3>
        </Link>
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
          <p>{dayjs(createdAt?.toDate()).format(DATE_FORMAT)}</p>
        </div>
        <div>
          <button className="star" onClick={handleStar}>
            Star
          </button>
          {belongToCurrentUser(currentUser, user) && (
            <button className="delete" onClick={handleDelete}>
              Delete
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

export default Post;
