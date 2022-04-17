import CurrentUser from "./CurrentUser";
import SignInAndSignUp from "./SignInAndSignUp";

function Authentication({ user, loading }: any) {
  if (loading) return null;

  return <>{user ? <CurrentUser {...user} /> : <SignInAndSignUp />}</>;
}

export default Authentication;
