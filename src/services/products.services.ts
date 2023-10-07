import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/utils";
import { Product } from "../types/product";
import { DB } from "./constants";

export const productsServices = {
  createProduct: async (product: Product) => {
    try {
      const docRef = await addDoc(collection(db, DB.PRODUCTS), product);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  },
  getProducts: async () => {
    try {
      const querySnapshot = await getDocs(collection(db, DB.PRODUCTS));
      querySnapshot.forEach((doc) => {
        console.log(`Product:${doc.id} => ${doc.data()}`);
      });
      return querySnapshot;
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  },
};
