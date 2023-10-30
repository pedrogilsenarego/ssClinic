import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProductToCart } from "../../redux/cart/cart.actions";
import { ROUTE_PATHS } from "../../routes/constants";
import { queryIdentifiers } from "../../services/constants";
import { productsServices } from "../../services/products.services";
import { Product } from "../../types/product";

const useCollections = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: productsData = [], isLoading: loadingProducts } = useQuery<
    Product[] | any
  >([queryIdentifiers.PRODUCTS], productsServices.getProducts);

  const handleClickProduct = (id: string) =>
    navigate(ROUTE_PATHS.PRODUCT.replace(":product", id));

  const handleProductToCart = (product: Product) => {
    if (product) dispatch(addProductToCart([product]));
  };

  return {
    loadingProducts,
    productsData,
    handleClickProduct,
    handleProductToCart,
  };
};

export default useCollections;
