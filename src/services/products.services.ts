import { Product } from "../types/product";

export const productsServices = {
  createProduct: async (product: Product) => {
    console.log(product);
  },
};
