import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import miniLogo from "../../../assets/miniLogo.svg";
import { Icons } from "../../../components/Icons";
import { setCookiePolicy } from "../../../redux/general/actions";
import { Colors } from "../../../theme/theme";
import { i18n } from "../../../translations/i18n";
import { options } from "./constants";

const Footer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));
  const handleInstagram = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = "instagram://user?username=thesecretwatchproject";
      setTimeout(() => {
        window.location.href =
          "https://instagram.com/thesecretwatchproject?igshid=OGQ5ZDc2ODk2ZA==";
      }, 1000);
    } else {
      window.open(
        "https://instagram.com/thesecretwatchproject?igshid=OGQ5ZDc2ODk2ZA==",
        "_blank"
      );
    }
  };
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
              flexDirection: mobile ? "column" : "row",
              columnGap: "30px",
              rowGap: "10px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {options.map((option) => {
              return (
                <Typography
                  style={{
                    color: Colors.white[400],
                    fontSize: "14px",
                    cursor: "pointer",
                  }}
                  key={option.name}
                  onClick={() => {
                    if (option.name === "Cookie Policy")
                      dispatch(setCookiePolicy(true));
                    else navigate(option.link);
                  }}
                >
                  {option.name}
                </Typography>
              );
            })}
          </Box>
          <Box>
            <Icons.Instagram
              onClick={handleInstagram}
              size={"20px"}
              color={Colors.white[400]}
              style={{ cursor: "pointer" }}
            />
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
