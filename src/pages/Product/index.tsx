import { Box, Grid, Typography } from "@mui/material";
import Loader from "../../components/Loader";

import { Icons } from "../../components/Icons";
import { Container } from "../../components/TableList/ImagePreview/styles";
import Button from "../../components/Ui/Button";
import { CSS, Colors, mainColors } from "../../theme/theme";
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
    <Box display="flex" justifyContent="center" mt="50px">
      <Grid container columnSpacing="40px" maxWidth="xl">
        <Grid item xs={6}>
          <img
            src={productData?.images[mainImage]}
            style={{ width: "100%", height: "800px", objectFit: "cover" }}
            alt=""
          />
        </Grid>
        <Grid item xs={6}>
          <Box>
            <Typography
              style={{
                fontSize: "20px",
                color: mainColors.secondary[400],
                textTransform: "capitalize",
              }}
            >
              {productData?.model}
            </Typography>
            <Box
              mt={"40px"}
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "20px",
              }}
            >
              <Typography style={{ fontSize: "20px" }}>
                €{productData?.price.toFixed(2)}
              </Typography>
              <Box
                style={{
                  display: "flex",
                  columnGap: "6px",
                  alignItems: "center",
                }}
              >
                <Icons.Swiss size="26px" color={mainColors.primary[400]} />
                <Typography style={{}}>Swiss Made</Typography>
              </Box>
              <Typography style={{}}>
                The first batch of watches will be delivered in the month of May
              </Typography>
              <Button fullWidth darkenColors onClick={handleProductToCart}>
                <Typography>Add to Cart</Typography>
              </Button>

              <Typography
                component="div"
                dangerouslySetInnerHTML={{
                  __html: productData?.description as string,
                }}
                style={{}}
              ></Typography>
            </Box>
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
    </Box>
  );
};

export default Product;
