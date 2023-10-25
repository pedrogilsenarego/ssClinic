import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../../../routes/constants";
import { userServices } from "../../../../../services/user.services";
import { Checkout } from "../../../../../types/checkout";
import { defaultValues } from "./constants";
import { CreateUserSchema, CreateUserSchemaType } from "./validation";

const useCheckout = () => {
  const navigate = useNavigate();
  const { reset, control, handleSubmit } = useForm<CreateUserSchemaType>({
    resolver: zodResolver(CreateUserSchema),
    defaultValues,
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
  };
};

export default useCheckout;
