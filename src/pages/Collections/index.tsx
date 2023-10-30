import { Box, Typography } from "@mui/material";
import Loader from "../../components/Loader";
import Button from "../../components/Ui/Button";
import { Product } from "../../types/product";
import useCollections from "./useCollections";

const Collections = () => {
  const {
    loadingProducts,
    productsData,
    handleClickProduct,
    handleProductToCart,
  } = useCollections();
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
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              rowGap: "20px",
            }}
          >
            <img
              onClick={() => handleClickProduct(product.id)}
              src={product.specialThumbnail}
              alt=""
              key={product.sku}
              style={{
                width: "300px",
                height: "500px",
                cursor: "pointer",
                objectFit: "cover",
              }}
            />
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography fontWeight={700}>€{product.model}</Typography>
              <Typography>€{product.price},00</Typography>
              <Button
                fullWidth
                darkenColors
                onClick={() => handleProductToCart(product)}
              >
                Add to Cart
              </Button>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Collections;
