import React, { createContext, ReactNode, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { auth, createUserProfile } from "utils/firebase";

export const UserContext = createContext({} as { user: any; loading: boolean });

function UserProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    setLoading(true);

    const unsubAuth = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser === null) {
        setUser(null);
      } else {
        const user = await createUserProfile(currentUser);
        setUser(user);
      }

      setLoading(false);
    });

    return () => unsubAuth();
  }, []);

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
