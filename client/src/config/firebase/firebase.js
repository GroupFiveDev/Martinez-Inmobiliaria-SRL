import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_APIKEY_F,
  authDomain: import.meta.env.VITE_API_DOMAIN_F,
  projectId: import.meta.env.VITE_API_PROYECTID_F,
  storageBucket: import.meta.env.VITE_API_BUCKET_F,
  messagingSenderId: import.meta.env.VITE_API_SENDERID_F,
  appId: import.meta.env.VITE_API_APPID_F,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
// export default onAuthStateChanged;
