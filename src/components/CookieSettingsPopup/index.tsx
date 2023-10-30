import { Box, Divider, Typography } from "@mui/material";
import { i18n } from "../../translations/i18n";
import Popup from "../Popup";

type Props = {
  openPopup: boolean;
  setOpenPopup: (openPopup: boolean) => void;
};

const CookieSettingsPopup = ({ openPopup, setOpenPopup }: Props) => {
  return (
    <Popup
      openPopup={openPopup}
      setOpenPopup={setOpenPopup}
      onClose={() => setOpenPopup(false)}
    >
      <Box>
        <Typography style={{ fontWeight: 800 }}>
          {i18n.t("cookieSettings.title")}
        </Typography>
        <Divider />
      </Box>
    </Popup>
  );
};

export default CookieSettingsPopup;
