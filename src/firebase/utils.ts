import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDk-meqzqMfwkB_MpToufreqBHgGv06ETw",
  authDomain: "favre-bulle.firebaseapp.com",
  projectId: "favre-bulle",
  storageBucket: "favre-bulle.appspot.com",
  messagingSenderId: "902751605406",
  appId: "1:902751605406:web:90bfcab14bd89ace69218f",
  measurementId: "G-1GS1159M4X",
};

const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

/*export const GoogleProvider = new getAuth(app).GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: "select_account" });

export const FacebookProvider = new auth.FacebookAuthProvider();
FacebookProvider.setCustomParameters({ prompt: "select_account" });*/
