import dayjs from "dayjs";

import { DATE_FORMAT } from "constants/date";

function Post({ title, content, user, createdAt, stars, comments }: any) {
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
            {stars}
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
          <button className="star">Star</button>
          <button className="delete">Delete</button>
        </div>
      </div>
    </article>
  );
}

export default Post;
