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
  if (!auth) {
    console.warn('⚠️ Firebase no disponible - Login simulado para desarrollo');
    // Simular login exitoso para desarrollo
    return { user: { email: 'dev@localhost', uid: 'dev-user' } };
  }
  
  try {
    const userCredentials = await signInWithEmailAndPassword(auth, email, password)
    return userCredentials
  } catch (error) {
    console.error('Error en login:', error);
    throw error;
  }
}

export async function logout() {
  if (!auth) {
    console.log('🔄 Logout simulado para desarrollo');
    return;
  }
  
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Error en logout:', error);
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (!auth) {
      console.log('🔄 Firebase no disponible - Modo desarrollo sin autenticación');
      // En modo desarrollo sin Firebase, el usuario puede ser null (no autenticado)
      // o puedes simular un usuario para testing: setUser({ email: 'dev@localhost', uid: 'dev-user' });
      return;
    }

    try {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        if (currentUser) {
          console.log('✅ Usuario autenticado:', currentUser.email);
        } else {
          console.log('🔐 Usuario no autenticado');
        }
      });

      // Cleanup function
      return () => unsubscribe();
    } catch (error) {
      console.error('Error configurando auth listener:', error);
    }
  }, [])

  return (
    <authContext.Provider value={{ login, user, logout }}>
      {children}
    </authContext.Provider>
  );
}
