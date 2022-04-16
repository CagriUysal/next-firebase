import React from "react";
import dayjs from "dayjs";

import { DATE_FORMAT } from "constants/date";

function Comment({ content, user, createdAt }: any) {
  return (
    <article className="Comment">
      <span className="Comment--author">{user.displayName}</span>
      <span className="Comment--content">{content}</span>
      <span className="Comment--timestamp">
        {dayjs(createdAt).format(DATE_FORMAT)}
      </span>
    </article>
  );
}

export default Comment;
