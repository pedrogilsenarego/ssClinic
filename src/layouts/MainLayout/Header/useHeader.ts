import { useState } from "react";
import { useSelector } from "react-redux";
import { State } from "../../../redux/types";

const useHeader = () => {
  const [cartDrawer, setCartDrawer] = useState<boolean>(false);
  const cartItems = useSelector<State, number>(
    (state) => state.cart.cartItems.length
  );
  return { cartItems, cartDrawer, setCartDrawer };
};

export default useHeader;
