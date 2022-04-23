import { initializeApp } from "firebase/app";
import {
  doc,
  getDoc,
  getFirestore,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCcXenBE75W9Olu2A-xowBy1sR55BMTTxM",
  authDomain: "test-f7dd0.firebaseapp.com",
  projectId: "test-f7dd0",
  storageBucket: "test-f7dd0.appspot.com",
  messagingSenderId: "205833126590",
  appId: "1:205833126590:web:6915a345321999357054ef",
  measurementId: "G-9R3RZ32LWK",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const createUserProfile = async (user: User, additionalData?: any) => {
  const userRef = doc(db, `/users/${user.uid}`);
  const snapshot = await getDoc(userRef);

  if (!snapshot.exists()) {
    try {
      const { displayName, email, photoURL } = user;

      await setDoc(userRef, {
        displayName,
        email,
        photoURL,
        createdAt: serverTimestamp(),
        ...additionalData,
      });
    } catch (error) {
      console.error(error);
    }
  }

  return getUserProfile(user.uid);
};

export const getUserProfile = async (uid: string) => {
  try {
    const userSnapshot = await getDoc(doc(db, `/users/${uid}`));
    const user = userSnapshot.data();

    return { uid, ...user };
  } catch (error) {
    console.error(error);
  }
};
