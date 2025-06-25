import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase - Solo se inicializa si todas las variables están disponibles
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_APIKEY_F,
  authDomain: import.meta.env.VITE_API_DOMAIN_F,
  projectId: import.meta.env.VITE_API_PROYECTID_F,
  storageBucket: import.meta.env.VITE_API_BUCKET_F,
  messagingSenderId: import.meta.env.VITE_API_SENDERID_F,
  appId: import.meta.env.VITE_API_APPID_F,
};

// Verificar si todas las variables de Firebase están definidas
const hasAllFirebaseVars = Object.values(firebaseConfig).every(value => value && value !== 'undefined');

let app, auth, db, storage;

if (hasAllFirebaseVars) {
  try {
    console.log('🔥 Inicializando Firebase...');
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    storage = getStorage(app);
    console.log('✅ Firebase inicializado correctamente');
  } catch (error) {
    console.warn('⚠️ Error inicializando Firebase:', error.message);
    console.log('🔄 Modo de desarrollo sin Firebase activo');
  }
} else {
  console.log('⚠️ Variables de Firebase no definidas - Ejecutando en modo de desarrollo');
  console.log('💡 Para usar Firebase, define las variables VITE_API_* en tu archivo .env');
  
  // Crear objetos mock para evitar errores
  app = null;
  auth = null;
  db = null;
  storage = null;
}

export { app, auth, db, storage };
// export default onAuthStateChanged;
