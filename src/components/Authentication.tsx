import { useContext } from "react";

import { UserContext } from "context/User";

import CurrentUser from "./CurrentUser";
import SignInAndSignUp from "./SignInAndSignUp";

function Authentication() {
  const { currentUser, loading } = useContext(UserContext);

  if (loading) {
    return null;
  }

  return (
    <>
      {currentUser ? <CurrentUser user={currentUser} /> : <SignInAndSignUp />}
    </>
  );
}

export default Authentication;
