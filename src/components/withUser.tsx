import { UserContext } from "context/User";

function withUser(Component: any) {
  const WrappedComponent = (props: any) => (
    <UserContext.Consumer>
      {({ currentUser }) => <Component currentUser={currentUser} {...props} />}
    </UserContext.Consumer>
  );

  return WrappedComponent;
}

export default withUser;
