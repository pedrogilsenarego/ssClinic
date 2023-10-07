import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/utils";
import { Product } from "../types/product";

export const productsServices = {
  createProduct: async (product: Product) => {
    try {
      const docRef = await addDoc(collection(db, "products"), product);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  },
};
