import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDtSI1tfFfZjj-AUxjGqfBCAZEMXSPhyrs",
  authDomain: "ssclinic-1e196.firebaseapp.com",
  projectId: "ssclinic-1e196",
  storageBucket: "ssclinic-1e196.appspot.com",
  messagingSenderId: "799635055432",
  appId: "1:799635055432:web:63c5b6c8341a68888a897d",
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
