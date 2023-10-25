import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { State } from "../../../../../redux/types";
import { ROUTE_PATHS } from "../../../../../routes/constants";
import { userServices } from "../../../../../services/user.services";
import { Checkout } from "../../../../../types/checkout";
import { CurrentUser } from "../../../../../types/user";
import { defaultValues, defaultValues1 } from "./constants";
import { CreateUserSchema, CreateUserSchemaType } from "./validation";

const useCheckout = () => {
  const navigate = useNavigate();

  const currentUser = useSelector<State, CurrentUser | null>(
    (state) => state.user.currentUser
  );

  const { reset, control, handleSubmit } = useForm<CreateUserSchemaType>({
    resolver: zodResolver(CreateUserSchema),
    defaultValues: currentUser ? defaultValues1(currentUser) : defaultValues,
  });

  const { mutate: createUser, isLoading: isRegistering } = useMutation(
    userServices.createUser,
    {
      onError: (error: any) => {
        console.log("error", error);
      },
      onSettled: () => {
        reset();
        navigate(ROUTE_PATHS.HOME);
      },
    }
  );

  const onSubmit: SubmitHandler<CreateUserSchemaType> = async (
    formData: Checkout
  ) => {
    //createUser(formData as CreateUser);
  };
  return {
    handleSubmit,
    onSubmit,
    control,
    isRegistering,
    currentUser,
  };
};

export default useCheckout;
