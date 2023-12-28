import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDR7r6MuZVwNKLjytoeYH-QNaNZ9CtgnHs",
  authDomain: "ritz-f1344.firebaseapp.com",
  projectId: "ritz-f1344",
  storageBucket: "ritz-f1344.appspot.com",
  messagingSenderId: "669743827570",
  appId: "1:669743827570:web:3418458a23d3b9ffee10eb",
  measurementId: "G-KL72NRWNTT",
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
