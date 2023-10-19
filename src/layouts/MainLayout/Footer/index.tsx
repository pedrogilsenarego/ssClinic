import { Box, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import miniLogo from "../../../assets/miniLogo.svg";
import { Colors } from "../../../theme/theme";
import { i18n } from "../../../translations/i18n";
import { options } from "./constants";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Box style={{ backgroundColor: Colors.blackish[400] }}>
      <Container maxWidth="xl">
        <Box
          style={{
            padding: "80px 0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            rowGap: "20px",
          }}
        >
          <img src={miniLogo} alt="logo" style={{ width: "100px" }} />
          <Box
            style={{
              display: "flex",
              columnGap: "30px",
              justifyContent: "center",
            }}
          >
            {options.map((option) => {
              return (
                <Typography
                  style={{ color: Colors.white[400] }}
                  key={option.name}
                  onClick={() => navigate(option.link)}
                >
                  {option.name}
                </Typography>
              );
            })}
          </Box>
          <Typography
            style={{
              color: Colors.white[40050],
              fontWeight: 200,
              fontSize: "12px",
            }}
          >
            {i18n.t("footer.registeredBrand")}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
