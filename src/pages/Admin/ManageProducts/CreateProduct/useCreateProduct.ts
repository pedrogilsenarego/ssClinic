import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../../routes/constants";
import { productsServices } from "../../../../services/products.services";
import { Product } from "../../../../types/product";
import { defaultValues } from "./constants";
import { CreateProductSchema, CreateProductSchemaType } from "./validation";

const useCreateProduct = () => {
  const navigate = useNavigate();
  const { reset, control, handleSubmit, setValue, setError } =
    useForm<CreateProductSchemaType>({
      resolver: zodResolver(CreateProductSchema),
      defaultValues,
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

  const onSubmit: SubmitHandler<CreateProductSchemaType> = async (
    formData: CreateProductSchemaType
  ) => {
    createProduct(formData as Product);
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
