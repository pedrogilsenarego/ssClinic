import { Box } from "@mui/material";
import Loader from "../../components/Loader";
import { Product } from "../../types/product";
import useCollections from "./useCollections";

const Collections = () => {
  const { loadingProducts, productsData, handleClickProduct } =
    useCollections();
  return loadingProducts ? (
    <Loader />
  ) : (
    <Box
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        columnGap: "40px",
      }}
    >
      {productsData.map((product: Product) => {
        return (
          <img
            onClick={() => handleClickProduct(product.id)}
            src={product.specialThumbnail}
            alt=""
            key={product.sku}
            style={{ width: "300px", cursor: "pointer" }}
          />
        );
      })}
    </Box>
  );
};

export default Collections;
