import React, { createContext, ReactNode, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { auth, createUserProfile } from "utils/firebase";

export const UserContext = createContext(
  {} as { currentUser: any; loading: boolean }
);

function UserProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    setLoading(true);

    const unsubAuth = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser === null) {
        setCurrentUser(null);
      } else {
        const user = await createUserProfile(currentUser);
        setCurrentUser(user);
      }

      setLoading(false);
    });

    return () => unsubAuth();
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, loading }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
