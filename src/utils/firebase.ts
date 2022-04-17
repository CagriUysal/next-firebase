import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => signInWithPopup(auth, provider);
