import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartProduct } from "../../../redux/cart/cart.types";
import { updateLang } from "../../../redux/general/actions";
import { State } from "../../../redux/types";
import { i18n } from "../../../translations/i18n";

const useHeader = () => {
  const dispatch = useDispatch();
  const [cartDrawer, setCartDrawer] = useState<boolean>(false);
  const cartItems = useSelector<State, CartProduct[]>(
    (state) => state.cart.cartItems
  );

  const totalCartItems = cartItems.reduce(
    (total, cartItem) => total + cartItem.value,
    0
  );

  const lang = useSelector<State, string>((state) => state.general.lang);

  const changeLanguage = (lng: string) => {
    dispatch(updateLang(lng.toUpperCase()));
    i18n.changeLanguage(lng);
    setTimeout(() => {
      window.location.reload();
    }, 200);
  };

  return { totalCartItems, cartDrawer, setCartDrawer, lang, changeLanguage };
};

export default useHeader;
