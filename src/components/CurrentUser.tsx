import dayjs from "dayjs";

import { DATE_FORMAT } from "constants/date";
import { auth } from "utils/firebase";

function CurrentUser({
  displayName,
  photoURL,
  email,
  createdAt,
  children,
}: any) {
  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <section className="CurrentUser">
      <div className="CurrentUser--profile">
        {photoURL && <img src={photoURL} alt={displayName} />}
        <div className="CurrentUser--information">
          <h2>{displayName}</h2>
          <p className="email">{email}</p>
          <p className="created-at">{dayjs(createdAt).format(DATE_FORMAT)}</p>
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
