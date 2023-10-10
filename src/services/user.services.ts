import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/utils"; // Import your Firebase Auth and Firestore instances
import { CreateUser, Login } from "../types/user";
import { DB } from "./constants";

export const userServices = {
  createUser: async ({ email, password, username }: CreateUser) => {
    try {
      // Create a new user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Create a Firestore document with the same ID as user.uid
      const userDocRef = doc(db, DB.USERS, user.uid);
      await setDoc(userDocRef, { email, username, role: ["USER"] });

      console.log("Document written with ID: ", user.uid); // Use user.uid as the Firestore document ID
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  },
  loginUser: async ({ email, password }: Login) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      // Retrieve user data from Firestore
      const userDoc = await getDoc(doc(db, DB.USERS, user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        return { ...user, userData };
      } else {
        return user;
      }
    } catch (error) {
      console.error("Error signing in:", error);
      throw error;
    }
  },
};
