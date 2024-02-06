import { Typography, useMediaQuery, useTheme } from "@mui/material";
import Image1 from "../../../../assets/Airport.svg";
import Limousine from "../../../../assets/Limousine.svg";
import Valet from "../../../../assets/Valet.svg";
import Button from "../../../../components/Ui/Button";
import { i18n } from "../../../../translations/i18n";

const Escort = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const iconSize = mobile ? "20px" : "50px";
  const iconTextSize = mobile ? "8px" : "16px";
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: mobile ? "600px" : "670px",
        display: "flex",
        flexDirection: "column",
        rowGap: "100px",
        justifyContent: "center",
      }}
    >
      <img
        alt=""
        style={{
          width: mobile ? "100%" : "50%",
          height: "90vh",
          zIndex: 1,
          position: "absolute",
          objectFit: "cover",
        }}
        src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png)"
      />
      <div
        style={{
          paddingTop: "5%",
          margin: mobile ? "0px 20px" : "0px 20%",
          display: "flex",
          zIndex: 10,

          justifyContent: mobile ? "start" : "end",
        }}
      >
        <div
          style={{
            maxWidth: mobile ? undefined : "30%",
            display: "flex",
            flexDirection: "column",
            zIndex: 1000,
            rowGap: "40px",
          }}
        >
          <div>
            <Typography
              style={{
                textTransform: "uppercase",
                fontSize: mobile ? "8px" : "15px",
              }}
            >
              {i18n.t("pages.home.conciergeServices")}
            </Typography>
            <Typography
              style={{
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: mobile ? "28px" : "32px",
              }}
            >
              {i18n.t("pages.home.conciergeTitle")}
            </Typography>
          </div>
          <Typography
            dangerouslySetInnerHTML={{
              __html: i18n.t("pages.home.conciergeText"),
            }}
            style={{
              fontSize: mobile ? "12px" : "16px",
            }}
          />

          <Button
            fullWidth={mobile ? false : true}
            style={{ marginLeft: "10px", marginRight: "50px" }}
          >
            <Typography style={{ fontSize: mobile ? "11px" : "16px" }}>
              {" "}
              {i18n.t("pages.home.conciergeButton")}
            </Typography>
          </Button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          columnGap: mobile ? "0px" : "70px",
          width: "100%",
          padding: mobile ? "0px 20px" : undefined,
          zIndex: 10,

          justifyContent: mobile ? "space-between" : "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            columnGap: "10px",
            flexDirection: mobile ? "column" : "row",
          }}
        >
          <img
            src={Image1}
            alt=""
            style={{
              height: iconSize,
            }}
          />
          <Typography
            style={{ textTransform: "uppercase", fontSize: iconTextSize }}
          >
            {i18n.t("pages.home.hotel")}
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",

            columnGap: "10px",
            flexDirection: mobile ? "column" : "row",
          }}
        >
          <img
            src={Image1}
            alt=""
            style={{
              height: iconSize,
            }}
          />
          <Typography
            style={{ textTransform: "uppercase", fontSize: iconTextSize }}
          >
            {i18n.t("pages.home.travel")}
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            columnGap: "10px",
            flexDirection: mobile ? "column" : "row",
          }}
        >
          <img
            src={Limousine}
            alt=""
            style={{
              height: iconSize,
            }}
          />
          <Typography
            style={{ textTransform: "uppercase", fontSize: iconTextSize }}
          >
            {i18n.t("pages.home.transport")}
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            columnGap: "10px",
            flexDirection: mobile ? "column" : "row",
          }}
        >
          <img
            src={Valet}
            alt=""
            style={{
              height: iconSize,
            }}
          />
          <Typography
            style={{ textTransform: "uppercase", fontSize: iconTextSize }}
          >
            {i18n.t("pages.home.concierge")}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Escort;
