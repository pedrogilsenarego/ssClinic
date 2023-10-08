import { useQuery } from "@tanstack/react-query";
import { queryIdentifiers } from "../../../services/constants";
import { productsServices } from "../../../services/products.services";
import { Product } from "../../../types/product";

const useManageProducts = () => {
  const { data: productsData = [] } = useQuery<Product[] | any>(
    [queryIdentifiers.PRODUCTS],
    productsServices.getProducts
  );

  const handleAction = async (type: string, id: number, value?: any) => {
    switch (type) {
      default:
        break;
    }
  };
  return { handleAction, productsData };
};

export default useManageProducts;
