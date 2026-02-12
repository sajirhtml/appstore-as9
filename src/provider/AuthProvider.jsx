import React, { createContext, useEffect } from "react";
import app from "../firebase/firebase.config";
export const AuthContext = createContext();
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  console.log(user);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

    const Login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const Logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const authData = {
    user,
    setUser,
    createUser,
    Login,
    Logout,
  };
  return <AuthContext value={authData}>{children} </AuthContext>;
};

export default AuthProvider;
