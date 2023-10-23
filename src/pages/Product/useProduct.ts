import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addProductToCart } from "../../redux/cart/cart.actions";
import { queryIdentifiers } from "../../services/constants";
import { productsServices } from "../../services/products.services";
import { Product } from "../../types/product";

const useProduct = () => {
  const dispatch = useDispatch();
  const { product } = useParams<Record<string, string | undefined>>();
  const documentID = product || "";
  const { isLoading: isLoadingProduct, data: productData } = useQuery<
    Product,
    Error
  >(
    [queryIdentifiers.PRODUCT, documentID],
    () => productsServices.getProduct(documentID),
    {
      enabled: !!documentID,
    }
  );

  const handleProductToCart = () => {
    if (productData) dispatch(addProductToCart([productData]));
  };

  return { isLoadingProduct, productData, handleProductToCart };
};

export default useProduct;
