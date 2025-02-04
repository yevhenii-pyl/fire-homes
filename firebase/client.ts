import { initializeApp, getApps } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { FirebaseStorage, getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "fire-homes-706b1.firebaseapp.com",
  projectId: "fire-homes-706b1",
  storageBucket: "fire-homes-706b1.firebasestorage.app",
  messagingSenderId: "16490787556",
  appId: "1:16490787556:web:fba74f71a792546f1132f1",
};

const currentApps = getApps();
let auth: Auth;
let storage: FirebaseStorage;

if (!currentApps.length) {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  storage = getStorage(app);
} else {
  const app = currentApps[0];
  auth = getAuth(app);
  storage = getStorage(app);
}

export { auth, storage };
