import { Box, Grid, Typography } from "@mui/material";
import Loader from "../../components/Loader";

import Button from "../../components/Ui/Button";
import useProduct from "./useProduct";

const Product = () => {
  const { isLoadingProduct, productData, handleProductToCart } = useProduct();
  return isLoadingProduct ? (
    <Loader />
  ) : (
    <Grid container columnSpacing="20px">
      <Grid item xs={6}>
        <img
          src={productData?.specialThumbnail}
          style={{ width: "100%" }}
          alt=""
        />
      </Grid>
      <Grid item xs={6}>
        <Box>
          <Typography style={{ fontWeight: 700, fontSize: "20px" }}>
            {productData?.model}
          </Typography>
          <Typography style={{ fontSize: "20px" }}>
            €{productData?.price}
          </Typography>
          <Button fullWidth darkenColors onClick={handleProductToCart}>
            Add to Cart
          </Button>
          <Typography style={{}}>{productData?.description}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Product;
