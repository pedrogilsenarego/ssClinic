import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../../routes/constants";
import { productsServices } from "../../../../services/products.services";
import { FORM_VALIDATION } from "./validation";

const useCreateProduct = () => {
  const navigate = useNavigate();
  const { reset, control, handleSubmit, setValue, setError } = useForm({
    resolver: yupResolver(FORM_VALIDATION),
  });

  const { mutate: createProduct, isLoading: isCreatingProduct } = useMutation(
    productsServices.createProduct,
    {
      onError: (error: any) => {
        console.log("error", error);
      },
      onSettled: () => {
        reset();
        navigate(ROUTE_PATHS.ADMIN);
      },
    }
  );

  const onSubmit = async (formData: any) => {
    createProduct(formData);
  };
  return {
    handleSubmit,
    onSubmit,
    control,
    setValue,
    isCreatingProduct,
    setError,
  };
};

export default useCreateProduct;
