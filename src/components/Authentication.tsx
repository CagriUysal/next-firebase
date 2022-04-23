import { useContext } from "react";

import { UserContext } from "context/User";

import CurrentUser from "./CurrentUser";
import SignInAndSignUp from "./SignInAndSignUp";

function Authentication() {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return null;
  }

  return <>{user ? <CurrentUser user={user} /> : <SignInAndSignUp />}</>;
}

export default Authentication;
