import { Box, Grid, Typography } from "@mui/material";
import Loader from "../../components/Loader";

import Button from "../../components/Ui/Button";
import useProduct from "./useProduct";

const Product = () => {
  const {
    isLoadingProduct,
    productData,
    handleProductToCart,
    mainImage,
    setMainImage,
  } = useProduct();
  return isLoadingProduct ? (
    <Loader />
  ) : (
    <Grid container columnSpacing="20px">
      <Grid item xs={6}>
        <img
          src={productData?.images[mainImage]}
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
      <Grid item xs={12}>
        <Box style={{ display: "flex", columnGap: "10px" }}>
          {productData?.images.map((image: string, index: number) => {
            return (
              <img
                onClick={() => setMainImage(index)}
                key={index}
                src={image}
                alt=""
                style={{
                  cursor: "pointer",
                  height: "100px",
                  width: "100px",
                  objectFit: "contain",
                  border: mainImage === index ? `solid 2px black` : "none",
                }}
              />
            );
          })}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Product;
