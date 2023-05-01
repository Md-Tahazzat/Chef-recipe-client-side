import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import app from "../components/firebase/Firebase.config";
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  // all provider
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSing = () => signInWithPopup(auth, googleProvider);
  const gitHubSign = () => signInWithPopup(auth, gitHubProvider);
  const logOutUser = () => signOut(auth);

  const googleLogin = () =>
    useEffect(() => {
      const unSubscribed = onAuthStateChanged(auth, (loggedUser) => {
        setUser(loggedUser), setLoading(false);
      });

      return () => unSubscribed();
    }, []);

  const authInfo = {
    user,
    createUser,
    loginUser,
    logOutUser,
    loading,
    googleSing,
    gitHubSign,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
