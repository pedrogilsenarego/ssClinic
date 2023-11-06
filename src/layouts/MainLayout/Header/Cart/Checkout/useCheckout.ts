import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";

import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../../../../redux/cart/cart.actions";
import { CartProduct } from "../../../../../redux/cart/cart.types";
import { updateSuccessNotification } from "../../../../../redux/general/actions";
import { State } from "../../../../../redux/types";
import { ROUTE_PATHS } from "../../../../../routes/constants";

import { stripeLocal } from "../../../../../stripe/config";
import { i18n } from "../../../../../translations/i18n";
import { Checkout } from "../../../../../types/checkout";
import { CurrentUser } from "../../../../../types/user";
import { defaultValues } from "./constants";
import { CreateUserSchema, CreateUserSchemaType } from "./validation";

type Props = {
  closeCart: (signal: boolean) => void;
};

const useCheckout = ({ closeCart }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector<State, CurrentUser | null>(
    (state) => state.user.currentUser
  );
  const cartProducts = useSelector<State, CartProduct[]>(
    (state) => state.cart.cartItems
  );

  const { reset, control, handleSubmit } = useForm<CreateUserSchemaType>({
    resolver: zodResolver(CreateUserSchema),
    defaultValues,
  });

  const handleSubmitCard = async (values: CreateUserSchemaType) => {
    let items: {
      title: string;
      amount: number;
      quantity: number;
    }[] = [];

    cartProducts.forEach((item: CartProduct) => {
      const amount = (item.product.price * 100).toFixed(1);

      items.push({
        title: `${item.product.model}-${item.product.sku}`,
        amount: parseFloat(amount),
        quantity: item.value,
      });
    });

    await fetch(stripeLocal, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items, values }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.url) {
          dispatch(clearCart());
          dispatch(updateSuccessNotification(i18n.t("cartDrawer.successBuy")));
          closeCart(false);
          window.location.assign(res.url);
        }
      });
  };

  const { mutate: pay, isLoading: isPaying } = useMutation(handleSubmitCard, {
    onError: (error: any) => {
      console.log("error", error);
    },
    onSettled: () => {
      reset();
      navigate(ROUTE_PATHS.HOME);
    },
  });

  const onSubmit: SubmitHandler<CreateUserSchemaType> = async (
    formData: Checkout
  ) => {
    pay(formData as CreateUserSchemaType);
  };
  return {
    handleSubmit,
    onSubmit,
    control,
    isPaying,
    currentUser,
  };
};

export default useCheckout;
