import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from "../config/firebase/firebase";

export const authContext = createContext();

export function useAuth() {
  const context = useContext(authContext)
  return context
}

// export async function signup(email, password) {
// const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
// return userCredentials
// }

export async function login(email, password) {
  const userCredentials = await signInWithEmailAndPassword(auth, email, password)
  return userCredentials
}

export async function logout() {
  signOut(auth)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
    })
  }, [])
  return <authContext.Provider value={{ login, user, logout }}>{children}</authContext.Provider>;
}
