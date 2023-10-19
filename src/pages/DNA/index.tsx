import { Box, Grid, Typography } from "@mui/material";
import { Colors } from "../../theme/theme";
import { i18n } from "../../translations/i18n";

const Title = ({ label }: { label: string }) => {
  return (
    <Typography
      style={{
        textDecoration: "underline",
        cursor: "pointer",
        fontSize: "34px",
        letterSpacing: "-1px",
        textAlign: "center",
        fontWeight: "bold",
        border: `solid 3px #FF0000A6`,
        padding: "0px 30px",
        borderRadius: "4px",
      }}
    >
      {label}
    </Typography>
  );
};

const Text = ({
  label,
  children,
}: {
  label: string;
  children?: React.ReactNode;
}) => {
  return (
    <Typography
      style={{
        fontSize: "19px",
        lineHeight: "23px",
        letterSpacing: "-1px",
        textAlign: "justify",
        position: "relative",
      }}
    >
      {label}
    </Typography>
  );
};

const Boxify = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      rowGap="20px"
      width="100%"
      alignItems="center"
      style={{ position: "relative" }}
    >
      {children}
    </Box>
  );
};

const Image = ({ src, shadow }: { src: string; shadow?: boolean }) => {
  return (
    <img
      src={src}
      alt=""
      style={{
        width: "100%",
        height: "300px",
        objectFit: "cover",
        borderRadius: "2px",
        boxShadow: shadow
          ? `-50px -16px 0px ${Colors.redish[40050]}`
          : undefined,
      }}
    />
  );
};

const DNA = () => {
  return (
    <Grid container spacing="60px">
      <Grid item xs={6} display="flex" justifyContent="center">
        <Boxify>
          <Title label={i18n.t("pages.dna.theBrand")} />
          <Text
            label={
              "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
          ></Text>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_qzpnqzpeDsyU0BQxhVQR6NnW0guCQYtD7A&usqp=CAU" />
          <Text
            label={
              "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
          />
          <Text
            label={
              "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
          />
        </Boxify>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="center">
        <Boxify>
          <Title label={i18n.t("pages.dna.theLogo")} />
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZPl19ZYSmtz0ysik-f_dbd76WtqjjFwMwAw&usqp=CAU" />
          <Text
            label={
              "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
          />
          <Text
            label={
              "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
          />
          <Image
            shadow
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-NNwjYXFSXqQ6Fj7mFSdpggmkZI53fgoNsg&usqp=CAU"
          />
        </Boxify>
      </Grid>
    </Grid>
  );
};

export default DNA;
