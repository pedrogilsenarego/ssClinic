import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../routes/constants";
import { queryIdentifiers } from "../../services/constants";
import { productsServices } from "../../services/products.services";
import { Product } from "../../types/product";

const useCollections = () => {
  const navigate = useNavigate();
  const { data: productsData = [], isLoading: loadingProducts } = useQuery<
    Product[] | any
  >([queryIdentifiers.PRODUCTS], productsServices.getProducts);

  const handleClickProduct = (id: string) =>
    navigate(ROUTE_PATHS.PRODUCT.replace(":product", id));

  return {
    loadingProducts,
    productsData,
    handleClickProduct,
  };
};

export default useCollections;
