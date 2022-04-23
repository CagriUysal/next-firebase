import Link from "next/link";
import dayjs from "dayjs";

import { DATE_FORMAT } from "constants/date";
import { auth } from "utils/firebase";

function CurrentUser({ user }: any) {
  const { displayName, photoURL, email, createdAt, children } = user;

  const handleSignOut = () => {
    auth.signOut();
  };

  if (user === null) {
    return null;
  }

  return (
    <section className="CurrentUser">
      <div className="CurrentUser--profile">
        {photoURL && <img src={photoURL} alt={displayName} />}
        <div className="CurrentUser--information">
          <Link href="/userprofile">
            <h2 className="link">{displayName}</h2>
          </Link>

          <p className="email">{email}</p>
          <p className="created-at">
            {dayjs(createdAt.toDate()).format(DATE_FORMAT)}
          </p>
        </div>
      </div>
      <div>
        <div>{children}</div>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    </section>
  );
}

export default CurrentUser;
