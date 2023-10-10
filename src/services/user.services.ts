import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase/utils"; // Import your Firebase Auth and Firestore instances
import { CreateUser } from "../types/user";
import { DB } from "./constants";

export const userServices = {
  createUser: async ({ email, password, username }: CreateUser) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      const newUser = { email, username, role: ["USER"] };
      const userDocRef = await addDoc(collection(db, DB.USERS), newUser);
      console.log("Document written with ID: ", userDocRef.id);
    } catch (error) {
      console.error("Error creating user:", error);
      throw error; // Handle the error appropriately in your application
    }
  },
};
