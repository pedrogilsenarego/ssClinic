import { CartProduct } from "../../../../../redux/cart/cart.types";

export const getTotalValue = (cartProducts: CartProduct[]) => {
  let totalValue = 0;

  for (const cartProduct of cartProducts) {
    totalValue += (cartProduct.product.price || 0) * cartProduct.value;
  }
  return totalValue;
};
