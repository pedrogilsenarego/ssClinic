import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../routes/constants";
import { queryIdentifiers } from "../../../services/constants";
import { userServices } from "../../../services/user.services";
import { Login } from "../../../types/user";
import { defaultValues } from "./constants";
import { CreateProductSchema, CreateProductSchemaType } from "./validation";

const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { reset, control, handleSubmit } = useForm<CreateProductSchemaType>({
    resolver: zodResolver(CreateProductSchema),
    defaultValues,
  });

  const { mutate: signInMutation, isLoading: isLogin } = useMutation(
    userServices.loginUser,
    {
      onError: (error: any) => {
        console.log("error", error);
      },
      onSuccess: (data) => {
        queryClient.setQueryData([queryIdentifiers.USER], data);
        reset();
        navigate(ROUTE_PATHS.HOME);
      },
    }
  );

  const onSubmit: SubmitHandler<CreateProductSchemaType> = async (
    formData: Login
  ) => {
    signInMutation(formData);
  };
  return {
    handleSubmit,
    onSubmit,
    control,
    navigate,
    isLogin,
  };
};

export default useLogin;
