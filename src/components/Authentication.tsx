import CurrentUser from "./CurrentUser";
import SignInAndSignUp from "./SignInAndSignUp";

function Authentication({ user, loading }: any) {
  if (loading) return null;

  return <div>{user ? <CurrentUser /> : <SignInAndSignUp />}</div>;
}

export default Authentication;
